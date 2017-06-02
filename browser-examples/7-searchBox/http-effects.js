/**
 * Created by kevinkreuzer on 02.06.17.
 */
function searchWikipedia(searchTerm) {
    return Rx.Observable
        .ajax(`https://api.github.com/search/users?q=${searchTerm}`)
}
