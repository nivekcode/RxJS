/**
 * Created by kevinkreuzer on 20.05.17.
 */
const svg = document.querySelector('svg')
const SVG_WIDTH = 800
const SVG_HEIGHT = 500
const EYE_RADIUS = '100'
const LEFT_EYE_COORDINATES = {
    x: '250',
    y: '250'
}

const RIGHT_EYE_COORDINATES = {
    x: '500',
    y: '250'
}

svg.setAttribute('width', `${SVG_WIDTH}px`)
svg.setAttribute('height', `${SVG_HEIGHT}px`)

createEye(svg, LEFT_EYE_COORDINATES.x, LEFT_EYE_COORDINATES.y, EYE_RADIUS)
createEye(svg, RIGHT_EYE_COORDINATES.x, RIGHT_EYE_COORDINATES.y, EYE_RADIUS)
let leftPupil = createPupil(svg, '250')
let rightPupil = createPupil(svg, '500')

const redrawPupil = (pupil, cx, cy) => {
    pupil.setAttribute('cx', cx)
    pupil.setAttribute('cy', cy)
}

const calculatePupilPositon = (percentualXPosition, percentualYPosition) => {
    console.log('PercentualX', percentualXPosition)
    console.log('PercentualY', percentualYPosition)
    let leftX = parseInt(LEFT_EYE_COORDINATES.x) + percentualXPosition
    let rightX = parseInt(RIGHT_EYE_COORDINATES.x) + percentualXPosition
    let leftY = parseInt(LEFT_EYE_COORDINATES.y) + percentualYPosition
    let rightY = parseInt(LEFT_EYE_COORDINATES.y) + percentualYPosition
    return {
        leftX, leftY, rightX, rightY
    }
}

const mousemoves$ = Rx.Observable.fromEvent(svg, 'mousemove')
    .map(e => {
        let percentualXPosition = 100 / SVG_WIDTH * e.x
        let percentualYPosition = 100 / SVG_HEIGHT * e.y
        return calculatePupilPositon(percentualXPosition, percentualYPosition)
    })
    .subscribe(
        pupilPositions => {
            console.log('Hier', pupilPositions)
            redrawPupil(leftPupil, pupilPositions.leftX, pupilPositions.leftY)
            redrawPupil(rightPupil, pupilPositions.rightX, pupilPositions.rightY)
        }
    )
