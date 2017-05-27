/**
 * Created by kevinkreuzer on 27.05.17.
 */
const Observable = require('rxjs').Observable

Observable.interval(1000)
    .take(5)
    .scan((total, value) => {
        return total + value
    }, 0)
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('Done')
    )
