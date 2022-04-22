// make global variables for the html text
let circle1 = document.querySelector('#turnstyle1')
let circle2 = document.querySelector('#turnstyle2')
let circle3 = document.querySelector('#turnstyle3')
let circle
let circleArr = [circle1, circle2, circle3]

// function transform() {
let radius = 200;
let startAngle = -90
let endAngle = 270
const angleRange = endAngle - startAngle;

let currentAngle = startAngle;

const degreeToRadian = angle => {
    return angle * (Math.PI / 180);
}

const pointOnCircle = (radius, angle = 0) => {
    const xPos = radius * Math.cos(degreeToRadian(angle));
    const yPos = radius * Math.sin(degreeToRadian(angle));
    return {
        x: xPos,
        y: yPos
    }
}
circleArr.forEach(circleElement => {


    const text = circleElement.innerText;
    const characters = text.split(' ');
    circleElement.innerText = null;

    const deltaAngle = angleRange / characters.length;

    characters.forEach((char, index) => {
        const charElement = document.createElement('span');
        charElement.innerText = char;
        circleElement.appendChild(charElement);

        let { x: xPos, y: yPos } = pointOnCircle(radius, currentAngle);

        xPos += radius;
        yPos += radius;

        const translate = `translate(${xPos}px, ${yPos}px)`;
        const rotate = `rotate(${index * deltaAngle}deg)`;

        charElement.style.transform = `${translate} ${rotate}`;

        currentAngle += deltaAngle;
        console.log(deltaAngle)
    });
});
// }

// transform();

let newangle1 = 0
let newangle2 = 0
let newangle3 = 0

// get elements rotation
function getCurrentRotationFixed(elid) {
    let dex = elid.charAt(9)

    let el = document.getElementById(elid);
    let st = window.getComputedStyle(el, null);
    let tr = st.getPropertyValue("-webkit-transform") ||
        st.getPropertyValue("-moz-transform") ||
        st.getPropertyValue("-ms-transform") ||
        st.getPropertyValue("-o-transform") ||
        st.getPropertyValue("transform") ||
        "fail...";

    if (tr !== "none") {

        let values = tr.split('(')[1];
        values = values.split(')')[0];
        values = values.split(',');
        let a = values[0];
        let b = values[1];
        let c = values[2];
        let d = values[3];

        let scale = Math.sqrt(a * a + b * b);

        let radians = Math.atan2(b, a);
        if (radians < 0) {
            radians += (2 * Math.PI);
        }
        if (dex == 1) {
            newangle1 = Math.round(radians * (180 / Math.PI));
        }
        if (dex == 2) {
            newangle2 = Math.round(radians * (180 / Math.PI));
        }
        if (dex == 3) {
            newangle3 = Math.round(radians * (180 / Math.PI));
        }

    }
}




let rotate01
let rotate02
let rotate03

let count1 = 0
let count2 = 0
let count3 = 0
document.querySelector('.button1').addEventListener('click', function spinleft2() {
    count1++
    count2++
    let deg = count1 * 45
    let deg2 = count2 * 45
    circle1.style.transform = "rotate(" + deg + "deg)"
    circle2.style.transform = "rotate(" + deg2 + "deg)"
    rotate01 = getCurrentRotationFixed('turnstyle1')
    rotate02 = getCurrentRotationFixed('turnstyle2')

    if (newangle1 === 180 && newangle2 === 270 && newangle3 === 45) {
        alert('THE DOOR OPENED')
    }
});
document.querySelector('.button2').addEventListener('click', function spinleft2() {
    count1++
    count2++
    count3++
    let deg = count1 * 45
    let deg2 = count2 * 45
    let deg3 = count3 * 45
    circle1.style.transform = "rotate(" + deg + "deg)"
    circle2.style.transform = "rotate(" + deg2 + "deg)"
    circle3.style.transform = "rotate(" + deg3 + "deg)"
    rotate01 = getCurrentRotationFixed('turnstyle1')
    rotate02 = getCurrentRotationFixed('turnstyle2')
    rotate03 = getCurrentRotationFixed('turnstyle3')
    console.log(newangle1)
    console.log(newangle2)
    console.log(newangle3)
    if (newangle1 === 180 && newangle2 === 270 && newangle3 === 45) {
        alert('THE DOOR OPENED')
    }
});
document.querySelector('.button3').addEventListener('click', function spinleft2() {
    count3++
    count2++
    let deg3 = count3 * 45
    let deg2 = count2 * 45
    circle3.style.transform = "rotate(" + deg3 + "deg)"
    circle2.style.transform = "rotate(" + deg2 + "deg)"
    rotate02 = getCurrentRotationFixed('turnstyle2')
    rotate03 = getCurrentRotationFixed('turnstyle3')

    if (newangle1 === 180 && newangle2 === 270 && newangle3 === 45) {
        alert('THE DOOR OPENED')
    }
});