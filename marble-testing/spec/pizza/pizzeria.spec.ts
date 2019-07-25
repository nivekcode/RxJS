import {TestScheduler} from 'rxjs/testing';
import {CookbookService} from './cookbook.service';

describe('Pizzeria', () => {

    let sut: CookbookService;
    let testScheduler: TestScheduler;

    beforeEach(() => {
        sut = new CookbookService();
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('should emit the ingredients at the correct time', () => {
        testScheduler.run(({expectObservable}) => {
            const expectedMarble = 'a 999ms (bc) 996ms d 999ms (e|)';
            const expectedIngredients = {a: '🍕', b: '🍅', c: '🧀', d: '️️🌶️', e: '🍄'};
            expectObservable(sut.pizzaIngredient$).toBe(expectedMarble, expectedIngredients);
        });
    });

});