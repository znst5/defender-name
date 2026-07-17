import Validator from './Validator.js';
import { User } from './user.js';

describe('Тестирование класса Validator', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  describe('Положительный сценарий (validateUsername)', () => {
    test('Проверяем латинские буквы', () => {
      expect(validator.validateUsername('alex')).toBe(true);
      expect(validator.validateUsername('A')).toBe(true);
    });

    test('Проверяем имена с допустимыми знаками по середине', () => {
      expect(validator.validateUsername('ivan-ivanov')).toBe(true);
      expect(validator.validateUsername('petr_99')).toBe(true);
      expect(validator.validateUsername('user-name_1')).toBe(true);
    });

    test('Проверяем имена с 3 цифрами подряд по середине', () => {
      expect(validator.validateUsername('player123win')).toBe(true);
    });
  });

    describe('Отрицательные сценарии (validateUsername)', () => {
      test('Больше 4 цифр подряд', () => {
        expect(validator.validateUsername('player1234win')).toBe(false);
        expect(validator.validateUsername('12345')).toBe(false);
      });

      test('Имя начинается с запрещенных символов', () => {
        expect(validator.validateUsername('1alex')).toBe(false);
        expect(validator.validateUsername('-alex')).toBe(false);
        expect(validator.validateUsername('_alex')).toBe(false);
      });

      test('Имя заканчивается на заврещенные символы', () => {
        expect(validator.validateUsername('alex1')).toBe(false);
        expect(validator.validateUsername('alex-')).toBe(false);
        expect(validator.validateUsername('alex_')).toBe(false);
      });

      test('Проверка кириллицы, спецсимволов и пробелов', () => {
        expect(validator.validateUsername('Иван')).toBe(false);
        expect(validator.validateUsername('alex@mail')).toBe(false);
        expect(validator.validateUsername('ivan ivanov')).toBe(false);
      });

      test('Проверка нестрокового типа данных', () => {
        expect(validator.validateUsername(null)).toBe(false);
        expect(validator.validateUsername(undefined)).toBe(false);
        expect(validator.validateUsername(12345)).toBe(false);
        expect(validator.validateUsername({})).toBe(false);
      });
    });
  });

    describe('Тестирование класса User', () => {
      describe('Положительный сценарий', () => {
        test('Создается объект из валидных данных', () => {
          const user = new User('Alex', 'Alex_99_name');
          expect(user.username).toBe('Alex');
          expect(user.nickname).toBe('Alex_99_name');
        });
      });

      describe('Отрицательные сценарии', () => {
        test('Имя пользователя не проходит Validator', () => {
          expect(() => new User('1Alex', 'Alex_99_name')).toThrow(
            'Имя пользователя содержит недопустимые символы, более 3 цифр подряд или неверные символы по краям'
          );
        });

        test('Никнейм не строка', () => {
          expect(() => new User('Alex', 12345)).toThrow(
            'Никнейм должен быть строкой (минимум 2 символа)'
          );
          expect(() => new User('Alex', null)).toThrow(
            'Никнейм должен быть строкой (минимум 2 символа)'
          );
        });

        test('Никнейм состоит из пробелов или короче 2 символов', () => {
          expect(() => new User('Alex', ' ')).toThrow(
            'Никнейм должен быть строкой (минимум 2 символа)'
          );
          expect(() => new User('Alex', 'A')).toThrow(
            'Никнейм должен быть строкой (минимум 2 символа)'
          );
        });
      });
    });
