import {TestScheduler} from 'rxjs/testing';
import {of} from 'rxjs';

describe('Pizza marble', () => {

    let scheduler: TestScheduler;

    beforeEach(() => scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
    }));

    it('should stream the correct ingredients', () => {
        scheduler.run(({expectObservable}) => {
            const expectedMarble = '(abcde|)';
            const expectedIngredients = {a: '🍕', b: '🍅', c: '🧀', d: '🌶️', e: '🍄'};
            const pizzaIngredient$ = of('🍕', '🍅', '🧀', '🌶️', '🍄');
            expectObservable(pizzaIngredient$).toBe(expectedMarble, expectedIngredients);
        });
    });
});