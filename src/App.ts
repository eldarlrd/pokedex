import '@/App.css';
import '@fontsource-variable/rubik';
import Footer from '@/banners/Footer.ts';
import Header from '@/banners/Header.ts';
import Display from '@/features/Display.ts';
import Search from '@/features/Search.ts';

const App = (): string => `
  <section class='section is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center'>
    ${Header()}

    <main class='box'>
      ${Display()}
      ${Search()}
    </main>

    ${Footer()}
  </section>
`;

export default App;
