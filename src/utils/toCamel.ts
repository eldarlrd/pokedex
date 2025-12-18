import type { Camelize } from '../models/pokemon.model.ts';

const toCamel = <T>(obj: unknown): Camelize<T> => {
  if (obj === null || typeof obj !== 'object') return obj as Camelize<T>;

  if (Array.isArray(obj))
    return obj.map(v => toCamel(v)) as unknown as Camelize<T>;

  const result: Record<string, unknown> = {};
  const record = obj as Record<string, unknown>;

  Object.keys(record).forEach(key => {
    const camelKey = key.replace(/([-_][a-z])/g, g =>
      g.toUpperCase().replace('-', '').replace('_', '')
    );

    result[camelKey] = toCamel(record[key]);
  });

  return result as unknown as Camelize<T>;
};

export default toCamel;
