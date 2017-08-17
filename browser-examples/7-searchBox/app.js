/**
 * Created by kevinkreuzer on 31.05.17.
 */

const input$ = Rx.Observable.fromEvent(searchTermInput, 'keyup')

input$
    .pluck('target', 'value')
    .filter(value => value.length >= 2)
    .debounceTime(500)
    .distinctUntilChanged()
    .do(_ => showSpinner())
    .switchMap(searchTerm => searchGitHubUsers(searchTerm))
    .pluck('response', 'items')
    .map(githubUsers => githubUsers.slice(0, 10))
    .subscribe(
        githubUsers => appendGitHubUsers(githubUsers),
        err => console.error(err),
        _ => console.info('Done')
    )




