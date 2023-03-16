class SliderCarousel {
  constructor({
    main,
    wrap,
    next,
    prev,
    infinity = false,
    position = 0,
    slidesToShow = 3,
    responsive = [],
  }) {
    if (!main || !wrap) {
      console.warn('slider-carusel: Необходимо 2 свойства, "main" и "wrap"!');
    }
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slidesToShow = slidesToShow;
    this.options = {
      position,
      infinity,
      widthSlide: Math.floor(100 / this.slidesToShow),
    };
    this.responsive = responsive;
  }

  init() {
    this.addSlideClass();
    this.addStyle();
    if (this.prev && this.next) {
      this.controlSlider();
    } else {
      this.addArrow();
      this.controlSlider();
    }
    if (this.responsive) {
      this.responseInit();
    }
  }

  addSlideClass() {
    this.main.classList.add("temp-slider");
    this.wrap.classList.add("temp-slider__wrap");
    for (const item of this.slides) {
      item.classList.add("temp-slider__item");
    }
  }

  addStyle() {
    let style = document.getElementById("sliderCarusel-style");
    if (!style) {
      style = document.createElement("style");
      style.id = "sliderCarusel-style";
    }

    document.head.appendChild(style);
    style.textContent = `
      .temp-slider {
        overflow: hidden !important;
      }
      .temp-slider__wrap {
        display: flex !important;
        transition: transform 0.5s !important;
        will-change: transform !important;
      }
      .temp-slider__item {
        flex: 0 0 ${this.options.widthSlide}% !important;
        margin: auto 0 !important;
      }
    `;
  }

  controlSlider() {
    this.prev.addEventListener("click", this.prevSlider.bind(this));
    this.next.addEventListener("click", this.nextSlider.bind(this));
  }

  prevSlider() {
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position;
      if (this.options.position < 0) {
        this.options.position = this.slides.length - this.slidesToShow;
      }
      this.wrap.style.transform = `translateX(-${
        this.options.position * this.options.widthSlide
      }%)`;
    }
  }

  nextSlider() {
    if (
      this.options.infinity ||
      this.options.position < this.slides.length - this.slidesToShow
    ) {
      ++this.options.position;
      if (this.options.position > this.slides.length - this.slidesToShow) {
        this.options.position = 0;
      }
      this.wrap.style.transform = `translateX(-${
        this.options.position * this.options.widthSlide
      }%)`;
    }
  }

  addArrow() {
    this.prev = document.createElement("button");
    this.next = document.createElement("button");

    this.prev.className = "temp-slider__prev";
    this.next.className = "temp-slider__next";

    this.main.appendChild(this.prev);
    this.main.appendChild(this.next);

    const style = document.createElement("style");
    style.textContent = `
      .temp-slider__prev,
      .temp-slider__next {
        position: relative;
        margin: 0 10px;
        border: 20px solid transparent;
        background: transparent;
      }
      .temp-slider__next {
        border-left-color: #19b5fe;
      }
      .temp-slider__prev {
        border-right-color: #19b5fe;
      }
      .temp-slider__prev: hover,
      .temp-slider__next: hover,
      .temp-slider__prev: focus,
      .temp-slider__next: focus {
        background: transparent;
        outline: transparent;
      }
    `;
    document.head.appendChild(style);
  }

  responseInit() {
    const slidesToShowDefault = this.slidesToShow;
    const allResponse = this.responsive.map((item) => item.breakpoint);
    const maxResponse = Math.max(...allResponse);

    const checkResponse = () => {
      const widthWindow = document.documentElement.clientWidth;
      if (widthWindow < maxResponse) {
        for (let i = 0; i < allResponse.length; i++) {
          if (widthWindow < allResponse[i]) {
            this.slidesToShow = this.responsive[i].slideToShow;
            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
            this.addStyle();
          }
        }
      } else {
        this.slidesToShow = slidesToShowDefault;
        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
        this.addStyle();
      }
    };

    checkResponse();
    window.addEventListener("resize", checkResponse);
  }
}
export default SliderCarousel;
