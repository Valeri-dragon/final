(()=>{"use strict";(()=>{const e=document.documentElement.clientHeight;let t=document.querySelector(".up");t.style.display="none",window.addEventListener("scroll",(()=>{document.body.scrollTop>e||document.documentElement.scrollTop>e?t.style.display="block":t.style.display="none"}))})(),((e,t,l,s)=>{const o=document.querySelector(`.${e}`),c=document.querySelectorAll(`.${t}`);if(o&&c.length>0){let e=[];const t=document.createElement("ul");t.classList.add(l),c.forEach(((l,o)=>{const c=document.createElement("li");c.classList.add("dot"),e.push(t.appendChild(c)),0==o&&c.classList.add(s)})),o.append(t)}})("top-slider","item","slick-dots","slick-active"),((e,t,l="slide-active",s)=>{const o=document.querySelector(`.${e}`),c=document.querySelectorAll(`.${t}`);if(o&&c.length>0){let e,t=3500,n=0,a=document.querySelectorAll(".dot");const i=(e,t)=>{"slide-active"===e&&t.forEach(((e,l)=>{n===l?(e.style.transform="scale(1)",e.style.position="absolute",e.style.left=0,e.style.right=0,e.style.opacity=1,e.style.visibility="visible"):(e.style.opacity="",e.style.visibility="hidden",e.style.transform="scale(1.5)"),n>=t.length&&(n=0),n<0&&(n=t.length-1)}))},d=(e,t,l)=>{e[t].classList.remove(l)},r=(e,t,l)=>{e[t].classList.add(l)},m=()=>{d(c,n,l),a&&d(a,n,s),n++,n>=c.length&&(n=0),r(c,n,l),a&&r(a,n,s),i(l,c)},u=(t=1500)=>{e=setInterval(m,t)},y=()=>{clearInterval(e)};o.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot")&&(d(c,n,l),a&&d(a,n,s),e.target.classList.contains("dot")&&a.forEach(((t,l)=>{e.target===t&&(n=l)})),n>=c.length&&(n=0),n<0&&(n=c.length-1),r(c,n,l),a&&r(a,n,s),i(l,c))})),o.addEventListener("mouseenter",(e=>{e.target.matches(".dot")&&y()}),!0),o.addEventListener("mouseleave",(e=>{e.target.matches(".dot")&&u(t)}),!0),u(t)}})("top-slider","item","active","slick-active"),(()=>{const e=document.querySelector(".mobile-menu");document.addEventListener("click",(t=>{t.target.classList.contains("mob-menu-btn")&&e.classList.toggle("open"),t.target!==e&&!t.target.classList.contains("mob-menu-btn")&&e.classList.remove("open")}))})(),document.addEventListener("click",(e=>{(e.target.closest(".mobile-menu>ul>li>a")||e.target.closest(".top-menu>ul>li>a"))&&(e=>{const t=e.target.getAttribute("href").substr(1);((e,t)=>{e.preventDefault(),t.scrollIntoView({block:"start",behavior:"smooth"})})(e,document.getElementById(t))})(e),e.target.classList.contains("up")&&(e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})(e)})),(()=>{const e=document.querySelector(".modal-overlay"),t=document.querySelector(".modal-callback"),l=[e,t],s=()=>{l.forEach((e=>{e.style.display?(e.style.display="",document.body.style.overflow=""):(e.style.display="block",document.body.style.overflow="hidden")}))};document.addEventListener("click",(t=>{t.target.classList.contains("fancyboxModal")&&s(),t.target.closest(".modal-close")&&s(),t.target==e&&s()}))})()})();