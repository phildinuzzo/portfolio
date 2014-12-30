$(document).ready(function(){

  $(document).ready(doResize);
  doResize();
  $(window).on('resize', doResize);
  function doResize() {
    $('.mainDiv').css({
        position:'absolute',
        left: ($(window).width() - $('.mainDiv').outerWidth())/2
        // top: ($(window).height() - $('.mainDiv').outerHeight())/2
    });
  }

  $(".mainFade").delay(500).fadeIn(1500, 'swing');
  $(".mainFade1").delay(1000).fadeIn(1000, 'swing').animate({color: '#CACBCF'}, 400);

  $(".mainFade2").delay(2500).fadeIn(1000, 'swing').animate({color: '#CACBCF'}, 400);
  $(".mainFade3").delay(4000).fadeIn(1000, 'swing').animate({color: '#CACBCF'}, 400);

  // $('.mainFade1').delay(1).animate({color: '#8A2C4B'}, 1000).animate({color: 'white'}, 500);


  $("#port").on('click', function() {
    if ($(this).hasClass('active')) {
    } else {
      $(".content-container").slideUp(1000);
      $("#port-container").delay(1000).slideDown(1000, function() {
        $.scrollTo('#navbar', 800);
      });
    }
      // $("#content").delay(500).fadeIn(1000);  //May use later for fadeIn
  });

  $("#exp").on('click', function() {
    if ($(this).hasClass('active')) {
    } else {
    $(".content-container").slideUp(1000);
    $("#exp-container").delay(1000).slideDown(1000, function() {
        $.scrollTo('#navbar', 800);
      });
    }
  });

  $("#contact").on('click', function() {
    if ($(this).hasClass('active')) {
    } else {
    $(".content-container").slideUp(1000);
    $("#contact-container").delay(1000).slideDown(1000, function() {
        // $.scrollTo('.maindiv', 1000);
      });
    }
  });

  $('.navbutton').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  });


// MODAL ~~~~~~~~~~~~~~~~~~~~~~~~~~
  $('.goodfoodModal').jqm({modal: true, trigger: '.modalTrigger'}).jqmAddClose(".close");

  $(window).on('resize', doResizeModal);
  $('.modalTrigger').on('click', doResizeModal);
    function doResizeModal() {
      $('.modal').css({
          position:'absolute',
          left: ($(window).width() - $('.modal').outerWidth())/2,
          top: ($(window).height() - $('.modal').outerHeight())/2,
          position:'fixed'

      });
    }

  $(window).scroll(function(e){
    $el = $('.goodfoodModal');
    if ($(this).scrollTop() > 200 && $el.css('position') != 'fixed'){
      $('.goodfoodModal').css({'position': 'fixed', 'top': '0px'});
    }
  });

//  END MODAL ~~~~~~~~~~~~~~~~~~~~~~~~~~

  var preloads = ['assets/me2.jpg'];

  $(preloads).each(function(){
      $('<img />')[0].src = this;
  });






});