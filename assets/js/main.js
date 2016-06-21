$(function() {
  $('.othlo-hero-video').coverVid($(window).width(), 600);

  const video = $('.othlo-hero-video').get(0);
  setInterval(function() {
  	video.pause();
  	video.play();
  	if(!video) clearInterval(this);
  }, 1000);
})