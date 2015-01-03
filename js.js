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

// Small screen navbar
	$(window).on('resize', function(e){
		if ($(e.target).width() < 700) {
			$('.nav-arrow-container').show();
		} else {
			$('.nav-arrow-container').hide();
		}
	})

// Change tabs function
	var navAction = function(e, boolean) {
		var self = this;
		if (!$(this).hasClass('active')) {
			$(this).addClass('active').siblings().removeClass('active');
			// Navbar animation
			if (!boolean === true && $(window).width() > 700) {
				for (var i = 0; i < $('.circle').length; i++) {
					navSlider($('.navbar').width() + ($('.active').position().left/2) + (i * 70) - 300, i.toString());
				}
			} else {
				$('.nav-arrow-container').show();
			}
			// Small screen Navbar animation
			var navHeight = $('.navbutton').outerHeight();
			$('.nav-arrow').animate({
				top: navHeight * $(this).data('top') - (navHeight/1.5) + 'px',
			}, 500);

			// Content
			$('.content-container').fadeOut(400);
			$('.container').animate({
				height: $(this).data('height'),
			}, 500, function() {
				$('#' + $(self).attr('id') + '-container').fadeIn(300);
			});
		}
	}

	// Fade in the main div, enable navbar click and check for hash, screen size
  $('.header').delay(300).fadeIn(600, 'swing', function() {
  	$('.navbutton').on('click', navAction);
  	if(window.location.hash) {
  		$(window.location.hash).trigger('click', true);
  	}
  	if ($(window).width() < 700) {
  		$('.nav-arrow-container').show();
  	}
  });

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