import { orderByProps } from './orderByProps.js';

describe('Тестирование orderByProps', () => {
   test('Корректная сотрировка по шаблону и по алфавиту', () => { 
      const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
      const sortOrder = ['name', 'level'];
      const result = orderByProps(obj, sortOrder);

      expect(result).toEqual([
        { key: 'name', value: 'мечник' },
        { key: 'level', value: 2 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 },
      ]);
   });

   test('Корректная работа при пустом массиве сортировки', () => {
      const obj = { b: 2, a: 1, c: 3 };
      const sortOrder = [];
      const result = orderByProps(obj, sortOrder);

      expect(result).toEqual([
        { key: 'a', value: 1 },
        { key: 'b', value: 2 },
        { key: 'c', value: 3 },
      ]);
   });

    test('Корректная работа, если есть все ключи', () => {
        const obj = { name: 'мечник', level: 5 };
        const sortOrder = ['level', 'name'];
        const result = orderByProps(obj, sortOrder);

      expect(result).toEqual([
        { key: 'level', value: 5 },
        { key: 'name', value: 'мечник' },
      ]);
    });

    test('Не обрабатывает свойства из прототипа объект', () => {
      const proto = { prototypeProp: 'inherited' };
      const obj = Object.create(proto);
      obj.name = 'лучник';
      const result = orderByProps(obj, ['name']);

      expect(result).toEqual([
        { key: 'name', value: 'лучник' },
      ]);
    });
});

