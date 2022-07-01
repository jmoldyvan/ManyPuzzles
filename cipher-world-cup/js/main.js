let pigLatinList = [
`The journey of a thousand miles begins with one step.`, 
`That which does not kill us makes us stronger.`, 
`When the going gets tough, the tough get going.`, 
`Get busy living or get busy dying.`, 
`Tis better to have loved and lost than to have never loved at all.`, 
`You miss 100 percent of the shots you never take.`,
`That\’s one small step for a man, one giant leap for mankind.`,
`If The Good Lord Had Intended Us To Walk He Wouldn't Have Invented Roller Skates.`,
]

let leetSpeakList = [
`A mind is like a parachute. It doesn\’t work if it isn\’t open.`,
`You have died of dysentery.`,
`I used to be an adventurer like you, until I took an arrow to the knee.`,
`A man chooses, a slave obeys.`,
`What is a man? A miserable little pile of secrets.`,
`It\’s dangerous to go alone, take this!`,
`Don\'t wish it were easier, wish you were better.`,
`You Were Almost A Jill Sandwich!`,
`All We Had To Do, Was Follow The Damn Train`,
`The journey of a thousand miles begins with one step.`, 
`That which does not kill us makes us stronger.`, 
`When the going gets tough, the tough get going.`, 
`Get busy living or get busy dying.`, 
`Tis better to have loved and lost than to have never loved at all.`, 
`You miss 100 percent of the shots you never take.`,
`That\’s one small step for a man, one giant leap for mankind.`,
`If The Good Lord Had Intended Us To Walk He Wouldn't Have Invented Roller Skates.`]

let rot13List = [
`We live only to discover beauty, all else is a form of waiting`,
`Once the rockets are up, who cares where they come down?`,
`A good rule for rocket experimenters to follow is this: always assume that it will explode.`,
`I just want to say one word to you: plastics`,
`The wonder is not that the field of stars is so vast, but that man has measured it.`,
`Time crumbles things. Everything grows old and is forgotten under the power of time.`,
`To achieve great things, two things are needed: a plan, and not quite enough time.`,
`The Law is a fortress on a hill that armies cannot take or floods wash away.`,
`I am become death, destroyer of worlds.`,
`You have died of dysentery.`,
`I used to be an adventurer like you, until I took an arrow to the knee.`,
`A man chooses, a slave obeys.`,
`What is a man? A miserable little pile of secrets.`,
`It\’s dangerous to go alone, take this!`,
`Don\'t wish it were easier, wish you were better.`,
`You Were Almost A Jill Sandwich!`,
`All We Had To Do, Was Follow The Damn Train`,
`The journey of a thousand miles begins with one step.`, 
`That which does not kill us makes us stronger.`, 
`When the going gets tough, the tough get going.`, 
`Get busy living or get busy dying.`, 
`Tis better to have loved and lost than to have never loved at all.`, 
`You miss 100 percent of the shots you never take.`,
`That\’s one small step for a man, one giant leap for mankind.`,
`If The Good Lord Had Intended Us To Walk He Wouldn't Have Invented Roller Skates.`]

let caeserList = [
`Nothing travels faster than the speed of light with the possible exception of bad news, which obeys its own special laws.`,
`Everywhere in life is somewhere else, and you get there in a car.`,
`I don't believe in astrology. I'm a Sagittarius, and we're skeptical.`,
`Engineers believe that, if it ain't broke, it doesn't have enough features yet.`,
`I am fond of pigs. Dogs look up to us. Cats look down on us. Pigs treat us as equals.`,
`If there are no dogs in Heaven, then when I die I want to go where they went.`,
`The future belongs to those who prepare for it today.`,
`We have nothing to fear but fear itself.`,
`Life would be tragic if it weren\’t funny.`,
`We live only to discover beauty, all else is a form of waiting`,
`Once the rockets are up, who cares where they come down?`,
`A good rule for rocket experimenters to follow is this: always assume that it will explode.`,
`I just want to say one word to you: plastics`,
`The wonder is not that the field of stars is so vast, but that man has measured it.`,
`Time crumbles things. Everything grows old and is forgotten under the power of time.`,
`To achieve great things, two things are needed: a plan, and not quite enough time.`,
`The Law is a fortress on a hill that armies cannot take or floods wash away.`,
`I am become death, destroyer of worlds.`,
`You have died of dysentery.`,
`I used to be an adventurer like you, until I took an arrow to the knee.`,
`A man chooses, a slave obeys.`,
`What is a man? A miserable little pile of secrets.`,
`It\’s dangerous to go alone, take this!`,
`Don\'t wish it were easier, wish you were better.`,
`You Were Almost A Jill Sandwich!`,
`All We Had To Do, Was Follow The Damn Train`,
`The journey of a thousand miles begins with one step.`, 
`That which does not kill us makes us stronger.`, 
`When the going gets tough, the tough get going.`, 
`Get busy living or get busy dying.`, 
`Tis better to have loved and lost than to have never loved at all.`, 
`You miss 100 percent of the shots you never take.`,
`That\’s one small step for a man, one giant leap for mankind.`,
`If The Good Lord Had Intended Us To Walk He Wouldn't Have Invented Roller Skates.`
]

