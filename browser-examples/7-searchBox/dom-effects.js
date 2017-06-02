/**
 * Created by kevinkreuzer on 31.05.17.
 */
const searchTermInput = document.querySelector('#searchTermInput')
const results = document.querySelector('#results')

function appendListItem(gitHubUser){
    let li = document.createElement('li')
    li.innerHTML = gitHubUser.login;
    results.appendChild(li)
}