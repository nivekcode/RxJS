/**
 * Created by kevinkreuzer on 24.05.17.
 */
const Observable = require('rxjs').Observable

const evenTicks$ = Observable.interval(500).filter(tick => tick % 2 === 0).take(5)
const oddTicks$ = Observable.interval(500).filter(tick => tick % 2 !== 0).take(5)

Observable.merge(evenTicks$, oddTicks$)
    .subscribe(
        e => console.log('Tick', e),
        err => console.error(err),
        _ => console.info('I am done')
    )
