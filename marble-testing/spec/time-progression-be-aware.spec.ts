import {from, timer} from 'rxjs';
import {delayWhen, pluck} from 'rxjs/operators';
import {TestScheduler} from 'rxjs/testing';

describe('Possible pitfall when using time progression syntax', () => {

    let testScheduler: TestScheduler;
    const schedule = [
        {value: 'a', time: 0},
        {value: 'b', time: 1000},
        {value: 'c', time: 1000},
        {value: 'd', time: 2000}
    ];

    const source$ = from(schedule).pipe(
        delayWhen((item: any) => timer(item.time)),
        pluck('value')
    );

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('should emit the values in the correct order', () => {
        testScheduler.run(({expectObservable}) => {
            const expectedMarble = 'a 999ms (bc) 996ms (d|)';
            expectObservable(source$).toBe(expectedMarble);
        });
    });

});