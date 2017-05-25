/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

const ticks$ = Observable.interval(500).take(20)
const timer$ = Observable.interval(2000)

ticks$
    .buffer(timer$)
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.log('Done')
    )
