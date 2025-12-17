import $ from 'jquery';
import { resetDisplay, showError, showPokemon } from '@/features/Display.ts';
import getPokemon from '@/services/getPokemon.ts';
import normalizeName from '@/utils/normalizeName.ts';

// Avoid duplicate requests
let lastNormalizedQuery: string | null = null;

const bindSearch = (): void => {
  const toggleButtonState = () => {
    const inputValue = $('#search-input').val()?.toString().trim();
    const button = $('#search-form button[type="submit"]');

    const isEmpty = !inputValue;

    button.prop('disabled', isEmpty);
  };

  $(document)
    .off('input', '#search-input')
    .on('input', '#search-input', toggleButtonState);

  $(document)
    .off('submit', '#search-form')
    .on('submit', '#search-form', async e => {
      e.preventDefault();

      const inputName = $('#search-input').val()?.toString();
      if (!inputName) return;

      const normalized = normalizeName(inputName);

      if (normalized && normalized === lastNormalizedQuery) return;

      const button = $('#search-form button[type="submit"]');
      const icon = button.find('.material-icons');
      const originalIcon = icon.text();

      try {
        button.prop('disabled', true);
        icon.text('hourglass_bottom').addClass('is-rotating');
        resetDisplay();

        lastNormalizedQuery = normalized;

        const pokemon = await getPokemon(normalized);
        showPokemon(pokemon);
      } catch (error: unknown) {
        if (error instanceof Error) showError(error.message);
      } finally {
        icon.removeClass('is-rotating').text(originalIcon);

        toggleButtonState();
      }
    });

  toggleButtonState();
};

export default bindSearch;
