$(function(){
  // $('.galery__slider').slick({
  //   slidesToShow: 6,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   arrows: false
  // });


  $('.galery__slider-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.galery__slider'
  });
  $('.galery__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.galery__slider-big',
    autoplay: true,
    // centerMode: true,
    arrows: false,
    focusOnSelect: true
  });
//   var rn = Math.floor((Math.random() * 150) + 60);
// var rs = Math.floor((Math.random() * 11) + 4);
// 	var t = new Trianglify({
//  x_gradient: Trianglify.colorbrewer.Spectral[rs],
//     noiseIntensity: 0,
//     cellsize: rn
// });
// var pattern = t.generate(window.innerWidth, window.innerWidth+200);
// document.body.setAttribute('style', 'background-image: '+pattern.dataUrl);
});
