import 'jasmine';
import {TestScheduler} from 'rxjs/testing';
import {throttleTime} from 'rxjs/operators';

describe('Sample marble test', () => {

    const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
    });

    it('must be green', () => {
        scheduler.run(helpers => {
            const {cold, expectObservable, expectSubscriptions} = helpers;
            const stream$ = cold('-a--b--c---|');
            const subs =         '^----------!';
            const expected =     '-a-----c---|';

            expectObservable(stream$.pipe(throttleTime(3, scheduler))).toBe(expected);
            expectSubscriptions(stream$.subscriptions).toBe(subs);
        });
    });

});