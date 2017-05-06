/**
 * Created by kevinkreuzer on 05.05.17.
 */
const svg = document.querySelector('svg')

let ball = addBall()
Rx.Observable.interval(30).take(50)
    .map(i => i * 10)
    .subscribe(i => draw(ball, i))

function addBall() {
    const ball = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    ball.style = 'fill: red; stroke: none;';
    svg.appendChild(ball);
    ball.setAttribute('r', (20) + '');
    return ball;
}

function draw(ball, i) {
    let x = i + 20
    let y = i + 10
    ball.setAttribute('cx', x);
    ball.setAttribute('cy', y);
}
