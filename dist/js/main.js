(()=>{"use strict";const t=t=>{setTimeout((()=>{t.textContent=""}),5e3)};let e=document.createElement("span");e.classList.add("addError"),e.textContent="";const s=(t,s)=>{const o=t.parentElement;o.classList.remove("success"),o.classList.add("error"),e.textContent=s,o.after(e)},o=t=>{const s=t.parentElement;s.classList.remove("error"),s.classList.add("success"),e.textContent="",e.remove()};let i;const n=t=>{t.value.length<2&&t.value.length>0&&(i="Имя не может быть меньше 2 букв",s(t,i))},l=t=>{const e=t.target;var l;e.matches("#phone")&&(/^((8|\+375|\+7)[\- ]?)?\(?\d{2,3}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/.test((l=e).value)?o(l):(i="Номер должен начинаться с +7, 8 или +375",l.value=l.value.replace(/[^\+\(\)\-_\d]/gi,""),s(l,i))),"fio"===e.name&&((t=>{/[а-яё]+/gi.test(t.value.trim())?(t.value=t.value.replace(/[a-z\s\d]+/gi,""),o(t)):(i="Можно использовать кириллицу, пробел или дефис",s(t,i),t.value=t.value.replace(/[a-z\s\d]+/gi,""))})(e),n(e))};(()=>{const t=document.documentElement.clientHeight;let e=document.querySelector(".up");e.style.display="none",window.addEventListener("scroll",(()=>{document.body.scrollTop>t||document.documentElement.scrollTop>t?e.style.display="block":e.style.display="none"}))})(),((t,e,s,o)=>{const i=document.querySelector(`.${t}`),n=document.querySelectorAll(`.${e}`);if(i&&n.length>0){let t=[];const e=document.createElement("ul");e.classList.add(s),n.forEach(((s,i)=>{const n=document.createElement("li");n.classList.add("dot"),t.push(e.appendChild(n)),0==i&&n.classList.add(o)})),i.append(e)}})("top-slider","item","slick-dots","slick-active"),((t,e,s="slide-active",o)=>{const i=document.querySelector(`.${t}`),n=document.querySelectorAll(`.${e}`);if(i&&n.length>0){let t,e=3500,l=0,r=document.querySelectorAll(".dot");const a=(t,e)=>{"slide-active"===t&&e.forEach(((t,s)=>{l===s?(t.style.transform="scale(1)",t.style.position="absolute",t.style.left=0,t.style.right=0,t.style.opacity=1,t.style.visibility="visible"):(t.style.opacity="",t.style.visibility="hidden",t.style.transform="scale(1.5)"),l>=e.length&&(l=0),l<0&&(l=e.length-1)}))},d=(t,e,s)=>{t[e].classList.remove(s)},c=(t,e,s)=>{t[e].classList.add(s)},h=()=>{d(n,l,s),o&&d(r,l,o),l++,l>=n.length&&(l=0),c(n,l,s),o&&c(r,l,o),a(s,n)},p=(e=1500)=>{t=setInterval(h,e)},m=()=>{clearInterval(t)};i.addEventListener("click",(t=>{t.preventDefault(),t.target.matches(".dot")&&(d(n,l,s),o&&d(r,l,o),t.target.classList.contains("dot")&&r.forEach(((e,s)=>{t.target===e&&(l=s)})),l>=n.length&&(l=0),l<0&&(l=n.length-1),c(n,l,s),o&&c(r,l,o),a(s,n))})),i.addEventListener("mouseenter",(t=>{t.target.matches(".dot")&&m()}),!0),i.addEventListener("mouseleave",(t=>{t.target.matches(".dot")&&p(e)}),!0),p(e)}})("top-slider","item","active","slick-active"),(()=>{const t=document.querySelector(".mobile-menu");document.addEventListener("click",(e=>{e.target.classList.contains("mob-menu-btn")&&t.classList.toggle("open"),e.target!==t&&!e.target.classList.contains("mob-menu-btn")&&t.classList.remove("open")}))})(),document.addEventListener("click",(t=>{(t.target.closest(".mobile-menu>ul>li>a")||t.target.closest(".top-menu>ul>li>a"))&&(t=>{const e=t.target.getAttribute("href").substr(1);((t,e)=>{t.preventDefault(),e.scrollIntoView({block:"start",behavior:"smooth"})})(t,document.getElementById(e))})(t),t.target.classList.contains("up")&&(t=>{t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})(t)})),(()=>{const t=document.querySelector(".modal-overlay"),e=document.querySelector(".modal-callback"),s=document.querySelectorAll(".fix-block"),o=[t,e];let i=window.innerWidth-document.body.offsetWidth+"px";const n=()=>{o.forEach((t=>{t.style.display?(t.style.display="",document.body.style.overflow="",s.forEach((t=>t.style.paddingRight="")),document.body.style.paddingRight=""):(t.style.display="block",document.body.style.overflow="hidden",s.forEach((t=>t.style.paddingRight=i)),document.body.style.paddingRight=i)}))};document.addEventListener("click",(e=>{e.target.classList.contains("fancyboxModal")&&n(),e.target.closest(".modal-close")&&n(),e.target==t&&n()}))})(),new class{constructor({main:t,wrap:e,next:s,prev:o,infinity:i=!1,position:n=0,slidesToShow:l=3,responsive:r=[]}){t&&e||console.warn('slider-carusel: Необходимо 2 свойства, "main" и "wrap"!'),this.main=document.querySelector(t),this.wrap=document.querySelector(e),this.slides=document.querySelector(e).children,this.next=document.querySelector(s),this.prev=document.querySelector(o),this.slidesToShow=l,this.options={position:n,infinity:i,widthSlide:Math.floor(100/this.slidesToShow)},this.responsive=r}init(){this.addSlideClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}addSlideClass(){this.main.classList.add("temp-slider"),this.wrap.classList.add("temp-slider__wrap");for(const t of this.slides)t.classList.add("temp-slider__item")}addStyle(){let t=document.getElementById("sliderCarusel-style");t||(t=document.createElement("style"),t.id="sliderCarusel-style"),document.head.appendChild(t),t.textContent=`\n      .temp-slider {\n        overflow: hidden !important;\n      }\n      .temp-slider__wrap {\n        display: flex !important;\n        transition: transform 0.5s !important;\n        will-change: transform !important;\n      }\n      .temp-slider__item {\n        flex: 0 0 ${this.options.widthSlide}% !important;\n        margin: auto 0 !important;\n      }\n    `}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}prevSlider(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}nextSlider(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}addArrow(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="temp-slider__prev",this.next.className="temp-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);const t=document.createElement("style");t.textContent="\n      .temp-slider__prev,\n      .temp-slider__next {\n        position: relative;\n        margin: 0 10px;\n        border: 20px solid transparent;\n        background: transparent;\n      }\n      .temp-slider__next {\n        border-left-color: #19b5fe;\n      }\n      .temp-slider__prev {\n        border-right-color: #19b5fe;\n      }\n      .temp-slider__prev: hover,\n      .temp-slider__next: hover,\n      .temp-slider__prev: focus,\n      .temp-slider__next: focus {\n        background: transparent;\n        outline: transparent;\n      }\n    ",document.head.appendChild(t)}responseInit(){const t=this.slidesToShow,e=this.responsive.map((t=>t.breakpoint)),s=Math.max(...e),o=()=>{const o=document.documentElement.clientWidth;if(o<s)for(let t=0;t<e.length;t++)o<e[t]&&(this.slidesToShow=this.responsive[t].slideToShow,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle());else this.slidesToShow=t,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle()};o(),window.addEventListener("resize",o)}}({main:".services-elements",wrap:".services-carousel",slidesToShow:3,infinity:!0,next:".arrow-right",prev:".arrow-left",responsive:[{breakpoint:1024,slideToShow:3},{breakpoint:768,slideToShow:2},{breakpoint:576,slideToShow:1}]}).init(),((t,e)=>{const s=document.querySelector(`.${t}`),o=s.querySelectorAll(".element");s.addEventListener("click",(t=>{o.forEach((t=>{t.classList.contains(e)&&t.classList.remove(e)})),t.target.closest(".title")&&!t.target.classList.contains(e)&&t.target.parentNode.classList.add(e)}))})("accordeon","active"),(e=>{const i=document.getElementById(e),r=document.createElement("div");let a;try{if(!i)throw new Error("Верните форму на место");(t=>{t.addEventListener("input",(t=>{l(t)}))})(i),i.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=i.querySelectorAll(".form-group"),l=i.querySelectorAll('input[type="text"]'),d=document.getElementById("username"),c=new FormData(i),h={};var p;r.textContent="Загрузка...",i.append(r),c.forEach(((t,e)=>{""!==t?(h[e]=t,o(i.elements[e])):(a="Заполните поля",s(i.elements[e],"Заполните поля"))})),n(d),(e=>{let s=!0;return e.forEach((e=>{e.classList.contains("error")&&(s=!1,r.textContent="Введите данные",t(r))})),s})(e)&&(p=h,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(p),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((t=>t.json()))).then((e=>{r.textContent="Спасибо! Наш менеджер с вами свяжется.",t(r),l.forEach((t=>{t.value="",t.style.border="",t.classList.remove("success")})),i.closest(".modal-callback")&&setTimeout((()=>{i.closest(".modal-callback").style.display="",document.querySelector(".modal-overlay").style.display=""}),2500)})).catch((e=>{r.textContent="Ошибка... "+e,t(r)}))})()}))}catch(t){console.log(t.message)}})("form-callback")})();