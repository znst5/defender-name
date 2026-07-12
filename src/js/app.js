import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';
console.log('app worked');

const game = new Game();
new GameSavingData();
game.start();

loadGame();
saveGame();

