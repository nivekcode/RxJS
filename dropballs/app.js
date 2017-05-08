/**
 * Created by kevinkreuzer on 08.05.17.
 */

let dropButton = document.getElementById('drop-ball-button')
const dropClicks$ = Rx.Observable.fromEvent(dropButton, 'click')

/*
Contact Map --> Drops new ball when the previous ball has finished
Switch Map --> Removes the current ball when a new ball arrives
Merge Map --> Allows you to have multiple balls at the same time
 */

dropClicks$
    .mergeMap(_ => dropBall())
    .subscribe()

