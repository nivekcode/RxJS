/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

const timer$ = Observable.timer(2000, 1000).take(5)
timer$.subscribe(
    e => console.log(e),
    err => console.error(err),
    _ => console.info('Done')
)
