class HeroSlider{
  constructor(){
    this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      grabCursor: true,
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
      breakpoints: {
        1024: {
            slidesPerView: 2,
        }
    },
      autoplay:{
        delay:4000,
        disableoninteraction:false
      }      
    })
  }
}
