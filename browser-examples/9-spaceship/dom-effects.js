/**
 * Created by kevinkreuzer on 03.06.17.
 */
const canvas = document.createElement('canvas')
const spaceship = document.getElementById('spaceship');
const enemieImage = document.getElementById('enemie');
const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const SPACESHIP_WIDTH = 100
const SPACESHIP_HEIGHT = 150
const ENEMIE_WIDTH = 50
const ENEMIE_HEIGHT = 50

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

function paintEnemies(enemies) {
    enemies.forEach(enemie => {
        ctx.drawImage(enemieImage, enemie.x, enemie.y, ENEMIE_WIDTH, ENEMIE_HEIGHT);
    })
}

function paint(actors) {
    paintStars(actors.stars)
    paintSpaceship(actors.spaceship.x, actors.spaceship.y)
    paintEnemies(actors.enemies)
}

