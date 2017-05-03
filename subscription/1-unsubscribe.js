/**
 * Created by kevinkreuzer on 03.05.17.
 */
const Observable = require('rxjs/Rx').Observable;

let ticks$ = Observable.interval(500).take(8);

let subscription = ticks$.subscribe(
    tick => console.log('Receiver 1 received a tick', tick),
    err => console.error(err),
    () => console.info('I am done')
);

setTimeout(() => {
    subscription.unsubscribe();
}, 2000);


