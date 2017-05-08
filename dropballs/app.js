/**
 * Created by kevinkreuzer on 08.05.17.
 */

let dropButton = document.getElementById('drop-ball-button')
const dropClicks$ = Rx.Observable.fromEvent(dropButton, 'click')

dropClicks$.subscribe(
    () => console.log('Drop ball')
)

dropBall().subscribe()