/**
 * Created by kevinkreuzer on 03.05.17.
 */
const Observable = require('rxjs/Rx').Observable;

let tick$ = Observable.interval(500).take(10);

tick$.subscribe(
    tick => console.log('Subscriber 1 receives', tick),
    err => console.error(err),
    () => console.info('Subscriber 1 has received all ticks')
)
setTimeout(() => {
    tick$.subscribe(
        tick => console.log('Subscriber 2 receives', tick),
        err => console.error(err),
        () => console.info('Subscriber 2 has received all ticks')
    )
}, 2500)
