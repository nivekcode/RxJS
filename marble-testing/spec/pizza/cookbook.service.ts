import {Ingredient} from './ingredient';
import {from, timer} from 'rxjs';
import {delayWhen, pluck} from 'rxjs/operators';

export class CookbookService {

    private cookbook: Ingredient[] = [
        {name: '🍕', time: 0},
        {name: '🍅', time: 1000},
        {name: '🧀', time: 1000},
        {name: '️️🌶️', time: 2000},
        {name: '🍄', time: 3000}
    ];

    public pizzaIngredient$ = from(this.cookbook).pipe(
        delayWhen((ingredient: Ingredient) => timer(ingredient.time)),
        pluck('name')
    );
}