$(document).ready(function() {

// Preload large images, background first
  var preloads = ['assets/bg.png', 'assets/me.png', 'assets/goodfoodphone.png', 'assets/goodfoodscreen.png'];

	for (i = 0; i < preloads.length; i++) {
		var image = new Image();
		image.src = preloads[i];
		if (i === 0) {
			$('body').css('background-image', 'url(' + image.src + ')');
		}
	}

// Some navbar animation
	var navSlider = function(speed, i) {
		$('.circle-' + i).show().animate({
			right: $('.navbar').width() - $('.active').position().left - ($('.active').width()/2) + 'px',
		}, speed, function() {
			$('.circle-' + i).fadeOut(500).css({
				right: '-200px',
			});

			if (i === '0') {
				$('.active').addClass('glow').one('animationiteration webkitAnimationIteration', function() {
        	$(this).removeClass('glow');
    		});
			}
		});
	}

// Change tabs function
	var navAction = function(e, boolean) {
		var self = this;
		if (!$(this).hasClass('active')) {
			$(this).addClass('active').siblings().removeClass('active');
			// Navbar animation
			if (!boolean === true) {
				for (var i = 0; i < $('.circle').length; i++) {
					navSlider($('.navbar').width() - ($('.active').position().left) + (i * 70) - 100, i.toString());
				}
			}

			// Content
			$('.content-container').fadeOut(400);
			$('.container').animate({
				height: $(this).data('height'),
			}, 500, function() {
				$('#' + $(self).attr('id') + '-container').fadeIn(300);
				// $('.container').delay(5000).css({'min-height': $(self).data('height'), height: 'auto'});

			});
		}
	}

	// Fade in the main div, enable navbar click and check for hash
  $('.header').delay(300).fadeIn(600, 'swing', function() {
  	$('.navbutton').on('click', navAction);
  	if(window.location.hash) {
  		$(window.location.hash).trigger('click', true);
  	}
  });

  // // Add magnifying glass icon
  // $('.img-click').each(function(){
  // 	// $(this).css('background-image', 'url("assets/mag-icon.svg")');
  // });

  // Image modal
  var $overlay = $('.overlay');
  $('.img-holder').on('click', function(){
  	$overlay.show();
  	$('body').append('<div class="modal"><img src="' + $(this).children('img').attr('src') + '"></div>');
  	$('.modal').fadeIn(200);
  	$overlay.on('click', function(){
  		$overlay.fadeOut(300);
  		$('.modal').remove();
  	});
  });


});