jQuery(function($){
  var $carousel = $('.carousel');
  $carousel.on('jcarousel:reload jcarousel:create', function () {
    // var width = $carousel.innerWidth();

    // if (width >= 1000) {
    //     width = width / 5;
    // } else if (width >= 768) {
    //     width = width / 4;
    // } else if (width >= 640) {
    //     width = width / 3;
    // } else if (width >= 480) {
    //     width = width / 2;
    // } else if (width >= 320) {
    //     width = width + 26;
    // }

    // $carousel.jcarousel('items').css('width', width-26 + 'px');
  }).jcarousel({
    wrap: 'circular'
  });

  $('.carousel-nav__prev').jcarouselControl({
    target: '-=1'
  });

  $('.carousel-nav__next').jcarouselControl({
    target: '+=1'
  });
});