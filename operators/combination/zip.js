/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

const one$ = Observable.interval(1000).take(2).map(e => `Observable one ${e}`)
const two$ = Observable.interval(500).take(3).map(e => `Observable two ${e}`)
const three$ = Observable.interval(1500).take(2).map(e => `Observable three ${e}`)

Observable.zip(one$, two$, three$)
    .subscribe(
        e => console.log(e),
        err => console.error(err),
        _ => console.info('Done')
    )
