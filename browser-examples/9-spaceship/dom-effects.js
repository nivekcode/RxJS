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
const SCORE_INCREASE = 10

function paintStars(stars) {
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
    enemies.forEach(enemy => {
        if (!enemy.isDead) {
            ctx.drawImage(enemieImage, enemy.x, enemy.y, ENEMIE_WIDTH, ENEMIE_HEIGHT);
            paintEnemieShots(enemy.shots)
        }
    })
}

function paintEnemieShots(shots) {
    shots.forEach(shot => {
        shot.y += 15
        drawTriangle(shot.x, shot.y, 10, 'blue', 'down')
    })
}

function paintShot(shots, enemies) {
    shots.forEach(shot => {
        for (let l = 0; l < enemies.length; l++) {
            const enemy = enemies[l]
            if (!enemy.isDead && collision(shot, enemy)) {
                scoreSubject.next(SCORE_INCREASE)
                enemy.isDead = true
                shot.x = shot.y = -100
                break;
            }
        }
        shot.y -= 15
        drawTriangle(shot.x, shot.y, 10, 'red', 'up')
    })
}

function drawTriangle(x, y, width, color, direction) {
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.moveTo(x - width, y)
    ctx.lineTo(x, direction === 'up' ? y - width : y + width)
    ctx.lineTo(x + width, y)
    ctx.lineTo(x - width, y)
    ctx.fill()
}

function collision(target1, target2) {
    return (target1.x > target2.x - 40 && target1.x < target2.x + 40) &&
        (target1.y > target2.y - 40 && target1.y < target2.y + 40);
}

function gameOver(ship, enemies) {
    return enemies.some(function (enemy) {
        if (collision(ship, enemy)) {
            return true
        }
        return enemy.shots.some(function (shot) {
            return collision(ship, shot)
        })
    })
}

function paintScore(score) {
    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 26px sans-serif'
    ctx.fillText('Score: ' + score, 40, 43)
}

function paint(actors) {
    paintBackground()
    paintStars(actors.stars)
    paintSpaceship(actors.spaceship.x, actors.spaceship.y)
    paintEnemies(actors.enemies)
    paintShot(actors.shot, actors.enemies)
    paintScore(actors.score)
}

