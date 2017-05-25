/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

Observable.interval(500)
    .take(5)
    .skip(3)
    .subscribe(
        e => console.log(e)
    )
