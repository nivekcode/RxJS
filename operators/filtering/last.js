/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

Observable.from([1, 2, 3, 4, 5])
    .last()
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('Done')
    )
