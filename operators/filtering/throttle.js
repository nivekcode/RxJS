/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

const number$ = Observable.interval(500).take(10)

number$
    .throttle(val => Observable.timer(1000))
    .subscribe(
        e => console.log('Even numbers', e),
        err => console.error(err),
        _ => console.info('Done')
    )
