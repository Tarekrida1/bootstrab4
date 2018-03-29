$(function(){
    'use strict';
  var  winH = $(window).height(),
        upperh = $('.upper-bar').innerHeight(),
      unavh = $('.navbar').innerHeight();
    $('.slider').hieght(winH - (upperh + unavh));
});