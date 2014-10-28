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

  $('select').parent('.input-box').addClass('new-select').prepend('<span class="new-select-label">');
  $('select').each(function(){
    if($(this).is(':disabled')){
      $(this).parent('.new-select').addClass('new-select-disabled');
    }
  });
  setTimeout(function(){
    $('.new-select').each(function(){
      $(this).find('.new-select-label').text($(this).find('select').find('option:selected').text());
    });    
  },300);
  $('.new-select').on('change', 'select', function(){
    $('.new-select select').each(function(){
      var text = $(this).find('option:selected').text();
      $(this).next('.new-select-label').html(text)
    });
    $('select').each(function(){
      if($(this).is(':disabled')){
        $(this).parent('.new-select').addClass('new-select-disabled');
      }else{
        $(this).parent('.new-select').removeClass('new-select-disabled');
      }
    });
  });
  $('.qty-plus').click(function(){
    var val = parseInt($('input.qty').val());
    $('input.qty').val(val+1);
  });
  $('.qty-minus').click(function(){
    var val = parseInt($('input.qty').val());
    $('input.qty').val(val - 1);
  });
  $('.review-summary-form input').each(function(){
    if($(this).is(':checked')){
      $(this).parent().addClass('checked-star');
    }
  });
  $('.review-summary-form label').mouseenter(function(){
    var $parent = $(this).parents('.review-form-row');
    var index = $(this).parents('.review-form-rating-option').index()-1;
    $parent.find('.review-form-checked:not(.selected)').show().children('span').html(index+1);    
  }).mouseout(function(){
    var $parent = $(this).parents('.review-form-row');
    var index = $(this).parents('.review-form-rating-option').index()-1;
    $parent.find('.review-form-checked').removeAttr('style');
  });
  $('.review-summary-form input').on('change',function(){
    var $parent = $(this).parents('.review-form-row');
    var index = $(this).parents('.review-form-rating-option').index()-1;
    checkStars($parent,index);
    $parent.find('.checked-star').removeClass('checked-star');
    $(this).parent().addClass('checked-star');
  });
});
function checkStars(parent_row,index){
  var arr = parent_row.find('.review-form-rating-option');
  parent_row.find('.before-checked-star').removeClass('before-checked-star');
  $j.each(arr, function(i,e){
    if(i < index){
      $j(e).find('label').addClass('before-checked-star');
    }
  });
  parent_row.find('.review-form-checked').addClass('selected').children('span').html(index+1);
};  

ProductMediaManager.wireThumbnails = function() {
  //trigger image change event on thumbnail click
  $j('.product-image-thumbs .thumb-link').click(function(e) {
    e.preventDefault();
    $j('.product-image-thumbs .thumb-link').removeClass('current');
    var jlink = $j(this);
    var target = $j('#image-' + jlink.data('image-index'));
    jlink.addClass('current');
    ProductMediaManager.swapImage(target);
  });
}