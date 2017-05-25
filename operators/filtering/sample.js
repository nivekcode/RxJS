/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

const source$ = Observable.interval(1000)
const example$ = source$.sample(Observable.interval(2000))

const observer = {
    next: e => console.log(e),
    error: err => console.error(err),
    complete: _ => console.info('Done')
}
example$.subscribe(observer)

