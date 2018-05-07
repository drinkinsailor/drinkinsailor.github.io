$(function(){
   

 $('.slider').slick({
   autoplay: true,
   autoplaySpeed: 3000,
   speed: 2000,
   slidesToShow: 3,
   slidesToScroll: 3,
   dots: true,
   arrows: false
 });

  $('.team-slider').slick({
   autoplay: true,
   autoplaySpeed: 3000,
   speed: 2000,
   slidesToShow: 4,
   slidesToScroll: 4,
   dots: true,
   arrows: false
 });




 $(".works li").click(function(){
      $(".works li").removeClass("active");
      $(this).addClass("active");   
   });

 var containerEl = document.querySelector('.mixit');

 var mixer = mixitup(containerEl);


});﻿