/**
 * Created by kevinkreuzer on 02.05.17.
 */
const rx = require('rxjs/Rx');
const Observable = rx.Observable;
const EventEmitter = require('events').EventEmitter;
let eventEmitter = new EventEmitter();

var source = Observable.fromEvent(eventEmitter, 'eatfruit');
source.subscribe(
    e => console.log('I am eating a ' + e),
    err => console.error(err),
    info => console.info('All fruits eaten')
);

eventEmitter.emit('eatfruit', 'Banana');
eventEmitter.emit('eatfruit', 'Kiwi');
eventEmitter.emit('eatfruit', 'Peach');
eventEmitter.emit('eatfruit', 'Apple');

