/**
 * Created by kevinkreuzer on 05.05.17.
 */
const svg = document.querySelector('svg')

let ball = createBall()
const easeLinear = x => x;
function easeOutBounce(pos) {
    if ((pos) < (1 / 2.75)) {
        return (7.5625 * pos * pos);
    } else if (pos < (2 / 2.75)) {
        return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
    } else if (pos < (2.5 / 2.75)) {
        return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
    } else {
        return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
    }
}

function createBall() {
    const ball = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    ball.style = 'fill: red; stroke: none;';
    svg.appendChild(ball);
    ball.setAttribute('r', (20) + '');
    return ball;
}

let duration = 2000;

new Rx.Observable(observer => {
    const start = Date.now();
    const animate = () => {
        requestAnimationFrame(() => {
            const diff = Date.now() - start
            if (diff < duration) {
                observer.next(diff / duration);
            } else {
                observer.next(1);
                observer.complete();
            }
            animate();
        })
    }
    animate();
})
    .map(t => ({
        t,
        x: easeLinear(t) * 600,
        y: easeOutBounce(t) * 500
    }))
    .do(({x, y}) => {
        ball.setAttribute('cx', x);
        ball.setAttribute('cy', y);
    })
    .finally(() => ball.remove())
    .subscribe(e => console.log(e));

