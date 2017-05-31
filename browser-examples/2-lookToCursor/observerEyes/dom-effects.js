/**
 * Created by kevinkreuzer on 31.05.17.
 */
const svg = document.querySelector('svg')
const SVG_WIDTH = window.innerWidth
const SVG_HEIGHT = window.innerHeight

svg.setAttribute('width', `${SVG_WIDTH}px`)
svg.setAttribute('height', `${SVG_HEIGHT}px`)

const redrawPupil = (pupil, cx, cy) => {
    pupil.setAttribute('cx', cx)
    pupil.setAttribute('cy', cy)
}
