/////////////////   CHANGE BACKGROUND HEADER   ///////////////////
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-heeader to the header tag
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);

/////////////////   SWIPER PRODUCTS   ///////////////////
let swiperProducts = new Swiper(".products_container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidePerView: "auto",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      spaceBetween: 72,
    },
  },
});

/////////////////   SCROLL SECTIONS ACTIVE LINK   ///////////////////

/////////////////   SHOW SCROLL UP   ///////////////////

/////////////////   DARK LIGHT THEME   ///////////////////

/////////////////   SCROLL REVEAL ANIMATION   ///////////////////
