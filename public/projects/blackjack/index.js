
let sumEl = document.getElementById ("sum-el")
let cardEl = document.getElementById ("card-el")
let messageEL = document.getElementById ("message-el")
let player = {
    name: "Ilo",
    chips: 10000
}
let playerEl = document.getElementById ("player-el")
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""

playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard () {

    let randomCard = Math.floor(Math.random() * 13) + 1
    
    if ( randomCard > 10) {
        return 10
    }

    else if (randomCard === 1) {
        return 11
    }
     else {
        return randomCard
     }


}



function startGame () {

    isAlive = true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    hasBlackjack = false
    
    renderGame()

}

function renderGame() {

    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i ++) {
        cardEl.textContent+= cards[i] + " "
    }

    sumEl.textContent = "Sum : " + sum

    if (sum <= 20) {
        message = "you want another card ?"
    } else if (sum === 21 ) { message= "wohhoo blackjack "
        hasBlackjack = true
    }
    else { message="too bad"
        isAlive= false
    }
    
    messageEL.textContent = message
}

function newcard() {

    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()}

} 


let dayOfTheMonth = 13
let weekday = "Friday"


if (dayOfTheMonth === 13 && weekday === "Friday") {
    console.log("spooky face")
}





