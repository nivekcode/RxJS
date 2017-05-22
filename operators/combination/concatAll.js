/**
 * Created by kevinkreuzer on 22.05.17.
 */
const Observable = require('rxjs').Observable

const ticks$ = Observable.interval(1000).map(tick => tick + 1).take(2)

ticks$
    .map(tick => Observable.interval(1000)
        .take(5)
        .map(innerTick => innerTick + 1)
        .map(innerTick => innerTick * tick)
    )
    .concatAll()
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('I am done')
    )
