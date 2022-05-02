let pyramid = document.querySelector('.spaceP')
let cube = document.querySelector('.cube-container')
let eightside = document.querySelector('.space1')
let dodeca = document.querySelector('.space')
let underover = document.querySelector('#underover')
let reset = document.querySelector('#reset')


let total = 0


pyramid.addEventListener('click', function addfour() {
    total += 5
    if (total < 76) {
        underover.innerHTML = 'UNDER'
    }
    if (total > 76) {
        underover.innerHTML = 'TOO HIGH, A BOULDER FALLS ON YOUR HEAD'
    }
    if (total == 76) {
        underover.innerHTML = 'CONGRATIS, TRIUMPH IN VICTORY'
    }

})
cube.addEventListener('click', function addsix() {
    total += 6
    if (total < 76) {
        underover.innerHTML = 'UNDER'
    }
    if (total > 76) {
        underover.innerHTML = 'TOO HIGH, A BOULDER FALLS ON YOUR HEAD'
    }
    if (total == 76) {
        underover.innerHTML = 'CONGRATIS, TRIUMPH IN VICTORY'
    }

})
eightside.addEventListener('click', function addeight() {
    total += 8
    if (total < 76) {
        underover.innerHTML = 'UNDER'
    }
    if (total > 76) {
        underover.innerHTML = 'TOO HIGH, A BOULDER FALLS ON YOUR HEAD'
    }
    if (total == 76) {
        underover.innerHTML = 'CONGRATIS, TRIUMPH IN VICTORY'
    }

})
dodeca.addEventListener('click', function addtwelve() {
    total += 12
    if (total < 76) {
        underover.innerHTML = 'UNDER'
    }
    if (total > 76) {
        underover.innerHTML = 'TOO HIGH, A BOULDER FALLS ON YOUR HEAD'
    }
    if (total == 76) {
        underover.innerHTML = 'CONGRATIS, TRIUMPH IN VICTORY'
    }

})

reset.addEventListener('click', function reset() {
    total = total - total
    if (total == 0) {
        underover.innerHTML = 0
    }
    console.log(total)
})

