const container = document.getElementById("display-btn");
const rock = document.getElementsByClassName("rock");
const paper = document.getElementsByClassName("paper");
const scissors = document.getElementsByClassName("scissors");
const scoreBoard = document.getElementsByClassName("score-board");
const userChoice = document.getElementsByClassName("choice-user");
const computerChoice = document.getElementsByClassName("choice-computer");
const startBtn = document.getElementsByClassName("start-btn");
const gameContainer = document.getElementsByClassName("container");
const results = document.getElementsByClassName("results");
const resultsDisplay = document.getElementsByClassName("display-results");
const text = document.getElementsByClassName("text");
const replay = document.getElementsByClassName("replay-btn");
const yes = document.getElementsByClassName("yes");
const no = document.getElementsByClassName("no");

let scoreUser =0;
let scoreComputer =0;

function evaluateInput(userInp, computerInp) {
  if (userInp === computerInp) {
    return "Tie";
  } else if (userInp === 0 && computerInp === 1) {
    return "computer";
  } else if (userInp === 0 && computerInp === 2) {
    return "user";
  } else if (userInp === 1 && computerInp === 0) {
    return "user";
  } else if (userInp === 1 && computerInp === 0) {
    return "computer";
  } else if (userInp === 2 && computerInp === 0) {
    return "computer";
  } else if (userInp === 2 && computerInp === 1) {
    return "user";
  }
}

function check(){
  if (scoreUser === 3 || scoreComputer === 3) {
    if (scoreUser > scoreComputer) {
      const winScore = scoreUser - scoreComputer;
      resultsDisplay[0].textContent = `YAY! YOU WON BY ${winScore} POINTS`;
    } else if (scoreComputer > scoreUser) {
      const winScore = scoreComputer - scoreUser;
      resultsDisplay[0].textContent = `OOPSE! YOU LOST BY ${winScore} POINTS`;
    }

    results[0].style.display = "block";
    yes[0].style.display = "none";
    no[0].style.display = "none";
    container.style.display = "none";
    text[0].style.display = "none";
  }
}


function setImages(x) {
  if (x === "user") {
    scoreUser++;
  } else if (x === "computer") {
    scoreComputer++;
  } else if (x === "Tie") {
    scoreUser = scoreUser + 0;
    scoreComputer = scoreComputer + 0;
  }

  check();

  let score = `${scoreUser} : ${scoreComputer}`;
  scoreBoard[0].textContent = score;
  console.log(scoreUser, scoreComputer);
}

function quit() {
  results[0].style.display = "block";
  replay[0].style.display = "none";
  gameContainer[0].style.display = "none";
  yes[0].style.display = "inline-block"
  no[0].style.display = "inline-block"
  resultsDisplay[0].textContent = "Are you sure you want to quit?";

  yes[0].addEventListener("click", () => {
    results[0].style.display = "none";
    location.reload();
  });
  no[0].addEventListener("click", () => {
    gameContainer[0].style.display = "block";
    results[0].style.display = "none";
    replay[0].style.display = "block";
    check();
  });
}

container.addEventListener("click", (event) => {
  let computerInput = Math.floor(Math.random() * 3);
  let userInput;

  if (computerInput === 0) {
    computerChoice[0].setAttribute("src", "images/rock.png");
  } else if (computerInput === 1) {
    computerChoice[0].setAttribute("src", "images/paper.png");
  } else if (computerInput === 2) {
    computerChoice[0].setAttribute("src", "images/scissors.png");
  }

  if (event.target.classList.contains("rock-img")) {
    userInput = 0;
    userChoice[0].setAttribute("src", "images/rock.png");
    const x = evaluateInput(userInput, computerInput);
    setImages(x);
  } else if (event.target.classList.contains("paper-img")) {
    userInput = 1;
    userChoice[0].setAttribute("src", "images/paper.png");
    const x = evaluateInput(userInput, computerInput);
    setImages(x);
  } else if (event.target.classList.contains("scissors-img")) {
    userInput = 2;
    userChoice[0].setAttribute("src", "images/scissors.png");
    const x = evaluateInput(userInput, computerInput);
    setImages(x);
  }
});

startBtn[0].addEventListener("click", () => {
  gameContainer[0].style.display = "block";
});

replay[0].addEventListener("click", () => {
  text[0].style.display ="flex"
  container.style.display ="flex"
  results[0].style.display ="none"
  scoreUser =0;
  scoreComputer =0;
  let score = `${scoreUser} : ${scoreComputer}`;
  scoreBoard[0].textContent = score;
});
