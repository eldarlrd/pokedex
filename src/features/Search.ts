const Search = (): string => `
  <form id='search-form'>
    <input id='search-input' class='input has-background-light has-text-dark is-dark' type='text' maxLength='64' />
    <button class='button is-info is-dark is-inverted' type='submit' autocapitalize='words'>
      <span class='material-icons'>search</span>
    </button>
  </form>
`;

export default Search;
