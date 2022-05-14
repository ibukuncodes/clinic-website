"use strict";
(function($) {
  "use strict";

  //Initiate WOW JS
	new WOW().init();

  $('.navbar-nav .nav-link').on('click', function() {
    var toggle = $('.navbar-toggler').is(':visible');
    if (toggle) {
      $('.navbar-collapse').collapse('hide');
    }
  });

  //Back to top button
  $(window).on('scroll', function(){
    var scroll = $(window).scrollTop()
    if (scroll > 400) {
      $('#backtoTop').fadeIn();
    }else{
      $('#backtoTop').fadeOut();
    }
  });

  

  // Testimonials carousel 

  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    items:1,
    smartSpeed: 800,
    autoplay:true,
  });


  $('.piechart').easyPieChart({
    scaleColor:"transparent",
    size: 150,
    barColor: "#327af5",
    lineWidth: 3,
    lineCap:"round",
    trackColor: "#ecf0f1",
    animate: 5000,
  });


  


/*
  //Smooth scrolling 
  var scrollLink = $('.scroll');
  scrollLink.click(function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop:$(this.hash).offset().top
      },1000);
  });
  $(window).scroll(function(){
    var scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function(){
    var sectionOffset = $(this.hash).offset().top - 50;
    if (sectionOffset <= scrollbarLocation) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
    });
  });

  //Scroll with offset on links with a class name .scroll
  scrollLink.click(function(e){
    e.preventDefault();
    var navbar = $('#navbar')
      if (navbar.hasClass('navbar-mobile')) {
        navbar.removeClass('navbar-mobile')
        var navbarToggle = $('.mobile-nav-toggle')
        navbarToggle.toggleClass('bi-list')
        navbarToggle.toggleClass('bi-x')
      }
  });



  $(window).scroll(function () {
    if ($("nav").offset().top > 50) {
        $("nav").addClass("menu-bg");
    } else {
        $("nav").removeClass("menu-bg");
    }
});


 */


  
})(jQuery);
