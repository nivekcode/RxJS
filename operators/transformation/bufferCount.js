/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

const ticks$ = Observable.interval(1000)
    .take(10)

ticks$
    .bufferCount(3)
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.log('Done')
    )

