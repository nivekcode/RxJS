/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

Observable.interval(1000)
    .bufferTime(2000)
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('Done')
    )

