import 'jasmine';
import {TestScheduler} from 'rxjs/testing';
import {map} from 'rxjs/operators';

describe('Marble test without third party libs', () => {

    it('test map function only with TestScheduler', () => {
        const scheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
        const source$ = scheduler.createColdObservable('--a--b--c|', {a: 5, b: 10, c: 15});
        const expectedMarble = '--x--y--z|';
        const expectedValues = {x: 10, y: 20, z: 30};

        const result$ = source$.pipe(map((x: number) => x * 2));
        scheduler.expectObservable(result$).toBe(expectedMarble, expectedValues);
        scheduler.flush();
    });
});