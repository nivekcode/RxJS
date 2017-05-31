/**
 * Created by kevinkreuzer on 21.05.17.
 */
const ticks$ = Rx.Observable
    .interval(1000)
    .map(tick => tick + 1)
const click$ = Rx.Observable.fromEvent(document, 'click')

const sharedTicks$ = ticks$.share()
sharedTicks$
    .subscribe(
        tick => updateTick(tick)
    )

sharedTicks$
    .window(click$)
    .map(obs => obs.count())
    .switch()
    .subscribe(
        passedTicks => updateTickTillClick(passedTicks)
    )
