/*--------------------------------AOS--------------------------------*/

AOS.init({
  duration: 700,
  once: true
});

/*--------------------------------WINDOW ON SCROLL--------------------------------*/

window.onscroll = function() {
  scrollFunctionFixHeader();
  scrollFunctionGoUp();
};

/*--------------------------------FIXING HEADER--------------------------------*/

var header = $(".header");

function scrollFunctionFixHeader() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    header.addClass("moving-header");
    header.removeClass("border-bottom");
    header.addClass("fixedTop");
  } else {
    header.removeClass("moving-header");
    header.addClass("border-bottom");
    header.removeClass("fixedTop");
  }
}

/*--------------------------------GO-UP-BUTTON--------------------------------*/

var goUpButton = $(".go-up-button");

function scrollFunctionGoUp() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    goUpButton.removeClass("d-none");
  } else {
    goUpButton.addClass("d-none");
  }
}

goUpButton.click(function() {
  $("html").animate({
    scrollTop: 0
  }, 700);
  return false;
});

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

/*--------------------------------CHANGING BUTTON (TOGGLER)--------------------------------*/

var togglerButton = $(".navbar-toggler")

togglerButton.click(function() {
  $(".navbar-toggler-default").toggleClass("d-none");
  $(".navbar-toggler-toggled").toggleClass("d-none");
});

/*--------------------------------POPPER--------------------------------*/

var ref = $('.landing-button');
var popup = $('.landings-popper');
var awh = $('section');
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
  popup.toggle();
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

awh.mouseenter(function() {
  popup.hide();
});
