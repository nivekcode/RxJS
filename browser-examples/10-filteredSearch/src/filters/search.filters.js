/**
 * Created by kevinkreuzer on 09.06.17.
 */
import {DOM_ELEMENTS} from '../effects/dom-effects'
import {Observable} from 'rxjs'

const createSearchStream = (domElement) => Observable
    .fromEvent(domElement, 'keyup')
    .pluck('target', 'value')
    .debounceTime(500)
    .distinctUntilChanged()
    .startWith('')


export const nameDateTitleFilter$ = createSearchStream(DOM_ELEMENTS.searchInput)
export const participateNameFilter$ = createSearchStream(DOM_ELEMENTS.participateNameInput)
