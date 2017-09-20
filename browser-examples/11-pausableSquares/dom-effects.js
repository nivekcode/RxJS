const awesomeDiv1 = document.getElementById('awesomeDiv1')
const awesomeDiv2 = document.getElementById('awesomeDiv2')
const awesomeDiv3 = document.getElementById('awesomeDiv3')
const awesomeDiv4 = document.getElementById('awesomeDiv4')

function hideAwesomeDiv(id) {
    let divToUpdate;
    switch (id) {
        case 1:
            divToUpdate = awesomeDiv1
            break
        case 2:
            divToUpdate = awesomeDiv2
            break
        case 3:
            divToUpdate = awesomeDiv3
            break
        case 4:
            divToUpdate = awesomeDiv4
    }
    divToUpdate.classList.add('invisible')
}