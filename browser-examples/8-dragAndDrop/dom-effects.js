/**
 * Created by kevinkreuzer on 02.06.17.
 */
let canvas = document.querySelector('#draggableArea')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
const image = document.getElementById('source');
const IMAGE_SIZE = 200
const JUMBOTRON_HEIGHT = 250

ctx.drawImage(image, canvas.width / 2 - (IMAGE_SIZE / 2), 50, IMAGE_SIZE, IMAGE_SIZE);

function changeRectPosition(cx, cy) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, cx, cy, IMAGE_SIZE, IMAGE_SIZE);
}

