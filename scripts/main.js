import { GameController } from './GameController.js';

const testPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Finish test promise')
    }, 5000);
})

// testPromise.them((test) => {
//     console.log('test', test);
// })

export function between(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

(async function () {
  console.log('run');
  const gameHtmlWrapper = document.querySelector('#game-wrapper-one');
  const gameController = new GameController(gameHtmlWrapper);
  console.log('gameController ', gameController);
  const test = await testPromise;
  console.log('test', test);
})();
