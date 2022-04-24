let slot1 = document.querySelector('#slot1')
let slot2 = document.querySelector('#slot2')
let slot3 = document.querySelector('#slot3')
let slot4 = document.querySelector('#slot4')
let slot5 = document.querySelector('#slot5')
let slot6 = document.querySelector('#slot6')
let slot7 = document.querySelector('#slot7')
let slot8 = document.querySelector('#slot8')
let slot9 = document.querySelector('#slot9')
let slot10 = document.querySelector('#slot10')
let slot11 = document.querySelector('#slot11')
let slot12 = document.querySelector('#slot12')
let slot13 = document.querySelector('#slot13')
let slot14 = document.querySelector('#slot14')
let slot15 = document.querySelector('#slot15')



function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData('content', ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    if (ev.target.tagName == "IMG") { return; }
    let data = ev.dataTransfer.getData("content")
    ev.target.appendChild(document.getElementById(data)
    );
    if (slot1.getElementsByTagName('img').length > 0
        && slot2.getElementsByTagName('img').length > 0
        && slot4.getElementsByTagName('img').length > 0
        && slot5.getElementsByTagName('img').length > 0
        && slot8.getElementsByTagName('img').length > 0
        && slot9.getElementsByTagName('img').length > 0
        && slot11.getElementsByTagName('img').length > 0
        && slot12.getElementsByTagName('img').length > 0
        && slot15.getElementsByTagName('img').length > 0) {
        alert('you solved the riddle!')
    }
    if (slot1.getElementsByTagName('img').length > 0
        && slot3.getElementsByTagName('img').length > 0
        && slot4.getElementsByTagName('img').length > 0
        && slot5.getElementsByTagName('img').length > 0
        && slot8.getElementsByTagName('img').length > 0
        && slot9.getElementsByTagName('img').length > 0
        && slot11.getElementsByTagName('img').length > 0
        && slot12.getElementsByTagName('img').length > 0
        && slot14.getElementsByTagName('img').length > 0) {
        alert('you solved the riddle!')
    }
    if (slot1.getElementsByTagName('img').length > 0
        && slot3.getElementsByTagName('img').length > 0
        && slot4.getElementsByTagName('img').length > 0
        && slot7.getElementsByTagName('img').length > 0
        && slot8.getElementsByTagName('img').length > 0
        && slot9.getElementsByTagName('img').length > 0
        && slot10.getElementsByTagName('img').length > 0
        && slot12.getElementsByTagName('img').length > 0
        && slot13.getElementsByTagName('img').length > 0) {
        alert('you solved the riddle!')
    }

}

