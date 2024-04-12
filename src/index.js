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

  const speakers = new Swiper('.speakers__slider', {
    grabCursor:true,
    speed:350, 
    width: 278,
    spaceBetween:30,
    slideShadows:true,
    slidesPerView:1,
    centeredSlides : true,    
    loop: false,
    // momentumBounceRatio: 25,
    // momentumRatio: 15,
    // momentumVelocityRatio: 15,
    // autoplay: {
    //     enabled: false,
    //     delay: 1,
    //     reverseDirection: false,
    //     },
    
  })



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

document.querySelectorAll('a.header__nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href').substring(1); // Удаляем # из href
    const element = document.getElementById(href);
    const yCoord = element.getBoundingClientRect().top + window.pageYOffset - 120; // Добавляем отступ

    // Закрываем side-navbar перед перемещением к целевому элементу
    document.querySelector('.side-navbar').classList.remove('side-navbar-open');

    window.scrollTo({
      top: yCoord,
      left: 0,
      behavior: 'smooth'
    });
  });
});

  document.querySelector('.burger-menu').addEventListener('click', function () {
    document.querySelector('.side-navbar').classList.toggle('side-navbar-open');
  });