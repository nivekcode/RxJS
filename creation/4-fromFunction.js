/**
 * Created by kevinkreuzer on 01.05.17.
 */
const rx = require('rxjs/Rx');
const Observable = rx.Observable;

let subscribeAndLog = (title, stream) => {
    console.log(title);
    console.log('*******************************************');
    stream.subscribe(
        fruit => console.log(fruit),
        err => console.error(err),
        () => console.info('I have got no more fruits')
    );
    console.log('*******************************************');
}

//From Array
let fruitsArray = ['Banana', 'Kiwi', 'Apple', 'Peach'];
let fruitsFromArray$ = Observable.from(fruitsArray);
subscribeAndLog('From Array', fruitsFromArray$);

//From Iterable
let fruitIterable = {}
fruitIterable[Symbol.iterator] = function* () {
    yield 'Banana';
    yield 'Kiwi';
    yield 'Apple';
};

let fruitsFromIterator$ = Observable.from(fruitIterable);
subscribeAndLog('From Iterable', fruitsFromIterator$);

//From Generators
let createFruitGenerator = function* (){
    yield 'Banana';
    yield 'Kiwi';
    yield 'Apple';
}
let fruitGenerator = createFruitGenerator();
let fruitsFromGenerator$ = Observable.from(fruitGenerator);
subscribeAndLog('From Generator', fruitsFromGenerator$);

//From String
let fruitsFromString$ = Observable.from('Banana');
subscribeAndLog('Watch out! Strings are alos iterable', fruitsFromString$);
