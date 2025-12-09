import axios from 'axios';
import ERRORS from '@/config/errors.ts';
import type { Pokemon, PokemonRaw } from '@/models/pokemon.model.ts';
import pokemonSchema from '@/schemas/pokemon.schema.ts';
import normalizeName from '@/utils/normalizeName.ts';
import toCamel from '@/utils/toCamel';

const PROXY_BASE_URL = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon';

export default async function (inputName: string): Promise<Pokemon> {
  try {
    const formattedName = normalizeName(inputName);
    const { data } = await axios.get<PokemonRaw>(
      `${PROXY_BASE_URL}/${formattedName}`
    );

    const cleanData = toCamel<PokemonRaw>(data);
    const validation = pokemonSchema(cleanData);

    if (validation.hasErrors()) {
      console.error(validation.getError());

      throw new Error(ERRORS.invalid);
    }

    return cleanData;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      console.error(error);

      throw new Error(ERRORS.notFound);
    } else if (error instanceof Error) throw new Error(error.message);

    throw error;
  }
}
