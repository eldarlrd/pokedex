import '@/App.css';

export default function App() {
  return `
    <section class='section is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center'>
      <header class='is-size-4'>
        <span id='pokeball' class='material-icons'>catching_pokemon</span>
        <span>Pokédex</span>
      </header>

      <main class='box'>

      </main>

      <footer class='is-size-5'>
        © 2025
        <a
          title='Source'
          target='_blank'
          type='text/html'
          rel='author external noreferrer'
          href='https://github.com/eldarlrd/pokedex'>
          <span class='material-icons'>fork_right</span>eldarlrd
        </a>
      </footer>
    </section>
  `;
}
