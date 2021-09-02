// API https://deckofcardsapi.com/
let h1 = document.querySelector("#heading")
let inputBox = document.querySelector("#textInput")
let submitBtn = document.querySelector("#submitBtn")
let cardImage1 = document.querySelector("#card1")
let cardImage2 = document.querySelector("#card2")


submitBtn.addEventListener('click', (event) => {
  event.preventDefault()
  takeName()
  shuffleDeckAPI()
  pickCardAPI()
})

function takeName() {
  // greet user
  h1.textContent = `Hello ${inputBox.value}, nice to meet you :) here's two random cards.`
  // hide input box and button
  inputBox.style.display = 'none'
  submitBtn.style.display = 'none'
}


async function shuffleDeckAPI() {
  try {
    let options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    let res = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1', options)
      .then(res => res = res.json())
    let id = res.deck_id
    return id
  } catch (error) {
    console.log(error)
  }

}

async function pickCardAPI() {
  try {
    let options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    let id = await shuffleDeckAPI()
    let res = await fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=2`, options)
      .then(res => res = res.json())
    let cards = res.cards
    cards = cards.map(card => {
      return card.image
    })
    let card1 = cards[0]
    let card2 = cards[1]
    //console.log(res)
    //console.log('::', card1, card2)
    cardImage1.src = card1
    cardImage2.src = card2

  } catch (error) {
    console.log(error)
  }
}

