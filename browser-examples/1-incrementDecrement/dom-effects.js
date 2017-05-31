/**
 * Created by kevinkreuzer on 31.05.17.
 */
const incrementButton = document.getElementById('increment-button')
const decrementButton = document.getElementById('decrement-button')
const output = document.querySelector('#counter')
output.innerHTML = 0;

function updateOutputValue(value) {
   output.innerHTML = value
}
