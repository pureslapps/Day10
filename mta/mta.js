let balance = 500
let fare = 2.75
let train = []

getCard = () => {
  let amount = prompt('How much do you want to put on the card?')
  card = parseInt(amount)
}

swipe = () => {
  if (card < fare) {
    return 'INSUFFICIENT FARE'
  } else if (card >= fare) {
    card -= fare
    train.push(person)
    return 'GO'
  }
}

// create a card variable
// swipe the Card
// check to see if the card had enough FARE
// if yes, get on train
// if no, go take a hike
