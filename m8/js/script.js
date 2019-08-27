$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.fullpage').css('min-height', windowHeight);
    $('.thirdpage').css('min-height', windowHeight-100);
    $('#home_hero').css('min-height', windowHeight*2);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
  // var scroll = new SmoothScroll('a[href*="#"]');
  var scroll = new SmoothScroll('a[href*="#"]:not([data-easing])');
  var easeInQuad = new SmoothScroll('[data-easing="easeInQuad"]', {easing: 'easeInQuad'});
});