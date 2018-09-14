import 'jasmine';
import {TestScheduler} from 'rxjs/testing';
import {filter, map, switchMap, take, throttleTime} from 'rxjs/operators';
import {cold} from 'jasmine-marbles';

describe('Sample marble test', () => {

    const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
    });

    it('must skip the throttled value', () => {
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
        const source$ = cold(   '---a--ba-b---a', values);
        const inner$ = cold(    'c-dca', values);
        const expected$ = cold('---d-eed-e-fed-edb', values);

        const result$ = source$.pipe(
            switchMap((x: number) => inner$.pipe(
                map((y: number) => x + y)
            ))
        );
        expect(result$).toBeObservable(expected$);
    });

});