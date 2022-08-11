let card1 = randomCard()
let card2 = randomCard()
let sum = 0
let cards = []
let message = " "

let blackJack = false
let isAlive = false
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let messageEl = document.querySelector("#message")


let player = {

    name: "Surya",
    chips: 150
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " :$" + player.chips
function randomCard() {

    let randomNumber = Math.floor((Math.random() * 13) + 1)

    if (randomNumber === 1) {
        return 11
    }

    else if (randomNumber > 10) {
        return 10
    }

    else {
        return randomNumber
    }

}



function startGame() {

    let card1 = randomCard()
    let card2 = randomCard()
    isAlive = true

    renderGame()
}




function renderGame() {


    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum:" + sum

    if (sum === 21) {
        message = "You've got Blackjack!"
        blackJack = true
    }
    else if (sum < 21) {

        message = "Do you want to draw a new card?"
    }

    else {

        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.innerText = message

}


function newcard() {


    // new card should only be clicked when the player is alive and does not have blackjack

    if (isAlive == true && blackJack == false) {
        let card = randomCard()

        sum += card
        cards.push(card)


        startGame()
    }


}
