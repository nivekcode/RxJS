/**
 * Created by kevinkreuzer on 02.05.17.
 */
const Observable = require('rxjs/Rx').Observable;

let ticks$ = Observable.interval(500).take(8);
ticks$.subscribe(
    tick => console.log('Tick', tick),
    err => console.error(err),
    () => console.log('Done Ticking')
);