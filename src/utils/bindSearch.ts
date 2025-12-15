import $ from 'jquery';
import getPokemon from '@/services/getPokemon.ts';
import normalizeName from '@/utils/normalizeName.ts';

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

      const button = $('#search-form button[type="submit"]');
      const icon = button.find('.material-icons');
      const originalIcon = icon.text();

      try {
        button.prop('disabled', true);
        icon.text('hourglass_bottom').addClass('is-rotating');

        await getPokemon(normalizeName(inputName));
      } finally {
        icon.removeClass('is-rotating').text(originalIcon);

        toggleButtonState();
      }
    });

  toggleButtonState();
};

export default bindSearch;
