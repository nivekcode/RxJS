/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

const ticks$ = Observable.interval(500)
    .take(10)
    .share()

const observerOne = {
    next: e => console.log('Observer 1 receives', e),
    error: error => console.error(err),
    complete: _ => console.log('Observer 2 is done')
}

const observerTwo = {
    next: e => console.log('Observer 2 receives', e),
    error: error => console.error(err),
    complete: _ => console.log('Observer 1 is done')
}

ticks$.subscribe(observerOne)
Observable.timer(2000)
    .subscribe(
        e => ticks$.subscribe(observerTwo)
    )
