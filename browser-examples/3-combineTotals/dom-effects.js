/**
 * Created by kevinkreuzer on 31.05.17.
 */
const updatePoints = (id, totalPoints) => {
    const domElment = document.querySelector(`#${id}-points`)
    domElment.innerHTML = `${id} points: ${totalPoints}`
}
