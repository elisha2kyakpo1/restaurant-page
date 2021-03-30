    const list = document.querySelector('#content');
    const nav = document.createElement('ul');
  
    nav.innerHTML = `
      <li><a href="#" class="heading">About</a></li>
      <li><a href="#" class="heading"></a>Today's menu</li>
      <li><a href="#" class="heading"></a>Contact us</li>
    `;
    const url = list.appendChild(nav);
    console.log(url);