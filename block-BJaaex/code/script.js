
function main() {

var begin=Date.now();

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

let gameGrid = [];
gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

let display = document.createElement("div");
display.classList.add("display");
game.append(display);

gameGrid.forEach((item) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = item.name;

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${item.img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);

})


let count = 0;
let firstGuess = '';
let secondGuess = '';
let previousTarget = null;
let moveCounter = 0;

const match = () => {
  var selected = document.querySelectorAll('.selected');
  selected.forEach((card) => {
    card.classList.add('match');
  })
}

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;

  var selected = document.querySelectorAll('.selected');
  selected.forEach((card) => {
    card.classList.remove('selected');
  })
}

function checkGameWon() {
  let allCards = Array.from(document.querySelectorAll(".card"));

  if(allCards.every(card => card.classList.contains("match"))) {
    game.innerHTML = "";
    var end= Date.now();
    var timeSpent=(end-begin)/1000+"secs";

    let finalMessage = document.createElement("div");
    finalMessage.classList.add("finalMessage");

    finalMessage.innerHTML = `<h1>Game Won!<h1>
    <p>Time taken: ${timeSpent} <p>
    <p>Moves taken: ${moveCounter} <p>`;

    game.append(finalMessage);
  }
}

grid.addEventListener('click', function (event) {

    let clicked = event.target;
    if (
        clicked.nodeName === 'SECTION' ||
        clicked === previousTarget ||
        clicked.parentNode.classList.contains('selected') ||
        clicked.parentNode.classList.contains('match')
      ) {
        return;
    }
        
      moveCounter++;
      display.innerHTML = `<p>Moves : ${moveCounter}<p>`;

    if (count < 2) {   
        count++
        if (count === 1) {
          firstGuess = clicked.parentNode.dataset.name;
          clicked.parentNode.classList.add('selected');
        } else {
          secondGuess = clicked.parentNode.dataset.name;
          clicked.parentNode.classList.add('selected');
        }
        
        if (firstGuess !== '' && secondGuess !== '') {
          let delay = 1000;
          if (firstGuess === secondGuess) {
            setTimeout(function() {
              match();
            }, delay);
            setTimeout(function() {
              resetGuesses();
            }, delay);
          } else {
            setTimeout(function() {
              resetGuesses();
            }, delay);
          }
        }
    }
    previousTarget = clicked;

    setTimeout(function () {
      checkGameWon();
    }, 1200);
    
})


};

main();









