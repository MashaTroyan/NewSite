$(function(){
    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        },
        
    });

    $('.heroes_slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // arrows: false, стрелки
        asNavFor: '.heroes_slider-text',
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="./images/левая.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="./images/правая.png" alt="next"></button>'
      });
   $('.heroes_slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes_slider-img',
        fade: true, // кнопка
        arrows: false
        
      });


});

