import {TestScheduler} from 'rxjs/testing';
import {interval} from 'rxjs';
import {take} from 'rxjs/operators';

describe('Interval test', () => {

    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('should emit a number every second and complete after 5 emissions', () => {
        testScheduler.run(({expectObservable}) => {
            const expectedMarble = '1s a 999ms b 999ms c 999ms d 999ms (e|)';
            const expectedValues = {a: 0, b: 1, c: 2, d: 3, e: 4};
            const source$ = interval(1000).pipe(take(5));
            expectObservable(source$).toBe(expectedMarble, expectedValues);
        });
    });


});
