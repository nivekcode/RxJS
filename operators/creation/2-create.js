/**
 * Created by kevinkreuzer on 01.05.17.
 */
const Rx = require('rxjs/Rx');
const Observable = Rx.Observable;

let fruits$ = Observable.create(observer => {
    observer.next('Banana');
    observer.next('Kiwi');
    observer.next('Ananas');
    observer.next('Apple');
    observer.complete();
});

fruits$.subscribe(
    fruit => console.log(fruit),
    err => console.error(err),
    () => console.info('All fruits emmited')
);
