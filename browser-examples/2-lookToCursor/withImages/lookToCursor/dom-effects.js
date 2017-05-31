/**
 * Created by kevinkreuzer on 31.05.17.
 */
const body = document.querySelector('body')
const image = document.querySelector('img')

const windowWith = window.innerWidth;
const windowHeight = window.innerHeight;

const changeImage = (imagename) => image.setAttribute('src', `../images/${imagename}.jpg`)

