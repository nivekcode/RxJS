/**
 * Created by kevinkreuzer on 05.05.17.
 */
const Observable = require('rxjs/Rx').Observable;

let hotticks$ = Observable.interval(500).take(10).publish();
hotticks$.connect();

hotticks$.subscribe(
    tick => console.log('Subscriber 1 receives', tick),
    err => console.error(err),
    () => console.info('Subscriber 1 has received all ticks')
)

setTimeout(() => {
    hotticks$.subscribe(
        tick => console.log('Subscriber 2 receives', tick),
        err => console.error(err),
        () => console.info('Subscriber 2 has received all ticks')
    )
}, 2500)


