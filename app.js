const computerChoiceDisplay=document.getElementById('computer-choice')
const yourChoiceDisplay=document.getElementById('your-choice')
const resultDisplay=document.getElementById('result')
const possibleChoices=document.querySelectorAll('button')
let userChoice
let computerChoice
let result
possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
    userChoice=e.target.id
    yourChoiceDisplay.innerHTML=userChoice
    generateComputerChoice()
    generateResult()
}))
function generateComputerChoice(){
    const randomNumber=Math.floor(Math.random()*3)+1
    if(randomNumber===1){
        computerChoice="Rock"
    }
    else if(randomNumber===2){
        computerChoice="Paper"
    }
    else{
        computerChoice="Scissor"
    }
    computerChoiceDisplay.innerHTML=computerChoice
}
function generateResult(){
    if(computerChoice===userChoice){
        result="Draw"
    }
    else if(userChoice==="Rock"){
        if(computerChoice==="Scissor"){
            result="Won"
        }
        else{
            result="Lost"
        }
    }
    else if(userChoice==="Paper"){
        if(computerChoice==="Rock"){
            result="Won"
        }
        else{
            result="Lost"
        }
    }
    else if(userChoice==="Scissor"){
        if(computerChoice==="Paper"){
            result="Won"
        }
        else{
            result="Lost"
        }
    }
    resultDisplay.innerHTML=result
}