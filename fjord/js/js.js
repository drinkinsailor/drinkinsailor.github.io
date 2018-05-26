$(function() {
   $('.menu-toggle').click(function(){
     $('.menu').toggleClass('active');

   });
    $('.menu_list1').click(function(){
     $('.menu_drop1').toggleClass('drop_active');
   });
    $('.menu_list2').click(function(){
     $('.menu_drop2').toggleClass('drop_active');
   });

    $('.slider').slick({
     autoplay: true,
     autoplaySpeed: 3000,
     speed: 2000,
     slidesToShow: 1,
     slidesToScroll: 1,
     centerMode: true,
     arrows: false,
      variableWidth: true
 });

    if (window.matchMedia("(max-width: 860px)").matches) {
  /* the viewport is at least 400 pixels wide */
       $('.menu-toggle').click(function(){
       $('.header_text').toggleClass('text_disable');
       $('.wrap').toggleClass('layout');
    });
   }
});