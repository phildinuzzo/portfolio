$(document).ready(function() {

  var lineA = '<div class="sb-line hor">';
  var lineB = '<div class="sb-line vert">';

  $('.box').on('mouseenter', function(){

    $(this).append(lineA);
    $(this).append(lineB);
    $('.vert').css({
      height: $(this).height() + 'px',
      right: $(this).width() + 'px',
    })

    $('.vert').animate({
      right: 0,
    }, 600, function(){
      $(this).remove();
    });

    $('.hor').animate({
      top: $(this).height() + 'px',
    }, 600, function(){
      $(this).remove();
    });

  });

});