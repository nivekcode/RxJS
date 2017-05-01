/**
 * Created by kevinkreuzer on 01.05.17.
 */
const rx = require('rxjs/Rx');
const Observable = rx.Observable;

let subscribeAndLog = (stream) => {
    console.log('From Array');
    console.log('*******************************************');
    stream.subscribe(
        fruit => console.log(fruit),
        err => console.error(err),
        () => console.info('I have got no more fruits')
    );
    console.log('*******************************************');
}

let fruitsArray = ['Banana', 'Kiwi', 'Apple', 'Peach'];
let fruitsFromArray$ = Observable.from(fruitsArray);

subscribeAndLog(fruitsFromArray$);


