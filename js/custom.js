$('.banner_main').slick({
    infinite: true,
    speed: 500,
    fade: true,
    prevArrow: ".prev",
    nextArrow:".next",
  });

  
$('.slidermain').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  centerMode: true,
  verticalSwiping: true,
  prevArrow: ".first",
  nextArrow: ".second",
  focusOnSelect: true,
  speed: 2000,
});