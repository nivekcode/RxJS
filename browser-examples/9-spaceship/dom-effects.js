/**
 * Created by kevinkreuzer on 03.06.17.
 */
const canvas = document.createElement('canvas')
const spaceship = document.getElementById('spaceship');
const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const SPACESHIP_WIDTH = 100
const SPACESHIP_HEIGHT = 150

function paintStars(stars) {
    paintBackground()
    ctx.fillStyle = 'white'
    stars.forEach(star => {
        ctx.fillRect(star.x, star.y, star.size, star.size)
    })
}

function paintBackground() {
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function paintSpaceship(cx, cy) {
    ctx.drawImage(spaceship, cx, cy, SPACESHIP_WIDTH, SPACESHIP_HEIGHT);
}

function paint(actors){
    paintStars(actors.stars)
    paintSpaceship(actors.spaceship.x, actors.spaceship.y)
}

