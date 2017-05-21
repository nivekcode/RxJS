/**
 * Created by kevinkreuzer on 21.05.17.
 */

const ticks$ = Rx.Observable.interval(1000)
const click$ = Rx.Observable.fromEvent(document, 'click')
const clickPassed = document.querySelector('h3')

ticks$
    .window(click$)
    .map(obs => obs.count())
    .switch()
    .subscribe(
        passedTicks => clickPassed.innerHTML = `Tickes passed since last click: ${passedTicks}`
    )
