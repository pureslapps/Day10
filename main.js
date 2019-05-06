console.log('Hello World')

 function sayHello(){
   document.write('Hello User')
 }

 sayHello()


let x1 = document.getElementByClassName("header1")[0]
console.log(x1)

let x2 = document.GetElementsByTagName('h1')[0]
console.log(x2)

let x3 = documentGetElementById('header1')
console.log(x3)

let x4 = document.querySelector("#header1.header1")
console.log(x4)

//method is a function that belongs to a specific option//
//function is stand alone//

//while loops//

//print out to the console 1-30//

let i = 0

while (i < 30) {
  console.log(i + 1)
  i += 1
}

// Step 1. Program asks user how they are doing. If the answer is "good" then
//the program says 'thats great',then asks them 'where are you from

// IF the answer is bad then the program says "Im sorry to hear that"

// if the answer is anything else program says "ok. Nice talking to you."

let answer = prompt('How are you doing?').toLowerCase()
goodWords = ['good', 'well', 'nice', 'fair', 'yer']
badWords = ['chill', 'bad', 'meh', 'i fought roy']

if (goodWords.includes(answer))
function doingWell(ans) {
  if (goodWords.includes(ans)){
    return true
  }
}

if (answer == good) {
  console.log("That's great, where are you from?")
  let q2 = prompt(Where are you from?).toLowerCase()
  if (answer2 == 'smashville') {
    console.log("ROY")
  }
} else if (answer == bad) {
  console.log("Im sorry to hear that.")
} else {
  console.log("Ok. Nice talking to you.")
}

//== checks for quality
//= checks for an assignment
// .toLowerCase changes the text that the user enters into the prompt to lower
//case


//Algorithims
// finite amount of outcoes
// finite amount of variables
//
