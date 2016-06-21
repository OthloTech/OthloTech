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
  // $('.othlo-hero-video').coverVid($(window).width(), 600);
  // const video = $('.othlo-hero-video').get(0);
  // setInterval(function() {
  // 	video.pause();
  // 	video.play();
  // 	if(!video) clearInterval(this);
  // }, 1000);

  $('.othlo-hero').lazyBgLoad();


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
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
  	]
  })

})