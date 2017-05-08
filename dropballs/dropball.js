/**
 * Created by kevinkreuzer on 05.05.17.
 */
const svg = document.querySelector('svg')
let duration = 2000;
const easeLinear = x => x;

function easeOutBounce(t) {
    if ((t) < (1 / 2.75)) {
        return (7.5625 * t * t);
    } else if (t < (2 / 2.75)) {
        return (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);
    } else if (t < (2.5 / 2.75)) {
        return (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);
    } else {
        return (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);
    }
}

function createBall() {
    const ball = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    ball.style = 'fill: red; stroke: none;';
    svg.appendChild(ball);
    ball.setAttribute('r', (20) + '');
    return ball;
}

function dropBall() {
    let ball = createBall()
    return new Rx.Observable(observer => {
        const start = Date.now();
        const animate = () => {
            let id = requestAnimationFrame(() => {
                const diff = Date.now() - start
                if (diff < duration) {
                    observer.next(diff / duration);
                    animate();
                } else {
                    observer.next(1);
                    observer.complete();
                    cancelAnimationFrame(id);
                }
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
}