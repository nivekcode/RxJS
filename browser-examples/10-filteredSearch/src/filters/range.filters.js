/**
 * Created by kevinkreuzer on 09.06.17.
 */
import {Observable} from 'rxjs'
import {DOM_ELEMENTS, updateParticipantFilterValue, updateInviteesFilterValue} from '../effects/dom-effects'

function createSliderStream(domElement, domEffect) {
    return Observable.fromEvent(domElement, 'input')
        .pluck('target', 'value')
        .startWith(0)
        .do(numberOfParticipants => domEffect(numberOfParticipants))
}

export const participantCount$ = createSliderStream(DOM_ELEMENTS.participantSlider, updateParticipantFilterValue)
export const invitessCount$ = createSliderStream(DOM_ELEMENTS.inviteesSlider, updateInviteesFilterValue)

