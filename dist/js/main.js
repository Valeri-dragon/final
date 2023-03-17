/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_addDotSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addDotSlider */ \"./modules/addDotSlider.js\");\n/* harmony import */ var _modules_mobileMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/mobileMenu */ \"./modules/mobileMenu.js\");\n/* harmony import */ var _modules_arrowUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/arrowUp */ \"./modules/arrowUp.js\");\n/* harmony import */ var _modules_scrollSmooth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scrollSmooth */ \"./modules/scrollSmooth.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_sliderCarousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sliderCarousel */ \"./modules/sliderCarousel.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/accordeon */ \"./modules/accordeon.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_arrowUp__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n(0,_modules_addDotSlider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"top-slider\", \"item\", \"slick-dots\", \"slick-active\");\r\n//если отрисовываем dots, тогда в sliderModule обязателньо активынй класс слайда и активный класс dots\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"top-slider\", \"item\", \"active\", \"slick-active\");\r\n\r\n(0,_modules_mobileMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_scrollSmooth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\r\nconst options = {\r\n  main: \".services-elements\",\r\n  wrap: \".services-carousel\",\r\n  slidesToShow: 3,\r\n  infinity: true,\r\n  next: \".arrow-right\",\r\n  prev: \".arrow-left\",\r\n\r\n  responsive: [\r\n    {\r\n      breakpoint: 1024,\r\n      slideToShow: 3,\r\n    },\r\n    {\r\n      breakpoint: 768,\r\n      slideToShow: 2,\r\n    },\r\n    {\r\n      breakpoint: 576,\r\n      slideToShow: 1,\r\n    },\r\n  ],\r\n};\r\nconst carousel = new _modules_sliderCarousel__WEBPACK_IMPORTED_MODULE_6__[\"default\"](options);\r\ncarousel.init();\r\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"accordeon\", \"active\");\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"form-callback\");\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/accordeon.js":
/*!******************************!*\
  !*** ./modules/accordeon.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst accordeon = (accordeonBlock, activeClassAccordeon) => {\r\n  const block = document.querySelector(`.${accordeonBlock}`);\r\n  const blockItem = block.querySelectorAll(\".element\");\r\n\r\n  block.addEventListener(\"click\", (e) => {\r\n    blockItem.forEach((item) => {\r\n      item.classList.contains(activeClassAccordeon) &&\r\n        item.classList.remove(activeClassAccordeon);\r\n    });\r\n    e.target.closest(\".title\") &&\r\n      !e.target.classList.contains(activeClassAccordeon) &&\r\n      e.target.parentNode.classList.add(activeClassAccordeon);\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\r\n\n\n//# sourceURL=webpack:///./modules/accordeon.js?");

/***/ }),

/***/ "./modules/addDotSlider.js":
/*!*********************************!*\
  !*** ./modules/addDotSlider.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./modules/slider.js\");\n\r\nconst addDotSlider = (\r\n  sliderBoxClass,\r\n  slidesItemClass,\r\n  boxDots,\r\n  activeClassDot\r\n) => {\r\n  const sliderBlock = document.querySelector(`.${sliderBoxClass}`);\r\n  const slides = document.querySelectorAll(`.${slidesItemClass}`);\r\n\r\n  \r\n  //const activeClassDot = document.querySelectorAll(`.${activeClassDot}`);\r\n  if (sliderBlock && slides.length > 0) {\r\n   \r\n    let dots = [];\r\n     \r\n\r\n \r\n    const ul = document.createElement(\"ul\");\r\n    ul.classList.add(boxDots);\r\n    slides.forEach((item, index) => {\r\n      const li = document.createElement(\"li\");\r\n      li.classList.add(\"dot\");\r\n      dots.push(ul.appendChild(li));\r\n      if (index == 0) {\r\n        li.classList.add(activeClassDot);\r\n      }\r\n    });\r\n    sliderBlock.append(ul);\r\n  \r\n\r\n\r\n  } else {\r\n    return;\r\n  }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDotSlider);\n\n//# sourceURL=webpack:///./modules/addDotSlider.js?");

/***/ }),

