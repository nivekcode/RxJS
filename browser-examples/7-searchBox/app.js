/**
 * Created by kevinkreuzer on 31.05.17.
 */

const input$ = Rx.Observable.fromEvent(searchTermInput, 'keyup')

input$
    .pluck('target', 'value')
    .filter(value => value.length >= 2)
    .debounceTime(500)
    .distinctUntilChanged()
    .switchMap(searchTerm => searchWikipedia(searchTerm))
    .pluck('response', 'items')
    .subscribe(
        githubUsers => {
            githubUsers.forEach(githubUser => appendGitHubUser(githubUser))
        },
        err => console.error(err),
        _ => console.info('Done')
    )

