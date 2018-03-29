$(function(){
    'use strict';
  var  winH = $(window).height(),
        upperh = $('.upper-bar').innerHeight(),
      unavh = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (upperh + unavh));
    
    $('.featured-work ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle-images .col-md').fadeIn(500);
        } else {
            $('.shuffle-images .col-md').hide();
            $($(this).data('class')).parent().fadeIn(500);
        }
    });
   
});