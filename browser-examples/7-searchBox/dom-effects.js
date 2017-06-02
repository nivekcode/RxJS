/**
 * Created by kevinkreuzer on 31.05.17.
 */
const searchTermInput = document.querySelector('#searchTermInput')
const results = document.querySelector('#results')
const spinner = document.querySelector('#spinner')

function appendGitHubUsers(gitHubUsers) {
    results.innerHTML = ""
    hideSpinner()
    gitHubUsers.forEach(gitHubUser => appendGitHubUser(gitHubUser))
}

function appendGitHubUser(gitHubUser) {
    let li = createListItemWithImage(gitHubUser)
    results.appendChild(li)
}

function createListItemWithImage(gitHubUser) {
    let li = document.createElement('li')
    li.innerHTML = `<a target="_blank" href="${gitHubUser.html_url}"><img class="img-circle" src="${gitHubUser.avatar_url}"/> ${gitHubUser.login}</a>`
    li.setAttribute('class', 'list-group-item')
    return li
}

function showSpinner(){
   spinner.removeAttribute('style')
}

function hideSpinner(){
    spinner.setAttribute('style', 'display:none')
}


