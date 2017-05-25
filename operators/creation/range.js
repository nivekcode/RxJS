/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable
const range$ = Observable.range(1, 10)

range$
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('I am done')
    )
