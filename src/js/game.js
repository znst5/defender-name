import { Character, Bowman, Swordsman, Magician, Deamon, Undead, Zombie } from './domain.js';
import { User } from './User.js';

new Character();

export default class Game {
  constructor() {
    this.playerProfile = null;
    this.charactor = null;
  }

  registerPlayer(username, nickname) {
    this.playerProfile = new User(username, nickname);
    console.log(`Пользователь ${this.playerProfile.username} успешно зарегистрирован!`);
  }

  start(characterType = 'Bowman') {
    if (!this.playerProfile) {
      console.log('Данные не заполнены. Регитрируем гостя по умолчанию...');
      this.registerPlayer('DefaultUser', 'Hero');
    }

    const nickname = this.playerProfile.nickname;

    switch (characterType) {
      case 'Bowman': this.character = new Bowman(nickname); break;
      case 'Swordsman': this.character = new Swordsman(nickname); break;
      case 'Magician': this.character = new Magician(nickname); break;
      case 'Deamon': this.character = new Deamon(nickname); break;
      case 'Undead': this.character = new Undead(nickname); break;
      case 'Zombie': this.character = new Zombie(nickname); break;
      default:
        throw new Error(`Неизвестный тип персонажа: ${characterType}`);
    }
    console.log('game started');
    console.log(`Персонаж ${this.character.name} (${this.character.type}) готов к бою!`);
  }
}

export class GameSavingData {

}

export function readGameSaving() {

}

export function writeGameSaving() {

}
