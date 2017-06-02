/**
 * Created by kevinkreuzer on 31.05.17.
 */
const searchTermInput = document.querySelector('#searchTermInput')
const results = document.querySelector('#results')

function appendGitHubUser(gitHubUser){
    let li = createListItemWithImage(gitHubUser)
    results.appendChild(li)
}

function createListItemWithImage(gitHubUser){
    let li = document.createElement('li')
    let image = createImage(gitHubUser.avatar_url)
    li.innerHTML = gitHubUser.login;
    li.appendChild(image)
    return li
}

function createImage(imageUrl){
    console.log('ImageUrL', imageUrl)
    let image = document.createElement('img')
    image.setAttribute('class', 'img')
    image.setAttribute('src', imageUrl)
    return image
}

