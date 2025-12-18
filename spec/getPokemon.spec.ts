/// <reference path='../node_modules/@types/jasmine/index.d.ts' />
import axios from 'axios';
import ERRORS from '../src/config/errors.ts';
import getPokemon from '../src/services/getPokemon.ts';

describe('getPokemon', () => {
  it('fetches & returns camelized pokemon data', async () => {
    const mockData = {
      id: 25,
      name: 'pikachu',
      weight: 60,
      height: 4,
      sprites: {
        front_default: 'img_url'
      },
      stats: [
        {
          base_stat: 35,
          stat: {
            name: 'hp'
          }
        },
        {
          base_stat: 55,
          stat: {
            name: 'attack'
          }
        },
        {
          base_stat: 40,
          stat: {
            name: 'defense'
          }
        },
        {
          base_stat: 50,
          stat: {
            name: 'special-attack'
          }
        },
        {
          base_stat: 50,
          stat: {
            name: 'special-defense'
          }
        },
        {
          base_stat: 90,
          stat: {
            name: 'speed'
          }
        }
      ],
      types: [
        {
          type: {
            name: 'electric'
          }
        }
      ]
    };

    spyOn(axios, 'get').and.resolveTo({ data: mockData });

    const result = await getPokemon('pikachu');

    expect(axios.get).toHaveBeenCalledWith(
      'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/pikachu'
    );
    expect(result.id).toBe(25);
    expect(result.name).toBe('pikachu');
    expect(result.sprites.frontDefault).toBe('img_url');
    expect(result.stats[0].baseStat).toBe(35);
    expect(result.types[0].type.name).toBe('electric');
  });

  it('throws "Pokemon not found." on 404', async () => {
    const error = {
      response: { status: 404 }
    };

    spyOn(axios, 'get').and.rejectWith(error);
    spyOn(axios, 'isAxiosError').and.returnValue(true);

    await expectAsync(getPokemon('invalid')).toBeRejectedWithError(
      ERRORS.notFound
    );
  });

  it('throws "Invalid data." if validation fails', async () => {
    const mockData = {
      id: 'not-a-number',
      name: 'pikachu',
      weight: 69,
      height: 7,
      sprites: {
        front_default: 'img_url'
      },
      stats: [],
      types: []
    };

    spyOn(axios, 'get').and.resolveTo({ data: mockData });

    await expectAsync(getPokemon('pikachu')).toBeRejectedWithError(
      ERRORS.invalid
    );
  });

  it('throws "Request failed." on other errors', async () => {
    spyOn(axios, 'get').and.rejectWith(new Error('Network Error'));

    await expectAsync(getPokemon('pikachu')).toBeRejectedWithError(
      ERRORS.requestFailed
    );
  });
});
