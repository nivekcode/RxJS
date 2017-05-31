/**
 * Created by kevinkreuzer on 20.05.17.
 */
const EYE_RADIUS = 100
const EYE_SPACE = 50
const LEFT_EYE_COORDINATES = {
    x: SVG_WIDTH / 2 - (EYE_RADIUS + EYE_SPACE / 2),
    y: SVG_HEIGHT / 2 - EYE_RADIUS / 2
}

const RIGHT_EYE_COORDINATES = {
    x: SVG_WIDTH / 2 + (EYE_RADIUS + EYE_SPACE / 2),
    y: SVG_HEIGHT / 2 - EYE_RADIUS / 2
}

createEye(svg, LEFT_EYE_COORDINATES.x, LEFT_EYE_COORDINATES.y, EYE_RADIUS)
createEye(svg, RIGHT_EYE_COORDINATES.x, RIGHT_EYE_COORDINATES.y, EYE_RADIUS)
let leftPupil = createPupil(svg, LEFT_EYE_COORDINATES.x, LEFT_EYE_COORDINATES.y)
let rightPupil = createPupil(svg, RIGHT_EYE_COORDINATES.x, LEFT_EYE_COORDINATES.y)

const calculatePupilPositon = (percentualXPosition, percentualYPosition) => {
    let leftX = parseInt(LEFT_EYE_COORDINATES.x - EYE_RADIUS / 2) + percentualXPosition
    let rightX = parseInt(RIGHT_EYE_COORDINATES.x - EYE_RADIUS / 2) + percentualXPosition
    let leftY = parseInt(LEFT_EYE_COORDINATES.y - EYE_RADIUS / 2) + percentualYPosition
    let rightY = parseInt(LEFT_EYE_COORDINATES.y - EYE_RADIUS / 2) + percentualYPosition
    return {
        leftX, leftY, rightX, rightY
    }
}

Rx.Observable.fromEvent(svg, 'mousemove')
    .map(e => {
        let percentualXPosition = 100 / SVG_WIDTH * e.x
        let percentualYPosition = 100 / SVG_HEIGHT * e.y
        return calculatePupilPositon(percentualXPosition, percentualYPosition)
    })
    .subscribe(
        pupilPositions => {
            redrawPupil(leftPupil, pupilPositions.leftX, pupilPositions.leftY)
            redrawPupil(rightPupil, pupilPositions.rightX, pupilPositions.rightY)
        }
    )
