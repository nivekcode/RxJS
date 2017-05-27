/**
 * Created by kevinkreuzer on 27.05.17.
 */
const Observable = require('rxjs').Observable

const ticks$ = Observable.interval(1000).take(5)
let observer = {
    next: val => console.log(val),
    error: err => console.error(err),
    complete: _ => console.log('Done ticking')
}

let transformWithMap$ = ticks$
    .do(value => {
        if (value === 0) {
            console.log('Transformed with normal map function')
            console.log('=====================================')
        }
    })
    .map(value => value + 1)

let transformWithLet$ = ticks$
    .do(value => {
        if (value === 0) {
            console.log('Transformed with let function')
            console.log('=====================================')
        }
    })
    .let(observable => observable.map(value => value + 1))

Observable.concat(transformWithMap$, transformWithLet$)
    .subscribe(observer)
