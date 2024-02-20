const container = document.getElementById('display-btn');
const rock = document.getElementsByClassName('rock');
const paper = document.getElementsByClassName('paper');
const scissors = document.getElementsByClassName('scissors')
const scoreBoard = document.getElementsByClassName("score-board");
const userChoice = document.getElementsByClassName('choice-user');
const computerChoice = document.getElementsByClassName("choice-computer");
const startBtn = document.getElementsByClassName("start-btn");
console.log(startBtn[0]);
const gameContainer = document.getElementsByClassName('container');
const results = document.getElementsByClassName('results')


let scoreUser =0;
let scoreComputer =0;

function evaluateInput(userInp, computerInp){

    if(userInp === computerInp){
        return "Tie";
    }
    else if(userInp === 0 && computerInp === 1){
        return "computer";
    }
    else if(userInp === 0 && computerInp === 2){
        return "user";
    }
    else if(userInp === 1 && computerInp === 0){
        return "user";
    }
    else if(userInp === 1 && computerInp === 0){
        return "computer";
    }
    else if(userInp === 2 && computerInp === 0){
        return "user";
    }
    else if(userInp === 2 && computerInp === 1){
        return "computer";
    }
}

container.addEventListener('click', (event)=>{
    let computerInput = Math.floor(Math.random() * 3);
    let userInput ; 

    if(computerInput === 0){
        computerChoice[0].setAttribute('src', "images/rock.png")
    }
    else if(computerInput === 1){
        computerChoice[0].setAttribute('src', "images/paper.png")
    }
    else if(computerInput === 2){
        computerChoice[0].setAttribute('src' , "images/scissors.png");
    }
    

    if(event.target.classList.contains('rock-img')){
        userInput =0;
        userChoice[0].setAttribute('src', "images/rock.png")
        const x = evaluateInput(userInput,computerInput)
        if(x === "user"){
            scoreUser++;
        }
        else{
            scoreComputer++;
        }

        if(scoreUser === 6 || scoreComputer === 6){
            scoreComputer =0;
            scoreUser = 0;
            results[0].style.display = "block";
            gameContainer[0].style.display = "none";
        }

        let score = `${scoreUser} : ${scoreComputer}`;
        scoreBoard[0].textContent = score;
        console.log(scoreUser, scoreComputer)

    }
    else if(event.target.classList.contains('paper-img')){
        userInput =1;
        userChoice[0].setAttribute('src', "images/paper.png")
        const x = evaluateInput(userInput,computerInput)
        if(x === "user"){
            scoreUser++;
        }
        else{
            scoreComputer++;
        }

        if(scoreUser === 6 || scoreComputer === 6){
            scoreComputer =0;
            scoreUser = 0;
            results[0].style.display = "block";
            gameContainer[0].style.display = "none";
        }

        let score = `${scoreUser} : ${scoreComputer}`;
        scoreBoard[0].textContent = score;
        console.log(scoreUser, scoreComputer)
    }
    else if(event.target.classList.contains('scissors-img')){
        userInput =2;
        userChoice[0].setAttribute('src' , "images/scissors.png");
        const x = evaluateInput(userInput,computerInput)
        if(x === "user"){
            scoreUser++;
        }
        else{
            scoreComputer++;
        }

        if(scoreUser === 6 || scoreComputer === 6){
            scoreComputer =0;
            scoreUser = 0;
            results[0].style.display = "block";
            gameContainer[0].style.display = "none";
        }

        let score = `${scoreUser} : ${scoreComputer}`;
        scoreBoard[0].textContent = score;
        console.log(scoreUser, scoreComputer)
    }

})

startBtn[0].addEventListener('click',() =>{
    console.log("ok")
    gameContainer[0].style.display = "block";
})