charMapping = {
    'a': ['4'], 'b': ['I3'], 'c': ['('], 'd': ['|)'], 'e': ['3'],
    'f': ['ph'],'g': ['6'], 'h': [']-['], 'i': ['!'], 'k': ['|<'],
    'n': ['/\\/'],'o': ['0'], 's': ['$'], 't': ['+'], 'u': ['|_|'],
    'v': ['\\/']}
// select one element from list
// encrypot it
// put it in the HTML

// if they answer right, congratis, do same as aobve with new list
// if wrong, fail, new element populates
// so many event listeners
let encrypt = document.querySelector('#codePlace')
let answerInput = document.querySelector('#answerInput')
let answerButton = document.querySelector('#answerButton')
answerButton.addEventListener('click', result)
document.querySelector('#pauseButton').addEventListener('click', pauseActivate)
document.querySelector('#X').addEventListener('click', removePause)
document.querySelector('#X').addEventListener('click', start)
let pauseButton = document.querySelector('#pauseButton')
pauseButton.addEventListener('click', stop)
let appendTens = document.getElementById("tens")
let appendSeconds = document.getElementById("seconds")
// booleans for checking results
let pig = true
let leet = false
let rot13 = false
let caeser = false
// base variables set here for results
let leetItem;
let rotItem;
let caeserItem;
// timer variables
let seconds = 00; 
let tens = 00; 
let Interval ;

// toggle pause css
function pauseActivate() {
    pausePage.classList.toggle('pausePage_active')
    pausePage.classList.toggle('pausePage')
}
function removePause() {
    pausePage.classList.toggle('pausePage')
    pausePage.classList.toggle('pausePage_active')
}
// timer start/stop/reset functions
 function start() {
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
function stop() {
       clearInterval(Interval);
  }

function reset() {
     clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
  }
// the starttimer main function
  function startTimer () {
    tens++; 
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9){
      appendTens.innerHTML = tens;
    } 
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  }


// translate to cipher piglatin main
function pigIt(str){
        let strArr = str.split(' ');
        let pigLatin = [];
      
        for(let word of strArr){
          if((/([a-zA-Z])/).test(word)){
            pigLatin.push(word.substring(1) + word[0] + "ay");
          }else{
            pigLatin.push(word);
          }
        }
        return pigLatin.join(" ");
}
// choose random list item, then remove it to avoid repeats
let filterList = pigLatinList
function itemToPig(){
    let randItem = Math.floor(Math.random() * filterList.length)
    let filterItem = (filterList[randItem]).toLowerCase()
    filterList = filterList.filter(item => item !== filterList[randItem])
    let piggedQuote = pigIt(pigLatinList[randItem])
    encrypt.innerHTML = piggedQuote
    return filterItem
}
// initiate after piglatin functions load, start the cipher
let listItem = itemToPig()
start()
console.log(listItem);

