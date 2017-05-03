/**
 * Created by kevinkreuzer on 03.05.17.
 */
const Observable = require('rxjs/Rx').Observable;

let fruits$ = Observable.of('Banana', 'Kiwi', 'Apple');
let observer = {
    next: fruit => console.log(fruit),
    error: () => console.error(err),
    complete: () => console.info('Done')
}

fruits$.subscribe(observer);
