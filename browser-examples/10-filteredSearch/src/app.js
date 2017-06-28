/**
 * Created by kevinkreuzer on 09.06.17.
 */
import {Observable} from 'rxjs'
import {loadPolls} from './effects/http-effects'
import {updatePolls, updateSearchResults} from './effects/dom-effects'
import {nameDateTitleFilter$, participateNameFilter$} from './filters/search.filters'
import {participantCount$, invitessCount$} from './filters/range.filters'
import {typeFilter$} from './filters/button.filters'

import './styles/app.css'
import './styles/range.css'
import './styles/bootswatch.css'

const poll$ = loadPolls()

Observable.combineLatest(poll$, nameDateTitleFilter$, participantCount$, invitessCount$, typeFilter$,
    participateNameFilter$,
    (polls, nameDateTitle, participantMax, inviteesMax, typeFilter, participateNameFilter) => ({
        polls, filters: {nameDateTitle, participantMax, inviteesMax, typeFilter, participateNameFilter}
    }))
    .map(pollsWithFilters => pollsWithFilters.polls
        .filter(poll => hasSearchTermInTitle(poll, pollsWithFilters.filters) || hasSearchTermInName(poll, pollsWithFilters.filters))
        .filter(poll => poll.participantsCount >= pollsWithFilters.filters.participantMax)
        .filter(poll => poll.inviteesCount >= pollsWithFilters.filters.inviteesMax)
        .filter(poll => poll.type.toLowerCase().includes(pollsWithFilters.filters.typeFilter.toLowerCase()))
        .filter(poll => containsParticipant(poll.participants, pollsWithFilters.filters.participateNameFilter))
    )
    .subscribe(filteredPolls => {
        updateSearchResults(filteredPolls.length)
        updatePolls(filteredPolls)
    })

function containsParticipant(participants, participantName) {
    return participants.some(participant => participant.name.toLowerCase().includes(participantName.toLowerCase()))
}

function hasSearchTermInTitle(poll, filters) {
    return poll.title.toLowerCase().includes(filters.nameDateTitle.toLowerCase())
}

function hasSearchTermInName(poll, filters) {
    return poll.initiator.name.toLowerCase().includes(filters.nameDateTitle.toLowerCase())
}
