const { Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie, } = require('./domain.js');

describe('Тестирование иерархии классов', () => {

  describe('Валидация контруктора базового класса', () => {
    test('Ошибка: имя не строка', () => {
      expect(() => new Character(123, 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
    });

    test('Ошибка: имя меньше 2 символов', () => {
      expect(() => new Character('B', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
    });

    test('Ошибка: имя больше 10 символов', () => {
      expect(() => new Character('Bowernameman', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
    });

    test('Ошибка: некорректный персонаж', () => {
      expect(() => new Character('Legolas', 'Org')).toThrow();
    });
  });

  describe('Создание дочерних классов и их характеристики', () => {
    test('Класс Bowman', () => {
      const hero = new Bowman('Миша');
      expect(hero).toEqual({
        name: 'Миша',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
      });
    });

    test('Класс Swordsman', () => {
      const hero = new Swordsman('Петя');
      expect(hero).toEqual({
        name: 'Петя',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
      });
    });

    test('Класс Magician', () => {
      const hero = new Magician('Вася');
      expect(hero).toEqual({
        name: 'Вася',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
      });
    });

    test('Класс Daemon', () => {
      const hero = new Daemon('Иван');
      expect(hero).toEqual({
        name: 'Иван',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
      });
    });

    test('Класс Undead', () => {
      const hero = new Undead('Илья');
      expect(hero).toEqual({
        name: 'Илья',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
      });
    });

    test('Класс Zombie', () => {
      const hero = new Zombie('Никита');
      expect(hero).toEqual({
        name: 'Никита',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
      });
    });
  });
});
