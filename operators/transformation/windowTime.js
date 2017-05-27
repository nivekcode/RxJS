/**
 * Created by kevinkreuzer on 27.05.17.
 */
const Observable = require('rxjs').Observable

const ticks$ = Observable.interval(1000).take(10)

ticks$
    .windowTime(3000)
    .do(e => console.log('New Window'))
    .mergeAll()
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('I am done')
    )

