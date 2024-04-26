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

const burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', function() {
  this.classList.toggle('active');
});




//JS для модального окна
// const popup = document.querySelector('.popup');
// const buttonClosePopup = document.querySelector('.popup__close');

// function openPopup(popupElement) {
//     popupElement.classList.add('popup_is_active');
//     popupElement.addEventListener('click', handleOverlayClosePopup);
//     document.addEventListener('keydown', handleEscClosePopup);
// }

// function closePopup(popupElement) {
//     popupElement.classList.remove('popup_is_active');
//     popupElement.removeEventListener('click', handleOverlayClosePopup);
//     document.removeEventListener('keydown', handleEscClosePopup);
// }

// function handleOverlayClosePopup(evt) {
//     if (evt.target === evt.currentTarget) {
//         closePopup(evt.currentTarget);
//     }
// }

// function handleEscClosePopup(evt) {
//     if (evt.key === 'Escape') {
//         closePopup(document.querySelector('.popup_is_active'));
//     }
// }

// if(buttonClosePopup){
//   buttonClosePopup.addEventListener('click', () => closePopup(popup));
// }


// document.addEventListener('DOMContentLoaded', function() {
//   let currentStep = 1;
//   const stepForms = document.querySelectorAll('#stepForm .step');

//   function hideStep(step) {
//       stepForms[step - 1].style.display = 'none';
//   }

//   function showStep(step) {
//       stepForms[step - 1].style.display = 'block';
//   }

//   function switchToStep(step) {
//       hideStep(currentStep);
//       currentStep = step;
//       showStep(currentStep);
//   }

//   document.getElementById('stepForm').addEventListener('click', function(event) {
//       const element = event.target;
//       if (element.nodeName === 'BUTTON') {
//           if (element.dataset.next) {
//               switchToStep(Number(element.dataset.next));
//           } else if (element.dataset.prev) {
//               switchToStep(Number(element.dataset.prev));
//           }
//       }
//   });

//   document.addEventListener('wpcf7mailsent', function(event) {

//       switchToStep(2); 
//   }, false);
// });

// document.addEventListener('wpcf7mailfailed', function(event) {
//   var errorPopup = document.querySelector('.popup__error');
//   openPopup(errorPopup);
// }, false);




// // Начало кода для табов
document.addEventListener('DOMContentLoaded', function() {
  var tabs = document.querySelectorAll('.tab-header-item');
  var contents = document.querySelectorAll('.tab-content-item');

  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      tabs.forEach(function(t) {
        t.classList.remove('active');
      });
      contents.forEach(function(content) {
        content.classList.remove('active');
      });
      this.classList.add('active');
      var content = document.querySelector('.tab-content-item[data-content="'+this.getAttribute('data-tab')+'"]');
      content.classList.add('active');
    });
  });
});
 //Конец кода для табов 

 function handleFormNavigation() {
  document.querySelectorAll('.tab-content-item').forEach(function(tabContent) {
    let currentStep = 1;
    const stepForms = tabContent.querySelectorAll('.step');

    function hideStep(step) {
        stepForms[step - 1].style.display = 'none';
    }

    function showStep(step) {
        stepForms[step - 1].style.display = 'block';
    }

    function switchToStep(step) {
        hideStep(currentStep);
        currentStep = step;
        showStep(currentStep);
    }

    tabContent.querySelector('.step').addEventListener('click', function(event) {
        const element = event.target;
        if (element.nodeName === 'BUTTON') {
            if (element.dataset.next) {
                switchToStep(Number(element.dataset.next));
            } else if (element.dataset.prev) {
                switchToStep(Number(element.dataset.prev));
            }
        }
    });

    document.addEventListener('wpcf7mailsent', function(event) {
        switchToStep(2); 
        var tabs = document.querySelectorAll('.tab-header-item');
        tabs.forEach(function(tab) {
            tab.style.display = 'none';
        });
    }, false);
  });
}

function handleTabNavigation() {
  var tabs = document.querySelectorAll('.tab-header-item');
  var contents = document.querySelectorAll('.tab-content-item');
  tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
          tabs.forEach(function(t) {
              t.classList.remove('active');
          });
          contents.forEach(function(content) {
              content.classList.remove('active');
          });
          this.classList.add('active');
          var content = document.querySelector('.tab-content-item[data-content="'+this.getAttribute('data-tab')+'"]');
          content.classList.add('active');
      });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  handleFormNavigation();
  handleTabNavigation();
});