/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

const ticks$ = Observable.interval(1000)
    .publish()

const observerOne = {
    next: tick => console.log(`Observer 1 receives: ${tick}`),
    error: err => cosnole.error(err),
    complete: _ => console.log('I am done')
}

const observerTwo = {
    next: tick => console.log(`Observer 2 receives: ${tick}`),
    error: err => cosnole.error(err),
    complete: _ => console.log('I am done')
}

ticks$.subscribe(observerOne)

Observable.timer(5000).subscribe(e => ticks$.subscribe(observerTwo))
Observable.timer(2000).subscribe(e => ticks$.connect())
