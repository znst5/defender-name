import Validator from './Validator.js';

export class User {
  constructor(username, nickname) {
    const validator = new Validator();
    if (!validator.validateUsername(username)) {
      throw new Error('Имя пользователя содержит не допустимые символы, более 3 цифр подряд или неверные символы по краям');
    }
    if (typeof nickname !== 'string' || nickname.trim().length < 2) {
      throw new Error('Никнейм должен быть строкой (минимум 2 символа)');
    }
    this.username = username;
    this.nickname = nickname;
  }
}
