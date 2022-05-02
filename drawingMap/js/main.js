let first = document.querySelector('#first')
let second = document.querySelector('#second')
let third = document.querySelector('#third')
let clear = document.querySelector("#clear")
let enter = document.querySelector('.enter')
// make canvas the screen size
const canvas = document.querySelector('#canvas')
canvas.height = window.innerHeight
canvas.width = window.innerWidth
let prevX = null
let prevY = null
let colors = document.querySelectorAll('.color')

// ctx is whats in the canvas
// used to draw on the canvas
const ctx = canvas.getContext('2d')
ctx.lineWidth = 5
let draw = false
// HTMLCanvasElement.getContext(contextId: "2d", options?: CanvasRenderingContext2DSettings): CanvasRenderingContext2D
// The identifier (ID) of the type of canvas to create. Internet Explorer 9 and Internet Explorer 10 support only a 2-D 
// context using canvas.getContext("2d"); IE11 Preview also supports 3-D or WebGL context using canvas.getContext("experimental-webgl");
// Returns an object that provides methods and properties for drawing and manipulating images and graphics on a canvas 
// element in a document. A context object includes information about colors, line widths, fonts, and other graphic parameters

// let island = new Image();
// island.src = 'images/adventureisland.jpg';
// island.onload = function () {
//     ctx.drawImage(island, 1000, 1000);
// }

colors = Array.from(colors)

colors.forEach(color => {
    color.addEventListener("click", () => {
        ctx.strokeStyle = color.dataset.clr
    })
})


clear.addEventListener("click", () => {
    // Clearning the entire canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

// Set draw to true when mouse is pressed
window.addEventListener('mousedown', (ev) => draw = true)

// Set draw to false when mouse is released
window.addEventListener('mouseup', (ev) => draw = false)


// within the window, listen for the mouse moving
window.addEventListener('mousemove', (ev) => {

    // console log the x and y mouse moves
    // console.log('Mouse X: ' + ev.clientX)
    // console.log('Mouse Y: ' + ev.clientY)

    // set previous mouse position to current mouse position
    // this makes the draw happen
    if (prevX == null || prevY == null || !draw) {
        prevX = ev.clientX
        prevY = ev.clientY
        return
    }
    // curr mmouse position is the mouseover event param
    let currX = ev.clientX
    let currY = ev.clientY

    // draw line from prev to curr using ctx based functions
    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(currX, currY)
    ctx.stroke()


    // Update previous mouse position
    prevX = currX
    prevY = currY
})

document.querySelector('#instructionpop').addEventListener('click', instruction_activate)
document.querySelector('#X').addEventListener('click', removeinstruction)

function instruction_activate() {
    instructionpage.classList.toggle('instructionpage_active')
    instructionpage.classList.toggle('instructionpage')
}

function removeinstruction() {
    instructionpage.classList.toggle('instructionpage')
    instructionpage.classList.toggle('instructionpage_active')
}



// VICTORY
enter.addEventListener('click', function victory() {
    if (first.value == 6 && second.value == 3 && third.value == 8) {
        alert("YOU'VE SOLVED THE RIDDLE CONGRATIS")
    }
    else {
        alert('SORRY! THE CODE IS INCORRECT')
    }
})
