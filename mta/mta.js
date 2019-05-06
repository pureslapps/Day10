/// create an algorithm that simulates a running train
// the train will print out a message at every stop
// --> "this stop is ..."
// if the stop is the same as the rider's destinantion
// get off the Atrain// --> "leaving train"

// The train simulation should hit every stop at 3 second intervals

// write a for loop that prints out every item in that for loop

let STOPS = ['8th ave', '6th ave', '14th street union sq', '3rd ave', '1st ave', 'bedford ave', 'lorimer st', 'graham ave', 'montrose ave', 'morgan ave']
let dest = prompt ('What is your destination').toLowerCase()
let div = document.querySelector('#stops')

for (stop of STOPS) {
  console.log(stop)
  if (dest == stop) {
    console.log('LEAVING TRAIN')
    break
  }
}

// we have stops in an array
// we have to create a button for each stops

for (stop of STOPS) {
  let el = document.createElement('button')
  el.innerText = stop
  div.appendChild(el)
}

// controlled flow constructs
