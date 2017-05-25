/**
 * Created by kevinkreuzer on 01.05.17.
 */

const rx = require('rxjs/Rx');
const Observable = rx.Observable;

let fruits$ = Observable.of('Banana', 'Ananas', 'Peach', 'Strawberry');

fruits$.subscribe(
    fruit => console.log(fruit),
    errr => console.error(err),
    () => console.info('I have got no more fruits')
)