/***/ "./modules/arrowUp.js":
/*!****************************!*\
  !*** ./modules/arrowUp.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst arrowUp = () => {\r\n  const clientHeight = document.documentElement.clientHeight;\r\n     let arrowUp = document.querySelector(\".up\");\r\n     arrowUp.style.display = \"none\";\r\n  window.addEventListener(\"scroll\", () => {\r\n \r\n    if (\r\n      document.body.scrollTop > clientHeight ||\r\n      document.documentElement.scrollTop > clientHeight\r\n    ) {\r\n      arrowUp.style.display = \"block\";\r\n    } else {\r\n      arrowUp.style.display = \"none\";\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrowUp);\n\n//# sourceURL=webpack:///./modules/arrowUp.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"error\": () => (/* binding */ error),\n/* harmony export */   \"removeError\": () => (/* binding */ removeError)\n/* harmony export */ });\nlet str;\r\n\r\nconst removeMessage = (elem) => {\r\n  setTimeout(() => {\r\n    elem.textContent = \"\";\r\n  }, 5000);\r\n};\r\n\r\nconst removeError = (e) => {\r\n  const span = document.querySelector(\".errorBlock\");\r\n  span.remove();\r\n  e.classList.remove(\"error\");\r\n  e.classList.add(\"success\");\r\n  e.style.border = `1px solid green`;\r\n};\r\n\r\nconst error = (e,str) => {\r\n  let span = document.createElement(\"span\");\r\n  span.style.display = \"block\";\r\n  span.classList.add = \"errorBlock\"\r\n  span.style.color = \"red\";\r\n  span.style.position = `absolute`;\r\n  span.style.bottom = `80px`;\r\n  span.style.right = `77px`;\r\n  span.style.padding = `5px`;\r\n  span.style.background = `#fff`;\r\n  span.textContent = str;\r\n  console.log(e)\r\n  e.target.classList.add(\"error\");\r\n  e.target.style.border = `1px solid red`;\r\n  e.before(span);\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/mobileMenu.js":
