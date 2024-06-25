// var messages = {

//   'Ректор': `Просим Вас до 05.07.2024 г. заполнить опросный лист для ректора, пройдя по ссылке.
  
//     Обращаем внимание, что результаты опроса не предназначены для оценки эффективности и качества работы вуза в целом, его отдельных служб или сотрудников.

//     Опрос направлен исключительно на изучение возможных типов коммуникации в управленческих командах университетов. 

//     При заполнении опросного листа рекомендуем опираться только на собственный опыт и знания. 

//     Результаты опроса будут использованы в рамках работы проектных групп на стратегической сессии.   

//     Также обращаем внимание, что проведенный опрос будет иметь практическую ценность для управленческой команды университета только в том случае, если каждый участник заполнит опросный лист самостоятельно и независимо от других участников.   

//     Спасибо за Ваше участие и вовлеченность! 
//   `,
  
//     'Проректор, отвечающий за вопросы стратегического развития*': `
  
//     В рамках опроса Вам предлагается заполнить опросный лист для проректора по развитию/руководителя стратегической службы.  

//     Обращаем внимание, что результаты опроса не предназначены для оценки эффективности и качества работы вуза в целом, его отдельных служб или сотрудников.  

//     Опрос направлен исключительно на изучение возможных типов коммуникации в управленческих командах университетов. 

//     При заполнении опросного листа рекомендуем опираться только на собственный опыт и знания. 

//     Результаты опроса будут использованы в рамках работы проектных групп на стратегической сессии, а также представлены ректору университета.   
    
//     Также обращаем внимание, что проведенный опрос будет иметь практическую ценность для управленческой команды университета только в том случае, если каждый участник заполнит опросный лист самостоятельно и независимо от других участников.   

//     Спасибо за ваше участие и вовлеченность! 
//     `,
  
//     'Проректор, отвечающий за финансово-экономическую деятельность*': `

//     Просим Вас до 05.07.2024 г. заполнить 2 разных опросных листа:  
//     - опросный лист для проректора по экономике/руководителя финансовой службы; 
//     - опросный лист по финансовым показателям университета. 
  
//     Обращаем внимание, что результаты опроса не предназначены для оценки эффективности и качества работы вуза в целом, его отдельных служб или сотрудников.  
  
//     Опрос направлен исключительно на изучение возможных типов коммуникации в управленческих командах университетов. 
  
//     При заполнении опросного листа для проректора по экономике/руководителя финансовой службы рекомендуем опираться только на собственный опыт и знания. 
  
//     Результаты опроса будут использованы в рамках работы проектных групп на стратегической сессии, а также представлены ректору университета.  
  
//     В опросном листе по финансовым показателям университета данные необходимо заполнить в соответствии с официальными формами отчетности. Опросный лист может быть передан иному ответственному лицу для заполнения. 
  
//     Также обращаем внимание, что проведенный опрос будет иметь практическую ценность для управленческой команды университета только в том случае, если каждый участник заполнит опросный лист самостоятельно и независимо от других участников.   
  
//     Спасибо за Ваше участие и вовлеченность! `,
//   }
  
  


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


