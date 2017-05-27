/**
 * Created by kevinkreuzer on 27.05.17.
 */
const Observable = require('rxjs').Observable

Observable.timer(0, 1000)
    .delay(3000)
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('Done')
    )
