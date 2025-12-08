import '@/App.css';
import '@fontsource-variable/rubik';
import Footer from '@/banners/Footer.ts';
import Header from '@/banners/Header.ts';
import Display from '@/features/Display.ts';
import Search from '@/features/Search.ts';

export default function App(): string {
  return `
    <section class='section is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center'>
      ${Header()}

      <main class='box'>
        ${Display()}
        ${Search()}
      </main>

      ${Footer()}
    </section>
  `;
}
