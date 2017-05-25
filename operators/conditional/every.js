/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Observable = require('rxjs').Observable

const oddNumbers$ = Observable.interval(1000)
const evenNumbers$ = Observable.of(2, 4, 6)

//Only emmits values because some checks items do not pass the checks
oddNumbers$
    .every(number => number % 2 === 0)
    .subscribe(
        areAlleEven => console.log('Odd number stream: Are all numbers even: ', areAlleEven),
        err => console.error(err),
        _ => console.info('Done')
    )

evenNumbers$
    .every(number => number % 2 === 0)
    .subscribe(
        areAlleEven => console.log('Even number stream: Are all numbers even: ', areAlleEven),
        err => console.error(err),
        _ => console.info('Done')
    )
