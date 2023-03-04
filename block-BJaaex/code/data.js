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

// Card data
const cardsArray = [
    {
      name: 'ash',
      img: './media/20046-3-pokemon-ash-file.png',
    },
    {
      name: 'pikachu',
      img: './media/20048-2-pikachu-hd.png',
    },
    {
      name: 'frieza',
      img: './media/20068-3-legendary-pokemon-picture.png',
    },
    {
      name: 'drogon',
      img: './media/20252-5-pokemon-transparent-background.png',
    },
    {
      name: 'licat',
      img: './media/20346-7-pokemon-hd.png',
    },
    {
      name: 'aerowhale',
      img: './media/37455-7-legendary-pokemon-file.png',
    },
    {
      name: 'blue phoenex',
      img: './media/37574-7-legendary-pokemon.png',
    },
    {
      name: 'pokeball',
      img: './media/pokeball-g229e5ba63_1280.png',
    },
  ]