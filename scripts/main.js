import { GameController } from './GameController.js';

export function between(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

(function () {
  console.log('run');
  const gameHtmlWrapper = document.querySelector('#game-wrapper-one');
  const gameController = new GameController(gameHtmlWrapper);
  console.log('gameController ', gameController);

})();