/*!*******************************!*\
  !*** ./modules/mobileMenu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mobileMenu = () => {\r\n  const menu = document.querySelector(\".mobile-menu\");\r\n  document.addEventListener(\"click\", (e) => {\r\n    e.target.classList.contains(\"mob-menu-btn\") &&\r\n      menu.classList.toggle(\"open\");\r\n    e.target !== menu &&\r\n      !e.target.classList.contains(\"mob-menu-btn\") &&\r\n      menu.classList.remove(\"open\");\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mobileMenu);\n\n//# sourceURL=webpack:///./modules/mobileMenu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modalOverlay = document.querySelector(\".modal-overlay\");\r\n  const modalContent = document.querySelector(\".modal-callback\");\r\n  const modal = [modalOverlay, modalContent];\r\n  const openModal = () => {\r\n    modal.forEach((item) => {\r\n      if (!item.style.display) {\r\n        item.style.display = \"block\";\r\n        document.body.style.overflow = \"hidden\";\r\n      } else {\r\n        item.style.display = \"\";\r\n        document.body.style.overflow = \"\";\r\n      }\r\n    });\r\n  };\r\n  document.addEventListener(\"click\", (e) => {\r\n    e.target.classList.contains(\"fancyboxModal\") && openModal();\r\n    e.target.closest(\".modal-close\") && openModal();\r\n    e.target == modalOverlay && openModal();\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scrollSmooth.js":
/*!*********************************!*\
  !*** ./modules/scrollSmooth.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrollSmooth = () => {\r\n  \r\n  const handleScroll = (e, elem) => {\r\n    e.preventDefault();\r\n    elem.scrollIntoView({\r\n      block: \"start\",\r\n      behavior: \"smooth\",\r\n    });\r\n  };\r\n\r\n  const scrollToSection = (e) => {\r\n    const targetHref = e.target.getAttribute(\"href\").substr(1);\r\n    const targetElem = document.getElementById(targetHref);\r\n    handleScroll(e, targetElem);\r\n  };\r\n\r\n  const scrollToTop = (e) => {\r\n    e.preventDefault();\r\n    window.scrollTo({\r\n      top: 0,\r\n      behavior: \"smooth\",\r\n    });\r\n  };\r\n  \r\n  document.addEventListener(\"click\", (e) => {\r\n    (e.target.closest(\".mobile-menu>ul>li>a\") ||\r\n      e.target.closest(\".top-menu>ul>li>a\")) &&\r\n      scrollToSection(e);\r\n       e.target.classList.contains(\"up\") && scrollToTop(e);\r\n  });\r\n   \r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollSmooth);\n\n//# sourceURL=webpack:///./modules/scrollSmooth.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation */ \"./modules/validation.js\");\n\r\nconst sendForm =(formId)=>{\r\nconst form = document.getElementById(formId)\r\nform.addEventListener(\"submit\", (e)=>{\r\n  e.preventDefault()\r\n  ;(0,_validation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(form)\r\n})\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderModule = (\r\n  sliderBoxClass,\r\n  slidesItemClass,\r\n  slidesActiveClass = \"slide-active\",\r\n  dotsActive\r\n) => {\r\n  const sliderBlock = document.querySelector(`.${sliderBoxClass}`);\r\n  const slides = document.querySelectorAll(`.${slidesItemClass}`);\r\n\r\n  if (sliderBlock && slides.length > 0) {\r\n    let timeInterval = 3500;\r\n    let currentSlide = 0;\r\n    let idInterval;\r\n    let dots = document.querySelectorAll(\".dot\");\r\n\r\n    const slideActiveShowClass = (slidesActiveClass, elems) => {\r\n      if (slidesActiveClass === \"slide-active\") {\r\n        elems.forEach((item, ind) => {\r\n          if (currentSlide === ind) {\r\n            item.style.transform = `scale(1)`;\r\n            item.style.position = \"absolute\";\r\n            item.style.left = 0;\r\n            item.style.right = 0;\r\n            item.style.opacity = 1;\r\n            item.style.visibility = \"visible\";\r\n          } else {\r\n            item.style.opacity = \"\";\r\n            item.style.visibility = \"hidden\";\r\n            item.style.transform = `scale(1.5)`;\r\n          }\r\n          if (currentSlide >= elems.length) {\r\n            currentSlide = 0;\r\n          }\r\n\r\n          if (currentSlide < 0) {\r\n            currentSlide = elems.length - 1;\r\n          }\r\n        });\r\n      }\r\n    };\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n      elems[index].classList.remove(strClass);\r\n    };\r\n\r\n    const nextSlide = (elems, index, strClass) => {\r\n      elems[index].classList.add(strClass);\r\n    };\r\n    const autoSlide = () => {\r\n      prevSlide(slides, currentSlide, slidesActiveClass);\r\n      if (dotsActive) {\r\n        prevSlide(dots, currentSlide, dotsActive);\r\n      } \r\n      currentSlide++;\r\n\r\n      if (currentSlide >= slides.length) {\r\n        currentSlide = 0;\r\n      }\r\n      nextSlide(slides, currentSlide, slidesActiveClass);\r\n      if (dotsActive) {\r\n        nextSlide(dots, currentSlide, dotsActive);\r\n      } \r\n      slideActiveShowClass(slidesActiveClass, slides);\r\n    };\r\n    const startSlide = (timer = 1500) => {\r\n      idInterval = setInterval(autoSlide, timer);\r\n    };\r\n    const stopSlide = () => {\r\n      clearInterval(idInterval);\r\n    };\r\n\r\n    sliderBlock.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      if (!e.target.matches(\".dot\")) {\r\n        return;\r\n      }\r\n      prevSlide(slides, currentSlide, slidesActiveClass);\r\n\r\n     if (dotsActive) {\r\n       prevSlide(dots, currentSlide, dotsActive);\r\n     } \r\n\r\n      if (e.target.classList.contains(\"dot\")) {\r\n        dots.forEach((dot, index) => {\r\n          if (e.target === dot) {\r\n            currentSlide = index;\r\n          }\r\n        });\r\n      } \r\n\r\n      if (currentSlide >= slides.length) {\r\n        currentSlide = 0;\r\n      }\r\n\r\n      if (currentSlide < 0) {\r\n        currentSlide = slides.length - 1;\r\n      }\r\n      nextSlide(slides, currentSlide, slidesActiveClass);\r\n     if (dotsActive) {\r\n       nextSlide(dots, currentSlide, dotsActive);\r\n     }\r\n      slideActiveShowClass(slidesActiveClass, slides);\r\n    });\r\n\r\n    sliderBlock.addEventListener(\r\n      \"mouseenter\",\r\n      (e) => {\r\n        if (e.target.matches(\".dot\")) {\r\n          stopSlide();\r\n        } \r\n      },\r\n      true\r\n    );\r\n\r\n    sliderBlock.addEventListener(\r\n      \"mouseleave\",\r\n      (e) => {\r\n        if (e.target.matches(\".dot\")) {\r\n          startSlide(timeInterval);\r\n        } \r\n      },\r\n      true\r\n    );\r\n\r\n \r\n    startSlide(timeInterval);\r\n  } else {\r\n    return;\r\n  }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderModule);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/sliderCarousel.js":
