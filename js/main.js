$(function(){
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 800){
      $('.on-page.book-btn').css('opacity','1')
    } else {
      $('.on-page.book-btn').css('opacity','0')
    }
  });
  var slideIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("slider__item");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "grid";
    setTimeout(carousel, 300000); // Change image every 2 seconds
  }

  $('.pricing__item').on('click', function(){
    $(this).find('.hide').addClass('bounceInLeft'),
    $(this).find('.hide').css('visibility','visible')
  })
});
