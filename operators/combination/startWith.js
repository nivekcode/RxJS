/**
 * Created by kevinkreuzer on 24.05.17.
 */
const Observable = require('rxjs').Observable

const ticks$ = Observable.interval(1000).take(5)

ticks$
    .startWith('I am starting')
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('I am done')
    )
