/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

const ticks$ = Observable.interval(1000)

ticks$
    .takeUntil(Observable.timer(4000))
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('Done')
    )
