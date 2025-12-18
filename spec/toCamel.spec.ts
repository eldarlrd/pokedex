/// <reference path='../node_modules/@types/jasmine/index.d.ts' />
import toCamel from '../src/utils/toCamel.ts';

describe('toCamel', () => {
  it('converts snake_case keys to camelCase', () => {
    const input = {
      first_name: 'John',
      last_name: 'Doe',
      nested_object: {
        birth_date: '1990-01-01'
      }
    };

    const expected = {
      firstName: 'John',
      lastName: 'Doe',
      nestedObject: {
        birthDate: '1990-01-01'
      }
    };

    expect(toCamel(input)).toEqual(expected);
  });

  it('converts kebab-case keys to camelCase', () => {
    const input = {
      'first-name': 'John',
      'nested-item': {
        'item-id': 1
      }
    };

    const expected = {
      firstName: 'John',
      nestedItem: {
        itemId: 1
      }
    };

    expect(toCamel(input)).toEqual(expected);
  });

  it('handles arrays', () => {
    const input = [{ item_id: 1 }, { item_id: 2 }];

    const expected = [{ itemId: 1 }, { itemId: 2 }];

    expect(toCamel(input)).toEqual(expected);
  });

  it('returns non-object values as is', () => {
    expect(toCamel(123)).toBe(123);
    expect(toCamel('string')).toBe('string');
    expect(toCamel(null)).toBe(null);
  });
});
