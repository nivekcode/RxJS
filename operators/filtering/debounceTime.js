/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

Observable.range(1, 5)
    .mergeMap(number => Observable
        .timer(Math.random() * 10000)
        .mapTo(number)
    )
    .debounceTime(2000)
    .subscribe(
        e => console.log(e)
    )
