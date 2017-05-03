/**
 * Created by kevinkreuzer on 03.05.17.
 */
const Observable = require('rxjs/Rx').Observable;

let heros$ = Observable.of('Batman', 'Spiderman', 'Aquaman');

let promise = heros$.forEach(hero => console.log('Hero', hero));
promise.then(
    () => console.log('Done'),
    err => console.error(err)
);
