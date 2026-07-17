import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';
console.log('app worked');

const game = new Game();

game.registerPlayer('Alex-99', 'Legolas');

new GameSavingData();

game.start('Bowman');

loadGame();
saveGame();

