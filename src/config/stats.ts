const DISPLAY_ID = 'display';

const STAT_ICONS = {
  hp: 'favorite',
  attack: 'sports_mma',
  defense: 'shield',
  speed: 'electric_bolt',
  'special-attack': 'auto_fix_high',
  'special-defense': 'health_and_safety'
} as const;

const ORDERED_STATS = [
  'hp',
  'attack',
  'defense',
  'speed',
  'special-attack',
  'special-defense'
] as const;

export { DISPLAY_ID, STAT_ICONS, ORDERED_STATS };
