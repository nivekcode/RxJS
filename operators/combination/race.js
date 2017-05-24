/**
 * Created by kevinkreuzer on 24.05.17.
 */
const Observable = require('rxjs').Observable

const mario$ = Observable.timer(1000).mapTo('Mario')
const donkeyKong$ = Observable.timer(800).mapTo('Donkey Kong')
const toad$ = Observable.timer(1200).mapTo('Toad')

Observable.race(
    mario$, donkeyKong$, toad$
)
    .subscribe(
        winner => console.log(`${winner} has won the race`),
        err => console.error('The was a crash in the race'),
        _ => console.info('The race is finished')
    )
