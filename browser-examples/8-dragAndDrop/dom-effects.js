/**
 * Created by kevinkreuzer on 02.06.17.
 */
let svg = document.querySelector('#draggableArea')
svg.setAttribute('width', '1200')
svg.setAttribute('height', '800')
var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

function createRect(cx, cy) {
    rect.setAttribute('x', cx);
    rect.setAttribute('y', cy);
    rect.setAttribute('height', '50');
    rect.setAttribute('width', '50');
    rect.setAttribute('fill', 'white');
    svg.appendChild(rect);
}

function changeRectPosition(cx, cy){
    rect.setAttribute('x', cx);
    rect.setAttribute('y', cy);
}

createRect(50, 50)


