/**
 * Created by kevinkreuzer on 20.05.17.
 */
function createEye(svg, cx, cy, radius) {
    const eye = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    eye.style = 'fill: white; stroke: black;';
    svg.appendChild(eye);
    eye.setAttribute('cx', cx + '')
    eye.setAttribute('cy', cy + '')
    eye.setAttribute('r', radius + '');
}

function createPupil(svg, cx, cy) {
    console.log('The dCX value', cx)
    const pupil = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    pupil.style = 'fill: black; stroke: black;';
    svg.appendChild(pupil);
    pupil.setAttribute('cx', cx + '')
    pupil.setAttribute('cy', cy + '')
    pupil.setAttribute('r', '20');
    return pupil
}
