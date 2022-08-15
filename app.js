const computerChoiceDisplay = document.getElementById('computer-choice')
const yourChoiceDisplay = document.getElementById('your-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('div.choiceButtons')
let userChoice
let computerChoice
let result
let yourScore = 0
let computerScore = 0
let yourScoreDisplay = document.getElementById('your-score')
yourScoreDisplay.innerHTML = 0
let computerScoreDisplay = document.getElementById('computer-score')
computerScoreDisplay.innerHTML = 0


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    if(computerScore<10 && yourScore<10){
        userChoice = e.target.id
        yourChoiceDisplay.innerHTML = userChoice
        generateComputerChoice()
        generateResult()
        updateScore()
        checkIfGameOver()
    }
}))
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {
        computerChoice = "Rock"
    }
    else if (randomNumber === 2) {
        computerChoice = "Paper"
    }
    else {
        computerChoice = "Scissor"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
function generateResult() {
    if (computerChoice === userChoice) {
        result = "Draw"
    }
    else if (userChoice === "Rock") {
        if (computerChoice === "Scissor") {
            result = "Won"
        }
        else {
            result = "Lost"
        }
    }
    else if (userChoice === "Paper") {
        if (computerChoice === "Rock") {
            result = "Won"
        }
        else {
            result = "Lost"
        }
    }
    else if (userChoice === "Scissor") {
        if (computerChoice === "Paper") {
            result = "Won"
        }
        else {
            result = "Lost"
        }
    }
    resultDisplay.innerHTML = result
}
function updateScore() {
    if (result === "Won") {
        yourScore = yourScore + 1
        yourScoreDisplay.innerHTML = yourScore
    }
    else if (result == "Lost") {
        computerScore = computerScore + 1
        computerScoreDisplay.innerHTML = computerScore
    }
}
let verdictDisplay=document.querySelector("span#verdict")
function checkIfGameOver(){
    if(yourScore==10){
        verdictDisplay.innerHTML="YOU WON"
    }
    if(computerScore==10){
        verdictDisplay.innerHTML="YOU LOST"
    }
}

let newGame = document.querySelector("div.newGameButton")
newGame.addEventListener('click', (e2) => {
    yourScore = 0
    computerScore = 0
    yourScoreDisplay.innerHTML = yourScore
    computerScoreDisplay.innerHTML = computerScore
    verdictDisplay.innerHTML=""
    yourChoiceDisplay.innerHTML=""
    computerChoiceDisplay.innerHTML=""
    resultDisplay.innerHTML=""
})
