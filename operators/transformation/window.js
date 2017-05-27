/**
 * Created by kevinkreuzer on 27.05.17.
 */
const Observable = require('rxjs').Observable

const ticks$ = Observable.interval(1000).take(10)

ticks$
    .window(Observable.interval(3000))
    .count()
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('Done')
    )
