
// sticky header part start
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 200){
        $('.navbar').addClass('sticky_name');
    }
    else {
         $('.navbar').removeClass('sticky_name');
    }
    });  

// sticky header part ends
// slick part start 
$('.slick_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

//   service part slide 
$(function(){
    $('.slick_service').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        // responsive service slick
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
        ]
    });
});



$('.slick_post').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    // responsive part 
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
    ]
});
// slick part end 
// mixit part start
var containerEl = document.querySelector('.mixit_up');

var mixer = mixitup(containerEl); 
// mixit part ends
// back to top part start 
//==== Back-to-top button
$(window).on('scroll', function(event) {
    if($(this).scrollTop() > 600){
        $('.back_to_top').fadeIn(200)
    } else{
        $('.back_to_top').fadeOut(200)
    }
});
//==== Animate the scroll to top
$('.back_to_top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
});
// back to top part end 
// counter part start 
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 1,
        time: 9000
    });
});
// counter part end 