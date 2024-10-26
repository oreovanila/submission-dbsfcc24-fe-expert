import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/detail.scss';
import '../styles/favorite.scss';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app.js';
import swRegister from './utils/sw-register.js';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('.drawer'),
  content: document.querySelector('#mainElement'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
