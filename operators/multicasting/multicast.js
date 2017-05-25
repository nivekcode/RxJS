/**
 * Created by kevinkreuzer on 25.05.17.
 */
const Rx = require('rxjs')

const source$ = Rx.Observable
    .interval(2000)
    .take(5)
    .do(() => console.log('Side Effect #1'))
    .mapTo('Result!')

const multi$ = source$.multicast(() => new Rx.Subject());
multi$.subscribe(val => console.log('Subscriber 1', val));
multi$.subscribe(val => console.log('Subscriber 2', val));
//subscribe subject to source
multi$.connect();
