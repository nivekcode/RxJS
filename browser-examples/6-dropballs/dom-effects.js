/**
 * Created by kevinkreuzer on 31.05.17.
 */
let svg = document.querySelector('svg')
let dropButton = document.getElementById('drop-ball-button')
let dropedCounter = document.getElementById('dropped-counter')
let finishedCounter = document.getElementById('finished-counter')

const updateCounter = (state) => {
    dropedCounter.innerHTML = state.dropped
    finishedCounter.innerHTML = state.finished
}

