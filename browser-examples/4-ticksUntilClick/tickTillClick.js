/**
 * Created by kevinkreuzer on 21.05.17.
 */

const ticks$ = Rx.Observable
    .interval(1000)
    .map(tick => tick + 1)
const click$ = Rx.Observable.fromEvent(document, 'click')
const clickPassed = document.querySelector('#passedClicks')
const ticks = document.querySelector('#ticks')

const sharedTicks$ = ticks$.share()
sharedTicks$
    .subscribe(
        tick => ticks.innerHTML = `Ticking: ${tick}`
    )

sharedTicks$
    .window(click$)
    .map(obs => obs.count())
    .switch()
    .subscribe(
        passedTicks => clickPassed.innerHTML = `Passed ticks since last click ${passedTicks}`
    )
