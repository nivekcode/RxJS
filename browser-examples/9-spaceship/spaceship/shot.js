/**
 * Created by kevinkreuzer on 04.06.17.
 */
const click$ = Rx.Observable.fromEvent(canvas, 'click')
const shot$ = click$
    .withLatestFrom(spaceship$, (click, spaceship) => spaceship)
    .distinctUntilChanged()
    .scan((shots, shot) => {
        shots.push(shot)
        return shots
    }, [])
    .startWith([])
