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
    effect: "cards",
    creativeEffect: {
        limitProgress: 4,
        prev: {
            translate: [-65, 0, -200],
            rotate: [0, 0, 0],
        },
        next: {
            translate: ['110%', 0, 0],
            rotate: [0, 0, 0],
        },
    },
    mousewheel: {
      forceNiceScroll: true,
      invert: false,
    },
  
  })
  

  