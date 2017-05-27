/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

const [even$, odd$] = Observable.interval(1000)
    .take(10)
    .partition(value => value % 2 === 0)

Observable.merge(
    odd$
        .map(value => `${value} is an odd value`)
    ,
    even$
        .map(value => `${value} is an even value`)
)
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('Done')
    )