$(document).ready(function() {

// Preload large images
  var preloads = ['assets/me.png', 'assets/goodfoodphone.png', 'assets/goodfoodscreen.png'];

	for (i = 0; i < preloads.length; i++) {
		var image = new Image();
		image.src = preloads[i];
	}

// Some navbar animation
	var navSlider = function(speed, i) {
		$('.slider-' + i).show().animate({
			right: $('.navbar').width() - $('.active').position().left - ($('.active').width()/2) + 'px',
		}, speed, function() {
			$('.slider-' + i).fadeOut(500).css({
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
			// Navbar
			$(this).addClass('active').siblings().removeClass('active');
			// Maybe add more and iterate
			if (!boolean === true) {
				navSlider(450, '0');
				navSlider(550, '1');
				navSlider(650, '2');
			}

			// Content
			$('.content-container').fadeOut(400);
			$('.container').animate({
				height: $(this).data('height'),
			}, 500, function() {
				$('#' + $(self).attr('id') + '-container').fadeIn(300);
			});

		}
	}

	// Fade in the main div and check for hash
  $('.header').delay(500).fadeIn(800, 'swing', function() {
  	if(window.location.hash) {
  		$(window.location.hash).trigger('click', true);
  	}
  });

  // Change tabs
	$('.navbutton').on('click', navAction);


});