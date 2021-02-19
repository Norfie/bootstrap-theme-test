$('.slider').slick({
  fade: true,
	infinite: true,
	dots: true,
	slidesToShow: 1
});

var typed = new Typed('.element', {
  strings: ["future.", "startup.", "success."],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 500,
  loop: true,
  showCursor: true
});
