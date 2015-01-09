$(document).ready(function() {

// NOTES

// SPELLCHECK EVERYTHING
// Add github link to portfolio items
// Check navbar at small screen size (using hash links!)

// CSS
// Implement @font stuff for fonts
// Organize media queries

// Experience COPY
// Experience RESIZE

// Portfolio COPY
// Portfolio LINKS (Git hub, project link)
// Portfolio RESIZE


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

  // Allow function to trigger only after resize is complete.
  // var delay = (function(){
  //   var timer = 0;
  //   return function(callback, ms){
  //     clearTimeout(timer);
  //     timer = setTimeout(callback, ms);
  //   };
  // })();

// Small screen navbar
	$(window).on('resize', function(e){
		if ($(e.target).width() < 700) {
      // delay(function(){
        $('.nav-arrow-container').show();
        // Temp fix for arrows on re-size to under 700px
        $('.nav-arrow').css('top', $('.active').data('top-value'));
      // }, 500);
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
      // if ($(window).width() < 700) {
  			var navHeight = $('.navbutton').outerHeight();
  			$('.nav-arrow').animate({
  				top: navHeight * $(this).data('top') - (navHeight/1.5) + 'px',
  			}, 500);
      // }

			// Content animation
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
  var src;
  $('.img-holder, .modal-image').on('click', function(){
  	$overlay.show();
  	if ($(this).attr('src')) {
  		console.log('has clas')
  		var src = $(this).attr('src')
  	} else {
  		var src = $(this).children('img').attr('src')
  	}
  	$('body').append('<div class="modal"><img src="' + src + '"></div>');
  	$('.modal').fadeIn(200);
  	$overlay.on('click', function(){
  		$overlay.fadeOut(300);
  		$('.modal').remove();
  	});
  });


});