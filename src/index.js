import loadPage from './modules/initial-page-load.js';
import loadHome from './modules/home.js';
import loadMenu from './modules/menu.js';
import loadContact from './modules/contact.js';

const addNavEvents = () =>{
  const homeBtn = document.getElementById('home');
  const menuBtn = document.getElementById('menu');
  const contactBtn = document.getElementById('contact');

  homeBtn.addEventListener('click', loadHome);
  menuBtn.addEventListener('click', loadMenu);
  contactBtn.addEventListener('click', loadContact);
}
const init = () => {
  loadPage();
  loadHome();
  addNavEvents();
}

init();