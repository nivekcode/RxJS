/**
 * Created by kevinkreuzer on 02.05.17.
 */
const rx = require('rxjs/Rx');
const promise = Promise.resolve('A new Banana');

let fromPromise$ = rx.Observable.from(promise);

fromPromise$.subscribe(
    fruit => console.log(fruit),
    err => console.error(err),
    () => console.info('Done')
);
