$(function(){
   
   $('.toggle-nav').click(function(e) {
   $(this).toggleClass('active');
   $('.menu ul').toggleClass('active');
   e.preventDefault();
   });

 $('.slider').slick({
   autoplay: true,
   autoplaySpeed: 3000,
   speed: 2000,
   slidesToShow: 3,
   slidesToScroll: 3,
   dots: true,
   arrows: false,
   responsive: [
   {
      breakpoint: 992,
      settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
       }
      },
      {
      breakpoint: 584,
      settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         dots: false,
         autoplay: false,
         speed: 300,
       }
      }
   ]

 });

  $('.team-slider').slick({
   autoplay: true,
   autoplaySpeed: 3000,
   speed: 2000,
   slidesToShow: 4,
   slidesToScroll: 4,
   dots: true,
   arrows: false,
   responsive: [
   {
      breakpoint: 1310,
      settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
      }
     },
     {
     breakpoint: 992,
     settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
     }
   },
   {
     breakpoint: 654,
     settings: {
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      speed: 300,
     }
   }
   ]
 });

 $("#works li").click(function(){
      $("#works li").removeClass("actives");
      $(this).addClass("actives");   
   });

 var containerEl = document.querySelector('.mixit');

 var mixer = mixitup(containerEl);

$(".menu ul a").mPageScroll2id();
});﻿
