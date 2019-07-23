import {of} from 'rxjs';
import {toArray} from 'rxjs/operators';

describe('Subscribe and assert', () => {

    it('should assert the Pizza ingredients in the right order', done => {
        let index = 0;
        const expectedPIzzaIngredients = ['🍕', '🍅', '🧀', '🌶️', '🍄'];
        const pizzaIngredient$ = of('🍕', '🍅', '🧀', '🌶️', '🍄');

        pizzaIngredient$.subscribe((ingridient: string) => {
            expect(ingridient).toEqual(expectedPIzzaIngredients[index]);
            index++;
            done();
        });
    });

    it('should assert the Pizza ingredients in the right order', done => {
        const expectedPIzzaIngredients = ['🍕', '🍅', '🧀', '🌶️', '🍄'];
        const pizzaIngredient$ = of('🍕', '🍅', '🧀', '🌶️', '🍄');

        pizzaIngredient$.pipe(toArray()).subscribe((ingridients: string[]) => {
            expect(ingridients).toEqual(expectedPIzzaIngredients);
            done();
        });
    });

});