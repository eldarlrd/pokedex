import $ from 'jquery';
import { DISPLAY_ID, ORDERED_STATS, STAT_ICONS } from '@/config/stats.ts';
import type { Pokemon } from '@/models/pokemon.model.ts';

const Display = (): string => `
  <figure id='${DISPLAY_ID}' aria-live='polite' aria-atomic='true'></figure>
`;

const toLabel = (key: string): string =>
  ({
    hp: 'HP',
    attack: 'ATK',
    defense: 'DEF',
    speed: 'SPD',
    'special-attack': 'SpA',
    'special-defense': 'SpD'
  })[key] ?? key;

const capFirst = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1);
const genderCheck = (s: string): string =>
  s.replace(/-m$/i, ' ♂').replace(/-f$/i, ' ♀');

const typeChip = (name: string): string => `
  <span class='type-chip type-chip--${name}'>${capFirst(name)}</span>
`;

const formatWeightLbs = (hectograms: number): string => {
  // * 1 hg = 0.1 kg; 1 kg = 2.2 lbs
  const lbs = (hectograms / 10) * 2.2;

  return `${lbs.toFixed(1)} lbs`;
};

const formatHeightFeet = (decimeters: number): string => {
  // * 1 dm = 0.1 m; 1 m = 39.4" in
  const totalInches = Math.round((decimeters / 10) * 39.4);
  const feet = ~~(totalInches / 12);
  const inches = totalInches % 12;

  return `${feet}'${inches}"`;
};

const byStatName = (p: Pokemon): Record<string, number> =>
  p.stats.reduce<Record<string, number>>((acc, s) => {
    acc[s.stat.name] = s.baseStat;

    return acc;
  }, {});

const resetDisplay = (): void => {
  const root = $(`#${DISPLAY_ID}`);
  root.removeClass('is-active is-error is-success');
  root.empty();
};

const showError = (message: string): void => {
  const root = $(`#${DISPLAY_ID}`);
  root
    .removeClass('is-success')
    .addClass('is-error is-active')
    .html(`
      <div class='display-error'>
        <span class='material-icons'>sentiment_dissatisfied</span>
        <span>${message}</span>
      </div>
    `);
};

const showPokemon = (p: Pokemon): void => {
  const stats = byStatName(p);
  const root = $(`#${DISPLAY_ID}`);

  const statsHtml = ORDERED_STATS.map(
    key => `
      <li class='stat stat--base stat--${key}'>
        <span class='material-icons stat-icon'>${STAT_ICONS[key]}</span>
        <span class='stat-label'>${toLabel(key)}</span>
        <span class='stat-value'>${stats[key] ?? '-'}</span>
      </li>
    `
  ).join('');

  const typesHtml = p.types.map(t => typeChip(t.type.name)).join('');

  root
    .removeClass('is-error')
    .addClass('is-success is-active')
    .html(`
      <figcaption class='display-title'>
        <span class='title-left'>
          <span class='pokemon-name'>${genderCheck(capFirst(p.name))}</span>
          <span class='pokemon-xp'>
            <span class='material-icons'>military_tech</span>
            <span class='xp-value'>${p.baseExperience}</span>
          </span>
        </span>
        <span class='pokemon-id'>#${String(p.id).padStart(4, '0')}</span>
      </figcaption>

      <div class='display-content'>
        <div class='sprite-wrap'>
          <img
            class='sprite'
            loading='eager'
            decoding='async'
            alt='${capFirst(p.name)} front sprite'
            src='${p.sprites.frontDefault}'
          />
          <div class='types'>${typesHtml}</div>
        </div>

        <ul class='stats'>
          ${statsHtml}
        </ul>
      </div>

      <div class='display-footer'>
        <div class='meta meta--size'>
          <span class='material-icons'>straighten</span>
          <span class='meta-value'>${formatHeightFeet(p.height)}</span>
        </div>
        <div class='meta meta--weight'>
          <span class='material-icons'>fitness_center</span>
          <span class='meta-value'>${formatWeightLbs(p.weight)}</span>
        </div>
      </div>
    `);
};

export { resetDisplay, showError, showPokemon };
export default Display;
