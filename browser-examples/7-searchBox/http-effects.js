/**
 * Created by kevinkreuzer on 02.06.17.
 */
function searchGitHubUsers(searchTerm) {
    return Rx.Observable
        .ajax(`https://api.github.com/search/users?q=${searchTerm}`)
}
