const createHeader = (id, text) => {
  const header = document.createElement('header');
  header.setAttribute('id', id);
  const logo = document.createElement('h1');
  logo.textContent = text;
  header.appendChild(logo);
  return header;
};

const createBtn = (id, text) => {
  const btn = document.createElement('button');
  btn.setAttribute('id', id);
  const span = document.createElement('span');
  span.textContent = text;
  btn.appendChild(span);
  btn.classList.add('tab');
  return btn;
};

const createNav = (id) => {
  const nav = document.createElement('nav');
  nav.setAttribute('id', id);

  const homeBtn = createBtn('home', 'home');
  const menuBtn = createBtn('menu', 'menu');
  const contactBtn = createBtn('contact', 'contact');

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
  return nav;
};

const createMain = (id) => {
  const main = document.createElement('main');
  main.setAttribute('id', id);
  return main;
};

const loadPage = () => {
  const content = document.getElementById('content');
  const header = createHeader('header', 'Flesh Foods');
  content.appendChild(header);
  const nav = createNav('nav');
  content.appendChild(nav);
  const tabContent = createMain('tab-content');
  content.appendChild(tabContent);
};

export default loadPage;