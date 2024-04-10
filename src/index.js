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
    width: 600,
    effect: "creative",
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
    breakpoints:{
        320:{
            width:300,
        },
        768:{
            width: 400,
        },
        1024:{
            width: 600,
        },
    },
    mousewheel: {
      forceNiceScroll: true,
      invert: false,
    },
  
  })
