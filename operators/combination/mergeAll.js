/**
 * Created by kevinkreuzer on 24.05.17.
 */
const Observable = require('rxjs').Observable

const ticks$ = Observable.interval(500).take(5)

ticks$
    .map(tick => Observable.interval(1000)
        .take(2)
        .map(tick => `Value from inner observable ${tick}`)
    )
    .mergeAll()
    .subscribe(
        e => console.log('E', e),
        err => console.error(err),
        _ => console.info('I am done')
    )
