/**
 * Created by kevinkreuzer on 31.05.17.
 */
const clickPassed = document.querySelector('#passedClicks')
const ticks = document.querySelector('#ticks')

const updateTick = (tick) => ticks.innerHTML = `Ticking: ${tick}`
const updateTickTillClick = (passedTicks) => clickPassed.innerHTML = `Passed ticks since last click ${passedTicks}`

