(()=>{"use strict";function t(t,e){const n=document.createElement("button");n.setAttribute("id",t);const s=document.createElement("span");return s.textContent=e,n.appendChild(s),n.classList.add("tab"),n}const e=function(){const t=document.getElementById("tab-content");t.classList.add("flex-lay"),t.classList.remove("grid-lay"),t.textContent="";const e=function(){const t=document.createElement("section");t.classList.add("section");const e=document.createElement("h2");e.classList.add("section-title"),e.textContent="About",t.appendChild(e);const n=document.createElement("p");return n.classList.add("section-description"),n.textContent="Flesh Food has The best food from all Galaxies Lorem ipsum dolor sitamet consectetur adipisicing elit. Animi in, neque, dignissimosperspiciatis illo deserunt tetur adipisicing elit. Animi in, neque,dignissimos perspiciatis illo deserunt adipisicing elit. Animi in,neque, dignissimos perspiciatis illo deserunt",t.appendChild(n),t}();!function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById("home").classList.add("active")}(),t.appendChild(e)};function n(t,e,n,s){const o=document.createElement("div");o.classList.add("food");const a=document.createElement("img");a.setAttribute("src",t),a.setAttribute("alt",s);const c=document.createElement("div");c.classList.add("description");const i=document.createElement("h3");i.textContent=e;const d=document.createElement("h2");return d.textContent=n,c.appendChild(i),c.appendChild(d),o.appendChild(a),o.appendChild(c),o}const s=function(){const t=document.getElementById("tab-content");t.classList.add("grid-lay"),t.classList.remove("flex-lay"),t.textContent="",function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById("menu").classList.add("active")}(),[n("https://starwarsblog.starwars.com/wp-content/uploads/2018/07/ackbar-ice-cream-tall.jpg","acbar ice Cream","$10","acbar ice cream"),n("https://starwarsblog.starwars.com/wp-content/uploads/2019/06/corellian-coffee-tall.jpg","corellian coffee","$20","corellian coffee"),n("https://starwarsblog.starwars.com/wp-content/uploads/2019/03/darth-maul-quinoa-tall.jpg","darth maul quinoa","$10","darth maul quinoa"),n("https://starwarsblog.starwars.com/wp-content/uploads/2018/10/ewok-cookies-tall.jpg","ewok cookies","$12","ewok cookies"),n("https://starwarsblog.starwars.com/wp-content/uploads/2018/12/lemon-tart-tall.jpg","lemon tart","$15","lemon tart"),n("https://starwarsblog.starwars.com/wp-content/uploads/2018/03/porg-puffs-tall.jpg","porg puffs","$10","porg puffs"),n("https://starwarsblog.starwars.com/wp-content/uploads/2019/08/sith-trooper-float-tall-b.jpg","sith trooper root beer","$5","sith trooper root beer"),n("https://starwarsblog.starwars.com/wp-content/uploads/2019/06/vader-peanut-butter-blossoms-tall.jpg","vader peanut butter blossoms","$10","vader peanut butter blossoms")].forEach((e=>{t.appendChild(e)}))},o=function(){const t=document.getElementById("tab-content");t.classList.add("flex-lay"),t.classList.remove("grid-lay"),t.textContent="",function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById("contact").classList.add("active")}();const e=function(t,e){const n=document.createElement("section");n.classList.add("section");const s=document.createElement("h2");return s.classList.add("section-title"),s.textContent="Address",n.appendChild(s),["# +260 961 095 323","# +260 976 000 435","Lusaka zambia"].forEach((t=>{const e=document.createElement("p");e.classList.add("section-description"),e.textContent=t,n.appendChild(e)})),n}();t.appendChild(e)};(function(){const e=document.getElementById("content"),n=function(t,e){const n=document.createElement("header");n.setAttribute("id","header");const s=document.createElement("h1");return s.textContent="Flesh Foods",n.appendChild(s),n}();e.appendChild(n);const s=function(e){const n=document.createElement("nav");n.setAttribute("id","nav");const s=t("home","home"),o=t("menu","menu"),a=t("contact","contact");return n.appendChild(s),n.appendChild(o),n.appendChild(a),n}();e.appendChild(s);const o=function(t){const e=document.createElement("main");return e.setAttribute("id","tab-content"),e}();e.appendChild(o)})(),e(),function(){const t=document.getElementById("home"),n=document.getElementById("menu"),a=document.getElementById("contact");t.addEventListener("click",e),n.addEventListener("click",s),a.addEventListener("click",o)}()})();