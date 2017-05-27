/**
 * Created by kevinkreuzer on 27.05.17.
 */
const Observable = require('rxjs').Observable
const ticks$ = Observable.interval(1000).take(10)
const start$ = Observable.timer(0, 5000)

ticks$
    .windowToggle(start$, () => Observable.timer(3000))
    .do(e => console.log('New window'))
    .switch()
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('Done')
    )
