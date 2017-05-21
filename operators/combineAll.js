/**
 * Created by kevinkreuzer on 21.05.17.
 */
//Use this observable to comine the Latest value from inner Observables
const Observable = require('rxjs').Observable

const ticks$ = Observable.interval(1000).take(2)

const mapped$ = ticks$
    .map(tick => Observable.interval(500).take(5))

mapped$
    .combineAll()
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        () => console.info('Done')
    )
