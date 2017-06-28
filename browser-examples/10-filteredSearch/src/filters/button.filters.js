/**
 * Created by kevinkreuzer on 09.06.17.
 */
import {Observable} from 'rxjs'
import {DOM_ELEMENTS, addActiveClass} from '../effects/dom-effects'

const createButtonGroupStream = (...streams) => {
    return Observable.merge(...streams)
}

const createButtonStream = (domElement, type) => {
    return Observable.fromEvent(domElement, 'click')
        .do(event => addActiveClass(event.srcElement))
        .mapTo(type)
        .startWith('')
}

const TYPE_FILTERS = {
    TEXT: 'TEXT',
    DATE: 'DATE'
}

const textFilter$ = createButtonStream(DOM_ELEMENTS.textTypeButton, TYPE_FILTERS.TEXT)
const dateFilter$ = createButtonStream(DOM_ELEMENTS.dateTypeButton, TYPE_FILTERS.DATE)
export const typeFilter$ = createButtonGroupStream(textFilter$, dateFilter$)

