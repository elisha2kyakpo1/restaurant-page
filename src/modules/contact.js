const setBtnActive = (id) => {
  const activeBtn = document.querySelector('.tab.active');
  if (activeBtn) activeBtn.classList.remove('active');

  const homeBtn = document.getElementById(id);
  homeBtn.classList.add('active');
};

const createSection = (name, data) => {
  const section = document.createElement('section');
  section.classList.add('section');

  const title = document.createElement('h2');
  title.classList.add('section-title');
  title.textContent = name;
  section.appendChild(title);

  data.forEach((d) => {
    const para = document.createElement('p');
    para.classList.add('section-description');
    para.textContent = d;
    section.appendChild(para);
  });

  return section;
};

const loadContact = () => {
  const content = document.getElementById('tab-content');
  content.classList.add('flex-lay');
  content.classList.remove('grid-lay');
  content.textContent = '';
  setBtnActive('contact');

  const addressSection = createSection('Address', [
    '# +260 961 095 323',
    '# +260 976 000 435',
    'Lusaka zambia',
  ]);
  content.appendChild(addressSection);
};

export default loadContact;