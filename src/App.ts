import '@/App.css';
import '@fontsource-variable/rubik';
import Footer from '@/banners/Footer.ts';
import Header from '@/banners/Header.ts';

export default function App() {
  return `
    <section class='section is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center'>
      ${Header()}

      <main class='box'>

      </main>

      ${Footer()}
    </section>
  `;
}