// translate to cipher leety main
function leetIt(str){
  str = str.toLowerCase()
  console.log(str);
  newStr = str.replaceAll(/[abcdefghiknostuv]/g, c => charMapping[c])
  console.log(newStr);
  return newStr
}
// choose random list item, then remove it to avoid repeats
let filterLeetList = leetSpeakList
function itemToLeet(){
  let randItem = Math.floor(Math.random() * filterLeetList.length)
  let filterItem = (filterLeetList[randItem]).toLowerCase()
  filterLeetList = filterLeetList.filter(item => item !== filterLeetList[randItem])
  let leetedQuote = leetIt(leetSpeakList[randItem])
  encrypt.innerHTML = leetedQuote
  return filterItem
}

// translate to cipher rot13 main
function rotIt(str){
  let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  str = str.toLowerCase()
  console.log(str);
  return str.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}
// choose random list item, then remove it to avoid repeats
let filterRotList = rot13List
function itemToRot(){
  let randItem = Math.floor(Math.random() * filterRotList.length)
  let filterItem = (filterRotList[randItem]).toLowerCase()
  filterRotList = filterRotList.filter(item => item !== filterRotList[randItem])
  let rotQuote = rotIt(rot13List[randItem])
  encrypt.innerHTML = rotQuote
  return filterItem
}

// translate to cipher caeser main
function caeserIt(str) {
  str = str.toLowerCase()
  console.log(str);
  let d = {
    a: '11', b: '12', c: '13', d: '14', e: '15',
    f: '21', g: '22', h: '23', i: '24', j: '24', k: '25',
    l: '31', m: '32', n: '33', o: '34', p: '35',
    q: '41', r: '42', s: '43', t: '44', u: '45',
    v: '51', w: '52', x: '53', y: '54', z: '55',
  };
  return str.replace(/./g, c => d[c] || c);
}
// choose random list item, then remove it to avoid repeats
let filterCaeserList = caeserList
function itemToCaeser(){
  let randItem = Math.floor(Math.random() * filterCaeserList.length)
  let filterItem = (filterCaeserList[randItem]).toLowerCase()
  filterCaeserList = filterCaeserList.filter(item => item !== filterCaeserList[randItem])
  let caeserQuote = caeserIt(caeserList[randItem])
  encrypt.innerHTML = caeserQuote
  return filterItem
}



// win condition/results check
function result(){
if ((answerInput.value).toLowerCase() === listItem && pig === true || (answerInput.value).toLowerCase() === (listItem.replace(/[^\w\s]/gi, ''))  && pig === true){
    leetItem = itemToLeet()
    pig = false
    leet = true
    console.log(pig);
}
else if ((answerInput.value).toLowerCase() !== listItem  && pig === true || (answerInput.value).toLowerCase() !== (listItem.replace(/[^\w\s]/gi, '')) && pig === true){
    listItem = itemToPig()
}
else if ((answerInput.value).toLowerCase() === leetItem  && leet === true || (answerInput.value).toLowerCase() === (leetItem.replace(/[^\w\s]/gi, '')) && leet === true){
    rotItem = itemToRot()
    leet = false
    rot = true
    console.log(rot);

}
else if ((answerInput.value).toLowerCase() !== leetItem && leet === true || (answerInput.value).toLowerCase() !== (leetItem.replace(/[^\w\s]/gi, '')) && leet === true){
    leetItem = itemToLeet()
    console.log(leetItem);
}
else if ((answerInput.value).toLowerCase() === rotItem  && rot === true || (answerInput.value).toLowerCase() === (rotItem.replace(/[^\w\s]/gi, '')) && rot === true){
  caeserItem = itemToCaeser()
  rot = false
  caeser = true
  console.log(caeser);
}
else if ((answerInput.value).toLowerCase() !== rotItem && rot === true || (answerInput.value).toLowerCase() !== (rotItem.replace(/[^\w\s]/gi, '')) && rot === true){
    rotItem = itemToRot()
    console.log(rotItem);
}
else if ((answerInput.value).toLowerCase() === caeserItem  && caeser === true || (answerInput.value).toLowerCase() === (caeserItem.replace(/[^\w\s]/gi, '')) && caeser === true){
    console.log('YOU DID IT');
}
else if ((answerInput.value).toLowerCase() !== caeserItem && caeser === true || (answerInput.value).toLowerCase() !== (caeserItem.replace(/[^\w\s]/gi, '')) && caeser === true){
  caeserItem = itemToCaeser()
    console.log(caeserItem);
}
}