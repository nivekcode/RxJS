/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

const empty$ = Observable.empty()

empty$
    .defaultIfEmpty('Nothing was emmited')
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('Done')
    )

