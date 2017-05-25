/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

Observable
    .interval(1000)
    .take(5)
    .map(tick => tick * 5)
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('Done')
    )
