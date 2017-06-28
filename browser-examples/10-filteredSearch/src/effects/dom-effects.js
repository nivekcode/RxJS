/**
 * Created by kevinkreuzer on 09.06.17.
 */
import * as moment from 'moment'

const pollsDOM = document.querySelector('#polls')
export const DOM_ELEMENTS = {
    searchInput: document.querySelector('#searchInput'),
    participateNameInput: document.querySelector('#participantNameInput'),
    participantSlider: document.querySelector('#participantSlider'),
    inviteesSlider: document.querySelector('#inviteesSlider'),
    textTypeButton: document.querySelector('#textTypeButton'),
    dateTypeButton: document.querySelector('#dateTypeButton'),
    searchResults: document.querySelectorAll('#searchResults')
}

export function updatePolls(polls) {
    resetPollsDOM()
    polls.forEach(poll => {
        pollsDOM.appendChild(createPanel(poll))
    })
}

function resetPollsDOM() {
    pollsDOM.innerHTML = ''
}

function createPanel(poll) {
    let panel = document.createElement('div')
    panel.setAttribute('class', 'panel panel-default')
    panel.appendChild(createPanelBody(poll))
    return panel
}

function createPanelBody(poll) {
    let panelBody = document.createElement('div')
    panelBody.setAttribute('class', 'panel-body')
    panelBody.appendChild(createPanelTitle(poll.title))
    panelBody.appendChild(createPollCreationInformations(poll.initiator, poll.initiated))
    panelBody.appendChild(createHorizontalLine())
    panelBody.appendChild(createIconBar(poll.inviteesCount, poll.participantsCount))
    return panelBody
}

function createPanelTitle(title) {
    let panelTitle = document.createElement('h2')
    panelTitle.innerHTML = title
    return panelTitle
}

function createPollCreationInformations(initiator, initiated) {
    let creationInformationDiv = document.createElement('div')
    let creator = createPollInformationElement(`by ${initiator.name}`)
    creator.setAttribute('class', 'inline')
    let creationDate = createPollInformationElement(convertTimestampToDisplayDate(initiated))
    creationDate.setAttribute('class', 'pull-right no-top-margin')
    creationInformationDiv.appendChild(creator)
    creationInformationDiv.appendChild(creationDate)
    return creationInformationDiv
}

function createPollInformationElement(information) {
    let informationElement = document.createElement('h3')
    let informationElementText = document.createElement('em')
    informationElementText.innerHTML = information
    informationElement.appendChild(informationElementText)
    return informationElement
}

function createHorizontalLine() {
    return document.createElement('hr')
}

function createIconBar(inviteesCount, participantsCount) {
    let iconBar = document.createElement('div')
    iconBar.setAttribute('class', 'gray-content')
    iconBar.appendChild(createIcon('fa-comments', inviteesCount))
    iconBar.appendChild(createIcon('fa-users', participantsCount))
    return iconBar
}

function createIcon(glypiconName, text) {
    let icon = document.createElement('i')
    icon.setAttribute('class', `fa ${glypiconName} fa-lg icon`)
    icon.innerHTML = ` ${text}`
    return icon
}

function convertTimestampToDisplayDate(timestamp) {
    return moment.unix(timestamp).format("MMMM DD, YYYY");
}

export function updateParticipantFilterValue(counts) {
    document.querySelector('#participantFilterLabel').innerHTML = `Participants >= ${counts}`
}

export function updateInviteesFilterValue(counts) {
    document.querySelector('#inviteesFilterLabel').innerHTML = `Invitees >= ${counts}`
}

export function addActiveClass(domElement) {
    let buttons = document.querySelectorAll('#typeFilters > .btn')
    buttons.forEach(button => button.classList.remove('active'))
    domElement.className += ' active'
}

export function updateSearchResults(numberOfResults) {
    document.querySelector('#searchResults').innerHTML = `Search Results: ${numberOfResults}`
}
