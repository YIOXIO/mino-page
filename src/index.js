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
    loop: true,
    speed: 2000,
    waitForTransition:true,
    autoplay: {
      enabled: true,
        delay: 1,
      reverseDirection: false,
        pauseOnMouseEnter: true,

    },
    breakpoints: {

        1200: {
            slidesPerView: 4,
            slidesOffsetBefore:300,

        },
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        576: {
          slidesPerView: 2,
          spaceBetween:20,
      },
        320: {
          slidesPerView: 1,
          width:300,
          spaceBetween: 0,
          autoplay:false,
        }

    },
    mousewheel: {
      forceNiceScroll: true,
      invert: false,
    },
});






// Якорные ссылки
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
// 

// JS для бургера
document.querySelector('.burger-menu').addEventListener('click', function () {
  document.querySelector('.side-navbar').classList.toggle('side-navbar-open');
});

const burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', function() {
  this.classList.toggle('active');
});
// __________




document.addEventListener('DOMContentLoaded', function() {
  var radioButtons = document.querySelectorAll('input[name="radio-708"]');
  var hiddenInput = document.querySelector('input[name="hidden-link"]');

  if (radioButtons && hiddenInput) {
      radioButtons.forEach(function(radio) {
          radio.addEventListener('change', function() {
              var value = this.value;
              switch (value) {
                  case 'Ректор':
                      hiddenInput.value = 'https://xn----8sbokcxee2ae3a.xn--p1ai/%d0%be%d0%bf%d1%80%d0%be%d1%81%d0%bd%d1%8b%d0%b8-%d0%bb%d0%b8%d1%81%d1%82/%d1%80%d0%b5%d0%ba%d1%82%d0%be%d1%80/';
                      break;
                  case 'Cтратегическое развитие*':
                      hiddenInput.value = 'https://xn----8sbokcxee2ae3a.xn--p1ai/%d0%be%d0%bf%d1%80%d0%be%d1%81%d0%bd%d1%8b%d0%b8-%d0%bb%d0%b8%d1%81%d1%82/%d1%81%d1%82%d1%80%d0%b0%d1%82/';
                      break;
                  case 'Финансово-экономическая деятельность*':
                      hiddenInput.value = 'https://xn----8sbokcxee2ae3a.xn--p1ai/%d0%be%d0%bf%d1%80%d0%be%d1%81%d0%bd%d1%8b%d0%b8-%d0%bb%d0%b8%d1%81%d1%82/%d1%84%d0%b8%d0%bd/';
                      break;
                  default:
                      hiddenInput.value = '';
                      break;
              }
          });
      });
  }
});


const popup = document.querySelector('.popup');
const buttonClosePopup = document.querySelector('.popup__close');

function openPopup(popupElement) {
    popupElement.classList.add('popup_is_active');
    popupElement.addEventListener('click', handleOverlayClosePopup);
    document.addEventListener('keydown', handleEscClosePopup);
}

function closePopup(popupElement) {
    popupElement.classList.remove('popup_is_active');
    popupElement.removeEventListener('click', handleOverlayClosePopup);
    document.removeEventListener('keydown', handleEscClosePopup);
}

function handleOverlayClosePopup(evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.currentTarget);
    }
}

function handleEscClosePopup(evt) {
    if (evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_is_active'));
    }
}

if(buttonClosePopup){
  buttonClosePopup.addEventListener('click', () => closePopup(popup));
}

document.addEventListener('wpcf7mailsent', function(event) {
  var successPopup = document.querySelector('.popup__success');
  openPopup(successPopup);
}, false);

document.addEventListener('wpcf7mailfailed', function(event) {
  var errorPopup = document.querySelector('.popup__error');
  openPopup(errorPopup);
}, false);
