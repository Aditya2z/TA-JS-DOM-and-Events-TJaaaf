// - Scissors cuts Paper
// - Paper covers Rock
// - Rock crushes Scissors



let yourIcons = document.querySelectorAll(".game-icon-you > .fa");
let computerIcons = document.querySelectorAll(".game-icon-computer > .fa");

let yourSelectionName = document.querySelector(".your-display");
let computerSelectionName = document.querySelector(".computer-display");

let yourScore = document.querySelector(".your-score");
let computerScore = document.querySelector(".computer-score");

let result = document.querySelector(".result");

let reset = document.querySelector(".refresh-icon");

function colorReset() {
    yourIcons.forEach(ele => ele.style.color = "#1E90FF");
    computerIcons.forEach(ele => ele.style.color = "rgb(182, 20, 20)");
};

yourIcons.forEach(icon => icon.addEventListener("click", (event) => {

    colorReset();

    event.target.style.color = "black";
    yourHand = event.target;
    yourSelectionName.innerText = (yourHand.dataset.selection);

    let randomNumber = Math.floor(Math.random() * 3);
    let computerHand = computerIcons[randomNumber];
    computerHand.style.color = "black";
    computerSelectionName.innerText = (computerHand.dataset.selection);


    switch(true) {
        case (yourHand.id === "rock" && computerHand.id == "scissors") ||
            (yourHand.id === "paper" && computerHand.id == "rock") ||
            (yourHand.id === "scissors" && computerHand.id == "paper") :
            result.innerText = "You Won";
            yourScore.innerText = Number(yourScore.innerText) + 1;

            break;
        case (yourHand.id === computerHand.id):
            result.innerText ="Match Tied";
            break;
        default:
            result.innerText = "You Lost";
            computerScore.innerText = Number(computerScore.innerText) + 1;
            } 

    }
    ));

    reset.addEventListener("click", () => {
        colorReset();
        yourSelectionName.innerText = "";
        yourScore.innerText = 0;
        computerSelectionName.innerText = "";
        computerScore.innerText = 0;
        result.innerText = "";
    });