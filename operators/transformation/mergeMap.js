/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable
const outterTicks$ = Observable
    .interval(2000)
    .take(2)
    .map(tick => tick + 1)

outterTicks$
    .mergeMap(outerTick => Observable
        .interval(500)
        .take(5)
        .map(innerTick => innerTick + 1)
        .map(innerTick => innerTick * outerTick)
    )
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('I am done')
    )
