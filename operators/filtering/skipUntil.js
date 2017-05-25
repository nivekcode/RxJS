/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

const ticks$ = Observable.interval(500).take(10)

ticks$
    .skipUntil(Observable.timer(2000))
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('Done')
    )
