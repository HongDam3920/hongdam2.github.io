$(document).ready(function(){
    media();

    function media(){
      var swiper = new Swiper(".mySwiper", {
          slidesPerView: 3,
          spaceBetween: 40,
          loop:true,

          effect: "coverflow",
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: "auto",
          coverflowEffect: {
            rotate: 0,
            stretch: 20,
            depth: 100,
            modifier: 3,
            slideShadows: false,
          },
    
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
      });  
    }

    $('.menu').click(function(){
        $(this).addClass('checked');
        $(this).siblings().removeClass('checked');

        const result = $(this).attr('data-alt');

        $('.tab').removeClass('checked');
        $(`.${result}`).addClass('checked');
    })
})
