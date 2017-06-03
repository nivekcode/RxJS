/**
 * Created by kevinkreuzer on 03.06.17.
 */
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)
canvas.width = window.innerWidth
canvas.height = window.innerHeight

function paintStarts(stars) {
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'white'
    stars.forEach(star => {
        ctx.fillRect(star.x, star.y, star.size, star.size)
    })
}

