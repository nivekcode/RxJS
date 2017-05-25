/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

Observable.from([1,2,3,4,5])
    .ignoreElements()
    .subscribe(
        e => console.log('Element received'),
        err => console.error(err),
        _ => console.info('Done')
    )
