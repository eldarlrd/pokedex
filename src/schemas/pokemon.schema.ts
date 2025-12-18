import { create, enforce, test } from 'vest';
import type { Pokemon } from '../models/pokemon.model.ts';

const pokemonSchema = create((data: Pokemon) => {
  test('id', () => {
    enforce(data.id).isNumeric();
  });

  test('name', () => {
    enforce(data.name).isString().isNotBlank();
  });

  test('height', () => {
    enforce(data.height).isNumeric();
  });

  test('weight', () => {
    enforce(data.weight).isNumeric();
  });

  test('frontDefault', () => {
    enforce(data.sprites.frontDefault).isString().isNotBlank();
  });

  test('stats', () => {
    enforce(data.stats).isArray();
    data.stats.forEach(s => {
      enforce(s.baseStat).isNumeric();
      enforce(s.stat.name).isString().isNotBlank();
    });
  });

  test('types', () => {
    enforce(data.types).isArray();
    data.types.forEach(t => {
      enforce(t.type.name).isString().isNotBlank();
    });
  });
});

export default pokemonSchema;
