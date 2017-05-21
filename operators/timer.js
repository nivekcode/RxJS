/**
 * Created by kevinkreuzer on 21.05.17.
 */

const Observable = require('rxjs').Observable

//Emits 0 after one second and completes
const timerOne$ = Observable.timer(1000)

//Emits first value after one second and then after all two seconds
const timerTwo$ = Observable.timer(1000, 2000)

timerOne$.subscribe(
    e => console.log('Timer One', e),
    err => console.error(err),
    _ => console.info('Done')
)

timerTwo$.subscribe(
    e => console.log('Timer Two', e),
    err => console.error(err),
    _ => console.info('Done')
)
