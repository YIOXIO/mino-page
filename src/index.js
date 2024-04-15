import './index.css'




import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.sample-slider', {
    loop: false,
    grabCursor:true,
    speed:350, 
    slideShadows:true,
    slidesPerView: 1,
    centeredSlides : true,    
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
    breakpoints:{
        320:{
            width:400,
        },
        1024:{
            width: 584,

        },
    },
    mousewheel: {
      forceNiceScroll: true,
      invert: false,
    },
  
  })



  var speakers = new Swiper('.speakers__slider', {
    grabCursor:true,
    spaceBetween: 20,
    loop: true,
    speed: 2000,
    autoplay: {
      enabled: true,
        delay: 1,
      reverseDirection: false,
        pauseOnMouseEnter: true,

    },
    breakpoints: {

        1200: {
            slidesPerView: 4,        
        },
        992: {
            slidesPerView: 3,
        },
        768: {

            slidesPerView: 2,
        },
        576: {
          slidesPerView: 2,
      },
    },
    mousewheel: {
      forceNiceScroll: true,
      invert: false,
    },
});
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var button = document.querySelector('.primary-button_fixed');
        if (button) {
            button.style.display = 'block';
        }
    }, 3500);
});

const animatedElements = document.querySelectorAll('.mon-animated');

const observerFade = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
});



animatedElements.forEach(element => {
  observerFade.observe(element);
});

const slideinElements = document.querySelectorAll('.mon-slidein');

const observerSlideIn = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slidein');
            observer.unobserve(entry.target);
        }
    });
});

slideinElements.forEach(element => {
  observerSlideIn.observe(element);
});


document.querySelectorAll('a.header__nav-link_anchor').forEach(link => {
  link.addEventListener('click', function(e) {
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

document.querySelector('.burger-menu').addEventListener('click', function () {
  document.querySelector('.side-navbar').classList.toggle('side-navbar-open');
});