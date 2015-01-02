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
			if (!boolean === true) {
				for (var i = 0; i < $('.slider').length; i++) {
					navSlider(450 + (i * 80), i.toString());
				}
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

	// Fade in the main div, enable navbar click and check for hash
  $('.header').delay(300).fadeIn(600, 'swing', function() {
  	$('.navbutton').on('click', navAction);
  	if(window.location.hash) {
  		$(window.location.hash).trigger('click', true);
  	}
  });


  // Image modal
  // var url = $(e.target).data('url');
  // if (url) {
  //     $('.photo-modal-dialog').hide();
  //     $('#photo-holder > img').remove();
  //     $('#photo-holder').append('<img src=' + url + '>');
  //     $('#view-photo').modal({backdrop: 'false'});
  //     setTimeout(function(){
  //         $('.photo-modal-dialog').fadeIn(400);
  //     }, 200);
  // }



});