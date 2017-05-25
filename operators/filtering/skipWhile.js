/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

Observable
    .interval(500)
    .take(10)
    .skipWhile(val => val < 5)
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('Done')
    )

