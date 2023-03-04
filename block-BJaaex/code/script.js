// ### Memory Game

// Follow this article and make Memory Game with the following features.

// [Article](https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/)

// 1. It will be a 4 x 4 grid with different cards
// 2. When clicked on any of the card it will show an icon and you need to click on the second card
// 3. When clicked on the second card, both icons will either match or not
// 4. If it matches both cards will become green and if no match both cards will flip back
// 5. To win this game you will have to remember where the location of the cards and make all the cards green
// 6. You can use icons from https://heroicons.com/ or Font Awesome

// ### Advanced Features

// 1. Count the number of moves
// 2. Calculate the time it took to win the game


const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

let gameGrid = [];
gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

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
    if (count < 2) {   
        count++
        if (count === 1) {
          firstGuess = clicked.parentNode.dataset.name;
          clicked.parentNode.classList.add('selected');
          console.log(firstGuess);
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
})

const match = () => {
    var selected = document.querySelectorAll('.selected')
    selected.forEach((card) => {
      card.classList.add('match')
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









