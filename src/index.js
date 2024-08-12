import './index.css'

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import SlimSelect from 'slim-select'


const swiper = new Swiper('.sample-slider', {
  loop: false,
  grabCursor: true,
  speed: 350,
  slideShadows: true,
  slidesPerView: 1,
  centeredSlides: true,
  parallax: true,
  width: 584,
  effect: "creative",
  creativeEffect: {
    limitProgress: 4,
    prev: {
      translate: [-65, 0, -220],
      rotate: [0, 0, 0],
    },
    next: {
      translate: ['105%', 0, 0],
      rotate: [0, 0, 0],
    },
  },
  breakpoints: {
    320: {
      width: 400,
    },
    1024: {
      width: 584,

    },
  },
  mousewheel: {
    forceNiceScroll: true,
    invert: false,
  },

})


let speakers = new Swiper('.speakers__slider', {
  grabCursor: true,
  loop: true,
  speed: 2000,
  waitForTransition: true,
  autoplay: {
    enabled: true,
    delay: 1,
    reverseDirection: false,
    pauseOnMouseEnter: true,

  },
  breakpoints: {

    1200: {
      slidesPerView: 4,
      slidesOffsetBefore: 300,

    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      width: 300,
      spaceBetween: 0,
      autoplay: false,
    }

  },
  mousewheel: {
    forceNiceScroll: true,
    invert: false,
  },
});




// Якорные ссылки
document.querySelectorAll('a.header__nav-link_anchor').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const targetId = href.split('#')[1];
    let targetUrl = '';
    const homeUrl = 'http://xn----8sbokcxee2ae3a.xn--p1ai';

    if (targetId && window.location.pathname === homeUrl) {
      targetUrl = href;
    } else if (targetId) {
      targetUrl = homeUrl + href;
    } else {
      targetUrl = href;
    }

    const element = document.getElementById(targetId);
    if (element) {

      const yCoord = element.getBoundingClientRect().top + window.scrollY - 150;

      document.querySelector('.side-navbar').classList.remove('side-navbar-open');

      window.scrollTo({
        top: yCoord,
        left: 0,
        behavior: 'smooth'
      });
    } else {

      window.location.href = targetUrl;
    }
  });
});
// 

// JS для бургера
document.querySelector('.burger-menu').addEventListener('click', function () {
  document.querySelector('.side-navbar').classList.toggle('side-navbar-open');
});

const burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', function () {
  this.classList.toggle('active');
});
// __________



document.addEventListener('DOMContentLoaded', function() {
  const dropdownButtons = document.querySelectorAll('.header__dropdown-button');
  const dropdownMenus = document.querySelectorAll('.dropdown-content');

  function toggleDropdown(menu) {
    menu.classList.toggle('active');
  }

  dropdownButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
      toggleDropdown(dropdownMenus[index]);
      button.classList.toggle('header__dropdown-button_active');
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      dropdownMenus.forEach(menu => {
        menu.classList.remove('active');
      });
      dropdownButtons.forEach(button => {
        button.classList.remove('header__dropdown-button_active');
      });
    }
  });

  document.addEventListener('click', function (event) {
    dropdownButtons.forEach((button, index) => {
      if (!button.contains(event.target)) {
        dropdownMenus[index].classList.remove('active');
        button.classList.remove('header__dropdown-button_active');
      }
    });
  });
});

new SlimSelect({
  select: '#finSelect',
  settings: {
    searchText: 'Ничего не найдено',
    searchPlaceholder: 'Поиск...',
  }
});
new SlimSelect({
  select: '#foivSelect',
  settings: {
    searchText: 'Ничего не найдено',
    searchPlaceholder: 'Поиск...',
  }
});
new SlimSelect({
  select: '#dutySelect',
  settings: {
    showSearch: false,
  }
});

