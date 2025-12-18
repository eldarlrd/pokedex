const DISPLAY_ID = 'display';

const STAT_ICONS = {
  hp: 'favorite',
  speed: 'electric_bolt',
  attack: 'sports_mma',
  defense: 'shield',
  'special-attack': 'auto_fix_high',
  'special-defense': 'health_and_safety'
} as const;

const ORDERED_STATS = [
  'hp',
  'speed',
  'attack',
  'defense',
  'special-attack',
  'special-defense'
] as const;

export { DISPLAY_ID, STAT_ICONS, ORDERED_STATS };