var speakers = new Swiper('.speakers__slider', {
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


// Динамическое содержание письма

// document.addEventListener('DOMContentLoaded', function () {
//   var radioButtons = document.querySelectorAll('input[name="radio-708"]');
//   var hiddenInput = document.querySelector('input[name="hidden-link"]');
//   var hiddenInput2 = document.querySelector('input[name="hidden-link2"]');
//   var mailBody = document.querySelector('input[name="hidden-mailBody"]');

//   if (radioButtons && hiddenInput) {
//     radioButtons.forEach(function (radio) {
//       radio.addEventListener('change', function () {
//         var value = this.value;
//         switch (value) {
//           case 'Ректор':
//             mailBody.value = messages['Ректор'];
//             hiddenInput.value = `Ссылка на опросный лист:
//              https://forms.yandex.ru/cloud/662d12c4eb6146f9c06f47e7/`;
//             hiddenInput2.value = ''
//             break;
//           case 'Проректор, отвечающий за вопросы стратегического развития*':
//             mailBody.value = messages['Проректор, отвечающий за вопросы стратегического развития*'];
//             hiddenInput.value = `Ссылка на опросный лист: 
//             https://forms.yandex.ru/cloud/6638b6df068ff0179ca71bf2/`;
//             hiddenInput2.value = ''
//             break;
//           case 'Проректор, отвечающий за финансово-экономическую деятельность*':
//             mailBody.value =  messages['Проректор, отвечающий за финансово-экономическую деятельность*'];
//             hiddenInput.value = 'Ссылка на опросный лист для проректора по экономике/руководителя финансовой службы: https://forms.yandex.ru/cloud/6638c0f290fa7b1cc8c93bb4/ ';
//             hiddenInput2.value = 'Ссылка на опросный лист по финансовым показателям: https://forms.yandex.ru/u/662cc5102530c2f2a8619f27/';
//             break;
//           default:
//             hiddenInput.value = `Ссылка на опросный лист:
//             https://forms.yandex.ru/cloud/662d12c4eb6146f9c06f47e7/`;
//             mailBody.value = messages['Ректор']
//             break;
//         }
//       });
//     });
//   }
// });


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

if (buttonClosePopup) {
  buttonClosePopup.addEventListener('click', () => closePopup(popup));
}

document.addEventListener('wpcf7mailsent', function (event) {
  var successPopup = document.querySelector('.popup__success');
  openPopup(successPopup);
}, false);

document.addEventListener('wpcf7mailfailed', function (event) {
  var errorPopup = document.querySelector('.popup__error');
  openPopup(errorPopup);
}, false);





const dropdownButton = document.querySelector('.dropdown'),
 dropdownMenu = document.querySelector('.dropdown-content'),
 headerDropdownButton = document.querySelector('.header__dropdown-button')

dropdownButton.addEventListener('click', ()=> {
  dropdownMenu.classList.toggle('active')
  headerDropdownButton.classList.toggle('header__dropdown-button_active')
})

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    dropdownMenu.classList.remove('active')
    headerDropdownButton.classList.remove('header__dropdown-button_active')
  }
})

document.addEventListener('click', function(event) {
  if (!dropdownButton.contains(event.target)) {
    dropdownMenu.classList.remove('active')
    headerDropdownButton.classList.remove('header__dropdown-button_active')
  }
})



new SlimSelect({
  select: '#finSelect',
  settings: {
    searchText: 'Ничего не найдено',
    searchPlaceholder: 'Поиск...',
  }
});



// ТАБЫ


// document.addEventListener('DOMContentLoaded', function() {
//   const steps = document.querySelectorAll('.step');
//   const nextButtons = document.querySelectorAll('[data-next]');
//   const prevButtons = document.querySelectorAll('[data-prev]');

//   nextButtons.forEach(button => {
//       button.addEventListener('click', function() {
//           const nextStep = this.getAttribute('data-next');
//           showStep(nextStep);
//       });
//   });

//   prevButtons.forEach(button => {
//       button.addEventListener('click', function() {
//           const prevStep = this.getAttribute('data-prev');
//           showStep(prevStep);
//       });
//   });

//   function showStep(stepNumber) {
//       steps.forEach(step => {
//           step.style.display = 'none';
//       });

//       const stepToShow = document.getElementById(`step${stepNumber}`);
//       if (stepToShow) {
//           stepToShow.style.display = 'block';
//       }
//   }
// });

// document.addEventListener('DOMContentLoaded', function() {
//   const inputElement = document.querySelector('.input-pointer'); // Выбираем элемент ввода по его классу
//   if (inputElement) {
//     inputElement.setAttribute('tabindex', '-1'); // Устанавливаем значение tabindex="-1"
//   }
// });