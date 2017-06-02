/**
 * Created by kevinkreuzer on 31.05.17.
 */
const searchTermInput = document.querySelector('#searchTermInput')
const results = document.querySelector('#results')

function appendGitHubUsers(gitHubUsers){
    results.innerHTML = ""
    gitHubUsers.forEach(gitHubUser => appendGitHubUser(gitHubUser))
}

function appendGitHubUser(gitHubUser) {
    let li = createListItemWithImage(gitHubUser)
    results.appendChild(li)
}

function createListItemWithImage(gitHubUser) {
    let li = document.createElement('li')
    li.innerHTML = `<img class="img-circle" src="${gitHubUser.avatar_url}"/> ${gitHubUser.login}`
    li.setAttribute('class', 'list-group-item')
    return li
}

