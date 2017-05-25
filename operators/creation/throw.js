/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

Observable.throw('Horrible error')
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('Done')
    )
