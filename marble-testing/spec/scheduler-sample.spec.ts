import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {TestScheduler} from 'rxjs/testing';

describe('Scheduler sample', () => {

    let scheduler: TestScheduler;

    beforeEach(() => {
        scheduler = new TestScheduler((actual, expected) => expect(actual).toEqual(expected));
    });

    const evenTimesTen = (source$: Observable<number>): Observable<number> => {
        return source$.pipe(
            filter(n => n % 2 === 0),
            map(n => n * 10)
        );
    };

    it('should filter out odd numbers and multiply them by ten', () => {
        scheduler.run(({cold, expectObservable}) => {
            const values = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10};
            const source$ = cold('a-b-c-d-e-f-g-h-i-j|', values);
            const expectedMarble = '--a---b---c---d---e|';
            const expectedValues = {a: 20, b: 40, c: 60, d: 80, e: 100};

            const result$ = evenTimesTen(source$);
            expectObservable(result$).toBe(expectedMarble, expectedValues);
        });
    });
});
