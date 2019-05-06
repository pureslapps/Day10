// get a metro card

//every ride = 2.75

// swipe metro card

// go through the turnstile

//let balance = 100
let fare = 2.75
Atrain = []

class Rider {
  constructor(anx) {
    this.anxiety = anx
  }
}
class MetroCard { // define a class like a function, represents an object
  comstructor(amt) {
    this.amt = amt
  }
}// variable attached to a object is a property

getCard = () => {
    let amount = prompt("how much would you like to add?")
    balance -= amount (amount - 1)
    let card = parseFloat(amount)
    let card = new MetroCard(parseInt(amount))
    return card
}

newCard = getCard()

// Typecasting

swipe = (card) => {
  console.log(fare)
  console.log(card)
  if (card.amt < fare) {
    return 'INSUFFICIENT FARE'
  } else if (card.amt >= fare) {
    card.amt -= fare
    Atrain.push(card)
    console.log(card.amt)
    return 'GO'
  }

}


//

class User {
  constructor(email, password) {
      this.email = email //this object's email == the email that was passed in
      this.password == password // this object's == the password that was passed in
  }
}

class Dog {
  constructor(name, breed) {
    this.name = name
    this.bread = breed
  }
}

class Rottweiler{
  constructor(name) {

  }
}
