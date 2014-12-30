$(document).ready(function(){

// Preload large images
  var preloads = ['assets/me.png', 'assets/goodfoodphone.png', 'assets/goodfoodscreen.png'];

	for (i = 0; i < preloads.length; i++) {
		var image = new Image();
		image.src = preloads[i];
	}

// Fade in the main div
  $('.header').delay(500).fadeIn(800, 'swing');

// Navbar
	$('.navbutton').on('click', function(e){
		if (!$(this).hasClass('active')) {
			$(this).addClass('active').siblings().removeClass('active');
			$('.content-container').slideUp(400);
			var id = $(this).attr('id') + '-container';
			$('#' + id).delay(500).slideDown(500, function() {
        // do nothing extra right now
      });
		}
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


});