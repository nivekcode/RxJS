/**
 * Created by kevinkreuzer on 20.05.17.
 */
function createEye(svg, cx) {
    const eye = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    eye.style = 'fill: transparent; stroke: black;';
    svg.appendChild(eye);
    eye.setAttribute('cx', cx)
    eye.setAttribute('cy', '250')
    eye.setAttribute('r', '100');
}

function createPupil(svg, cx) {
    const pupil = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    pupil.style = 'fill: black; stroke: black;';
    svg.appendChild(pupil);
    pupil.setAttribute('cx', cx)
    pupil.setAttribute('cy', '250')
    pupil.setAttribute('r', '20');
}
