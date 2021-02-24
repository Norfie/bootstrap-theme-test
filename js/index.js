/*--------------------------------SLIDER--------------------------------*/

$('.slider').slick({
  fade: true,
  infinite: true,
  dots: true,
  slidesToShow: 1
});

/*--------------------------------CHANGING TEXT IN TITLE--------------------------------*/

var typed = new Typed('.element', {
  strings: ["future.", "startup.", "success."],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 500,
  loop: true,
  showCursor: true
});

/*--------------------------------FANCYBOX--------------------------------*/

$(document).ready(function() {
  $(".fancybox").fancybox();
});

/*--------------------------------POPPER--------------------------------*/

var ref = $('.landing-button');
var popup = $('.landings-popper');
var title = $('.title');
popup.hide();

ref.mouseenter(function() {
  popup.show();
  var popper = new Popper(ref, popup, {
    placement: 'bottom',
    modifiers: {
      flip: {
        behavior: ['left', 'right', 'top', 'bottom']
      },
      offset: {
        enabled: true,
        offset: 0.1
      }
    }
  });
});

ref.click(function() {
  popup.toggle(ref);
  var popper = new Popper(ref, popup, {
    placement: 'bottom',
    modifiers: {
      flip: {
        behavior: ['left', 'right', 'top', 'bottom']
      },
      offset: {
        enabled: true,
        offset: 0.1
      }
    }
  });
});

title.mouseenter(function() {
  popup.hide();
});