/*!***********************************!*\
  !*** ./modules/sliderCarousel.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass SliderCarousel {\r\n  constructor({\r\n    main,\r\n    wrap,\r\n    next,\r\n    prev,\r\n    infinity = false,\r\n    position = 0,\r\n    slidesToShow = 3,\r\n    responsive = [],\r\n  }) {\r\n    if (!main || !wrap) {\r\n      console.warn('slider-carusel: Необходимо 2 свойства, \"main\" и \"wrap\"!');\r\n    }\r\n    this.main = document.querySelector(main);\r\n    this.wrap = document.querySelector(wrap);\r\n    this.slides = document.querySelector(wrap).children;\r\n    this.next = document.querySelector(next);\r\n    this.prev = document.querySelector(prev);\r\n    this.slidesToShow = slidesToShow;\r\n    this.options = {\r\n      position,\r\n      infinity,\r\n      widthSlide: Math.floor(100 / this.slidesToShow),\r\n    };\r\n    this.responsive = responsive;\r\n  }\r\n\r\n  init() {\r\n    this.addSlideClass();\r\n    this.addStyle();\r\n    if (this.prev && this.next) {\r\n      this.controlSlider();\r\n    } else {\r\n      this.addArrow();\r\n      this.controlSlider();\r\n    }\r\n    if (this.responsive) {\r\n      this.responseInit();\r\n    }\r\n  }\r\n\r\n  addSlideClass() {\r\n    this.main.classList.add(\"temp-slider\");\r\n    this.wrap.classList.add(\"temp-slider__wrap\");\r\n    for (const item of this.slides) {\r\n      item.classList.add(\"temp-slider__item\");\r\n    }\r\n  }\r\n\r\n  addStyle() {\r\n    let style = document.getElementById(\"sliderCarusel-style\");\r\n    if (!style) {\r\n      style = document.createElement(\"style\");\r\n      style.id = \"sliderCarusel-style\";\r\n    }\r\n\r\n    document.head.appendChild(style);\r\n    style.textContent = `\r\n      .temp-slider {\r\n        overflow: hidden !important;\r\n      }\r\n      .temp-slider__wrap {\r\n        display: flex !important;\r\n        transition: transform 0.5s !important;\r\n        will-change: transform !important;\r\n      }\r\n      .temp-slider__item {\r\n        flex: 0 0 ${this.options.widthSlide}% !important;\r\n        margin: auto 0 !important;\r\n      }\r\n    `;\r\n  }\r\n\r\n  controlSlider() {\r\n    this.prev.addEventListener(\"click\", this.prevSlider.bind(this));\r\n    this.next.addEventListener(\"click\", this.nextSlider.bind(this));\r\n  }\r\n\r\n  prevSlider() {\r\n    if (this.options.infinity || this.options.position > 0) {\r\n      --this.options.position;\r\n      if (this.options.position < 0) {\r\n        this.options.position = this.slides.length - this.slidesToShow;\r\n      }\r\n      this.wrap.style.transform = `translateX(-${\r\n        this.options.position * this.options.widthSlide\r\n      }%)`;\r\n    }\r\n  }\r\n\r\n  nextSlider() {\r\n    if (\r\n      this.options.infinity ||\r\n      this.options.position < this.slides.length - this.slidesToShow\r\n    ) {\r\n      ++this.options.position;\r\n      if (this.options.position > this.slides.length - this.slidesToShow) {\r\n        this.options.position = 0;\r\n      }\r\n      this.wrap.style.transform = `translateX(-${\r\n        this.options.position * this.options.widthSlide\r\n      }%)`;\r\n    }\r\n  }\r\n\r\n  addArrow() {\r\n    this.prev = document.createElement(\"button\");\r\n    this.next = document.createElement(\"button\");\r\n\r\n    this.prev.className = \"temp-slider__prev\";\r\n    this.next.className = \"temp-slider__next\";\r\n\r\n    this.main.appendChild(this.prev);\r\n    this.main.appendChild(this.next);\r\n\r\n    const style = document.createElement(\"style\");\r\n    style.textContent = `\r\n      .temp-slider__prev,\r\n      .temp-slider__next {\r\n        position: relative;\r\n        margin: 0 10px;\r\n        border: 20px solid transparent;\r\n        background: transparent;\r\n      }\r\n      .temp-slider__next {\r\n        border-left-color: #19b5fe;\r\n      }\r\n      .temp-slider__prev {\r\n        border-right-color: #19b5fe;\r\n      }\r\n      .temp-slider__prev: hover,\r\n      .temp-slider__next: hover,\r\n      .temp-slider__prev: focus,\r\n      .temp-slider__next: focus {\r\n        background: transparent;\r\n        outline: transparent;\r\n      }\r\n    `;\r\n    document.head.appendChild(style);\r\n  }\r\n\r\n  responseInit() {\r\n    const slidesToShowDefault = this.slidesToShow;\r\n    const allResponse = this.responsive.map((item) => item.breakpoint);\r\n    const maxResponse = Math.max(...allResponse);\r\n\r\n    const checkResponse = () => {\r\n      const widthWindow = document.documentElement.clientWidth;\r\n      if (widthWindow < maxResponse) {\r\n        for (let i = 0; i < allResponse.length; i++) {\r\n          if (widthWindow < allResponse[i]) {\r\n            this.slidesToShow = this.responsive[i].slideToShow;\r\n            this.options.widthSlide = Math.floor(100 / this.slidesToShow);\r\n            this.addStyle();\r\n          }\r\n        }\r\n      } else {\r\n        this.slidesToShow = slidesToShowDefault;\r\n        this.options.widthSlide = Math.floor(100 / this.slidesToShow);\r\n        this.addStyle();\r\n      }\r\n    };\r\n\r\n    checkResponse();\r\n    window.addEventListener(\"resize\", checkResponse);\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderCarousel);\r\n\n\n//# sourceURL=webpack:///./modules/sliderCarousel.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\nconst validation=(form)=>{\r\nconst formData = new FormData(form);\r\nconst formBody = {};\r\n\r\n\r\nlet str\r\nconsole.log(formData)\r\nformData.forEach((val, key) => {\r\n console.log(val)\r\n  if (val !== \"\") {\r\n    formBody[key] = val;\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.removeError)(form)\r\n  }else{    str = \"Заполните поля\";\r\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.error)(formData[key], str);}\r\n})\r\n\r\n  form.addEventListener(\"input\", function (event) {\r\n  if (email.validity.typeMismatch) {\r\n    email.setCustomValidity(\"I am expecting an e-mail address!\");\r\n  } else {\r\n    email.setCustomValidity(\"\");\r\n  }\r\n});\r\n //console.log(formBody);\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tvalidation);\n\n//# sourceURL=webpack:///./modules/validation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;