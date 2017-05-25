/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

const numbers$ = Observable.interval(500).take(10)
//Only emitt odd numbers
numbers$
    .filter(number => number % 2 === 0)
    .subscribe(
        e => console.log(e)
    )
