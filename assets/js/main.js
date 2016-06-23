$(function() {
  $.fn.lazyBgLoad = function() {
  	this.each(function() {
  	  const imageData = $(this).attr('data-original');
  	  const date = new Date().getTime();
  	  if(imageData !== "undefined" && imageData !== false) {
  	  	$(this).css({"opacity": 0}).append("<img>");
  	  	$(this).find("img").css({"display": "none"}).attr("src", imageData + "?" +date);
  	  	$(this).find("img").on("load", function() {
  	  	  $(this).parent().css({"background-image": `url('${$(this).attr("src")}')`}).animate({"opacity": 1}, 800);
  	  	  $(this).remove();
  	  	})
  	  }
  	})
  }
})

$(function() {
  //$('.othlo-hero').lazyBgLoad();

  $('.othlo-hero').vegas({
    delay: 5000,
    transition: ['blur', 'fade'],
    shuffle: true,
    slides: [
      { src: '/images/background/1.jpg' },
      { src: '/images/background/2.jpg' },
      { src: '/images/background/3.jpg' },
      { src: '/images/background/4.jpg' },
      { src: '/images/background/5.jpg' },
      { src: '/images/background/6.jpg' },
      { src: '/images/background/7.jpg' },
      { src: '/images/background/8.jpg' },
      // { src: '/movie/othlotech.png',
      //   video: { src: ['/movie/othlotech.mp4']},
      //   loop: false,
      //   mute: true
      // }
    ],
  });

  $('.othlo-images-slider').slick({
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 3,
    autoplaySpeed: 3000,
    speed: 400,
    autoplay: true,
    arrows: true,
    infinite: true,
    responsive: [
      { breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3 }},
      { breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1 }}
  	]
  })

})