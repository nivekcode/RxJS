/**
 * Created by kevinkreuzer on 31.05.17.
 */
const image = document.querySelector('img')
const changeDirectionButton = document.getElementById('change-direction')
const changeImage = (imageName) => image.setAttribute('src', `../images/${imageName}.jpg`)
