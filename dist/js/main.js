"use strict";$(function(){$.fn.lazyBgLoad=function(){this.each(function(){var e=$(this).attr("data-original"),s=(new Date).getTime();"undefined"!==e&&e!==!1&&($(this).css({opacity:0}).append("<img>"),$(this).find("img").css({display:"none"}).attr("src",e+"?"+s),$(this).find("img").on("load",function(){$(this).parent().css({"background-image":"url('"+$(this).attr("src")+"')"}).animate({opacity:1},800),$(this).remove()}))})}}),$(function(){$(".othlo-hero").vegas({delay:3e3,transition:["blur","fade"],shuffle:!0,slides:[{src:"/images/background/1.jpg"},{src:"/images/background/2.jpg"},{src:"/images/background/3.jpg"},{src:"/images/background/4.jpg"},{src:"/images/background/5.jpg"},{src:"/images/background/6.jpg"},{src:"/images/background/7.jpg"},{src:"/images/background/8.jpg"}]}),$(".othlo-images-slider").slick({centerMode:!0,centerPadding:"30px",slidesToShow:3,autoplaySpeed:3e3,speed:400,autoplay:!0,arrows:!0,infinite:!0,responsive:[{breakpoint:768,settings:{arrows:!1,centerMode:!0,centerPadding:"40px",slidesToShow:3}},{breakpoint:480,settings:{arrows:!1,centerMode:!0,centerPadding:"40px",slidesToShow:1}}]})});