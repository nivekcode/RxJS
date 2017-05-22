/**
 * Created by kevinkreuzer on 21.05.17.
 */
const Observable = require('rxjs').Observable

const tickOne$ = Observable.interval(1000).take(3)
const tickTwo$ = Observable.interval(800).take(5)
const tickThree$ = Observable.interval(500).take(8)

Observable
    .combineLatest(tickOne$, tickTwo$, tickThree$,
        (tickOne, tickTwo, tickThree) => ({tickOne, tickTwo, tickThree}))
    .subscribe(
        ticks => console.log(ticks),
        err => console.error(err),
        _ => console.log('I am done ticking')
    )
