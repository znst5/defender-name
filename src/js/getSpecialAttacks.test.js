import { getSpecialAttacks } from './getSpecialAttacks.js';

describe('Тестирование getSpecialAttacks', () => {
  test('Корректное извлечение атак и дефолтное описание, если его нет', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'https://yandex.ru/images/search?img_url=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F42%2F35%2F45%2F4235451050512031f2b335d22e759a3f.jpg&lr=119126&pos=3&rpt=simage&text=картинки%20двойной%20выстрел%20из%20игры',
          description: 'Двойной выстрел наносит двойной урон',
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'https://yandex.ru/images/search?img_url=https%3A%2F%2Fc8.alamy.com%2Fcomp%2F2F929DH%2Fboy-fighter-or-boxer-loses-and-gets-hit-in-the-face-while-having-a-knockdown-or-knockout-in-the-boxing-ring-cartoon-character-flat-style-vector-2F929DH.jpg&lr=119126&pos=30&rpt=simage&text=картинки%20нокаутирующий%20удар%20из%20игры',
        },
      ],
    };

    const result = getSpecialAttacks(character);

    expect(result).toEqual([
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'https://yandex.ru/images/search?img_url=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F42%2F35%2F45%2F4235451050512031f2b335d22e759a3f.jpg&lr=119126&pos=3&rpt=simage&text=картинки%20двойной%20выстрел%20из%20игры',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'https://yandex.ru/images/search?img_url=https%3A%2F%2Fc8.alamy.com%2Fcomp%2F2F929DH%2Fboy-fighter-or-boxer-loses-and-gets-hit-in-the-face-while-having-a-knockdown-or-knockout-in-the-boxing-ring-cartoon-character-flat-style-vector-2F929DH.jpg&lr=119126&pos=30&rpt=simage&text=картинки%20нокаутирующий%20удар%20из%20игры',
        description: 'Описание недоступно',
      },
    ]);
  });

  test('Возвращает пустой массив, если у персонажа нет поля special', () => {
    const character = {
      name: 'Лучник',
      type: 'Swordsman',
    };

    const result = getSpecialAttacks(character);

    expect(result).toEqual([]);
  });
});
