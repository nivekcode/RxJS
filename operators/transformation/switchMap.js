/**
 * Created by kevinkreuzer on 27.05.17.
 */
const Observable = require('rxjs').Observable

const ticks$ = Observable.interval(1000).take(3)

ticks$
    .switchMap(tick => Observable.interval(200).take(10))
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('Done')
    )
