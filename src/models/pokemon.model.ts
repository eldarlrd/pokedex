type CamelCase<S extends string> = S extends `${infer T}_${infer U}`
  ? `${T}${Capitalize<CamelCase<U>>}`
  : S;

type Camelize<T> =
  T extends Array<infer U>
    ? Array<Camelize<U>>
    : T extends object
      ? { [K in keyof T as CamelCase<K & string>]: Camelize<T[K]> }
      : T;

interface PokemonStats {
  hp: 'HP';
  attack: 'ATK';
  defense: 'DEF';
  speed: 'SPD';
  'special-attack': 'SpA';
  'special-defense': 'SpD';
}

interface PokemonRaw {
  id: number;
  name: string;
  weight: number;
  height: number;
  base_experience: number;
  sprites: {
    front_default: string;
  };
  stats: {
    base_stat: number;
    stat: { name: string };
  }[];
  types: {
    type: { name: string };
  }[];
}

type Pokemon = Camelize<PokemonRaw>;

export type { Camelize, PokemonRaw, Pokemon, PokemonStats };
