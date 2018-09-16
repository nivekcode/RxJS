import 'jasmine';
import {filter, map, mergeMap, switchMap, take, tap, throttleTime} from 'rxjs/operators';
import {cold, getTestScheduler, hot} from 'jasmine-marbles';
import {interval, of, throwError, timer} from 'rxjs';
import {delayedRetry} from './delayedRetry';

describe('Sample marble test', () => {


    it('must skip the throttled value', () => {
        const scheduler = getTestScheduler();
        scheduler.run(helpers => {
            const {cold, expectObservable, expectSubscriptions} = helpers;
            const stream$ = cold('-a--b--c---|');
            const subs = '^----------!';
            const expected = '-a-----c---|';

            expectObservable(stream$.pipe(throttleTime(3))).toBe(expected);
            expectSubscriptions(stream$.subscriptions).toBe(subs);
        });
    });


    it('must add 10 to all values', () => {
        const source$ = cold('--a--b--c--d|', {a: 5, b: 4, c: 10, d: 8});
        const expected$ = cold('--a--b--c--d|', {a: 15, b: 14, c: 20, d: 18});

        const result = source$.pipe(map((x: number) => x + 10));
        expect(result).toBeObservable(expected$)
    });

    it('must filter out values', () => {
        const source$ = cold('--a--b--c--d|', {a: 1, b: 2, c: 3, d: 4});
        const expectedDiagram$ = cold('-----b-----d|', {b: 2, d: 4});

        const result = source$.pipe(filter((x: number) => x % 2 === 0));
        expect(result).toBeObservable(expectedDiagram$);
    });

    it('must map each value to an inner observable', () => {
        const source$ = cold('--a--b--c-d|');
        const inner$ = cold('x--yz|');
        const expected$ = cold('--x--x--x-x--yz|');

        const result$ = source$.pipe(switchMap(() => inner$));
        expect(result$).toBeObservable(expected$);
    });

    it('must add each value from the outer to the inner observable and return the result', () => {
        const values = {a: 5, b: 10, c: 15, d: 20, e: 25, f: 30};
        const source$ = cold('---a--ba-b---a', values);
        const inner$ = cold('c-dca', values);
        const expected$ = cold('---d-eed-e-fed-edb', values);

        const result$ = source$.pipe(
            switchMap((x: number) => inner$.pipe(
                map((y: number) => x + y)
            ))
        );
        expect(result$).toBeObservable(expected$);
    });

    it('must merge inner streams', () => {
        const source$ = cold('--a---a|');
        const inner$ = cold('-bc-|');
        const expected$ = cold('---bc--bc-|');

        const result$ = source$.pipe(mergeMap(() => inner$));
        expect(result$).toBeObservable(expected$);
    });

    it('must concat the inner streams', () => {
        const source$ = cold('--a---a|');
        const inner$ = cold('-bc-|');
        const expected$ = cold('---bc--bc-|');

        const result$ = source$.pipe(mergeMap(() => inner$));
        expect(result$).toBeObservable(expected$);
    });

    it('must test a simple interval', () => {
        const scheduler = getTestScheduler();

        scheduler.run(helpers => {
            const {expectObservable} = helpers;
            const source = timer(10);
            expectObservable(source).toBe('10ms (a|)', {a: 0});
        });

    });

    it('must multply each tick by two', () => {

        const scheduler = getTestScheduler();
        scheduler.run(helpers => {
            const {expectObservable} = helpers;
            const source$ = interval(1000).pipe(
                take(5),
                map((value: number) => value * 2));

            const expectedMarble = '1s a 999ms b 999ms c 999ms d 999ms (e|)';
            const expectedValues = {a: 0, b: 2, c: 4, d: 6, e: 8};

            expectObservable(source$).toBe(expectedMarble, expectedValues);
        });

    });

    it('must retry if the source observable throws an error', () => {

        const scheduler = getTestScheduler();

        scheduler.run(helpers => {

            const {expectObservable} = helpers;
            let counter = 0;
            const source$ = of(counter).pipe(
                tap(() => counter++),
                switchMap(() => {
                    if (counter < 3) {
                        return throwError('Something wrong');
                    }
                    return of(counter);
                })
            );
            const expectedMarble = '2s (a|)';

            const result$ = source$.pipe(delayedRetry(1000, 5));
            expectObservable(result$).toBe(expectedMarble, {a: 3});
        });

    });

    it('must return the value if source observable return a value', () => {
        const source$ = cold('--a|');
        const expected$ = cold('--a|');

        const result$ = source$.pipe(delayedRetry(1000, 5));
        expect(result$).toBeObservable(expected$);
    });

    it('must throw the error after all the retires failed', () => {
        const scheduler = getTestScheduler();

        scheduler.run(helpers => {
            const {expectObservable} = helpers;
            const source$ = cold('--#');
            const expectedMarble = '6002ms #';

            const result$ = source$.pipe(delayedRetry(1000, 5));
            expectObservable(result$).toBe(expectedMarble, null, 'I give up');
        });
    });
});