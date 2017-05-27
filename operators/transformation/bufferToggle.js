/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

const ticks$ = Observable.timer(0, 1000)
    .take(20)
const start$ = Observable.timer(0, 5000)
const end$ = Observable.interval(3000)

ticks$
    .bufferToggle(start$, () => end$)
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('Done')
    )
