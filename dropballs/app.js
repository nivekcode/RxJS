/**
 * Created by kevinkreuzer on 08.05.17.
 */

let dropButton = document.getElementById('drop-ball-button')
let dropedCounter = document.getElementById('dropped-counter')
let finishedCounter = document.getElementById('finished-counter')
const dropClicks$ = Rx.Observable.fromEvent(dropButton, 'click')

/*
 Contact Map --> Drops new ball when the previous ball has finished
 Switch Map --> Removes the current ball when a new ball arrives
 Merge Map --> Allows you to have multiple balls at the same time
 */
const updateCounter = (state) => {
    dropedCounter.innerHTML = state.dropped
    finishedCounter.innerHTML = state.finished
}

const BALL_ACTIONS = {
    MOVING: 'MOVING',
    STARTED: 'STARTED',
    ENDED: 'ENDED'
}

dropClicks$
    .mergeMap(_ => dropBall()
        .map(e => ({action: BALL_ACTIONS.MOVING}))
        .startWith({action: BALL_ACTIONS.STARTED})
        .concat([{action: BALL_ACTIONS.ENDED}])
    )
    .scan((state, ballaction) => {
        if (ballaction.action === BALL_ACTIONS.STARTED) {
            state.dropped++;
        }
        if (ballaction.action === BALL_ACTIONS.ENDED) {
            state.finished++;
        }
        return state
    }, {dropped: 0, finished: 0})
    .subscribe(
        state => {
            updateCounter(state)
        }
    )

