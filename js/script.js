setTimeout(function(){
    $(".preloader").fadeOut()
},1000)

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});

$(".slider").slick({
  arrows:false,
  asNavFor:".down-slider",
})
$(".down-slider").slick({
  slidesToShow: 3,
  centerMode:true,
  centerPadding: 0,
  asNavFor: ".slider",
  prevArrow: '<i class="icofont-long-arrow-left prev"></i>',
  nextArrow: '<i class="icofont-long-arrow-right next"></i>',
})

$(".item2").mouseenter(function(){
  $(".item2 .round").css("transform","scale(1.2)")
  $(".item2 .round2").css("transform","scale(2)")
  $(".line2").css("width","35%")
  $(".number2").css("color","#5f24ef")
  $(".number2").css("opacity",".4")
}) 
$(".item2").mouseleave(function(){
  $(".item2 .round").css("transform","scale(1)")
  $(".item2 .round2").css("transform","scale(1)")
  $(".line2").css("width","5%")
  $(".number2").css("color","#5f24ef")
  $(".number2").css("opacity","1")
}) 
$(".item3").mouseenter(function(){
  $(".item2 .round").css("transform","scale(1.2)")
  $(".item2 .round2").css("transform","scale(2)")
  $(".item3 .round").css("transform","scale(1.2)")
  $(".item3 .round2").css("transform","scale(2)")
  $(".line2").css("width","65%")
  $(".number2").css("color","#5f24ef")
  $(".number2").css("opacity",".4")
  $(".number3").css("color","#5f24ef")
  $(".number3").css("opacity",".4")
}) 
$(".item3").mouseleave(function(){
  $(".item2 .round").css("transform","scale(1)")
  $(".item2 .round2").css("transform","scale(1)")
  $(".item3 .round").css("transform","scale(1)")
  $(".item3 .round2").css("transform","scale(1)")
  $(".line2").css("width","5%")
  $(".number2").css("opacity","1")
  $(".number3").css("opacity","1")
}) 
$(".item4").mouseenter(function(){
  $(".item2 .round").css("transform","scale(1.2)")
  $(".item2 .round2").css("transform","scale(2)")
  $(".item3 .round").css("transform","scale(1.2)")
  $(".item3 .round2").css("transform","scale(2)")
  $(".item4 .round").css("transform","scale(1.2)")
  $(".item4 .round2").css("transform","scale(2)")
  $(".line2").css("width","100%")
  $(".number2").css("color","#5f24ef")
  $(".number2").css("opacity",".4")
  $(".number3").css("color","#5f24ef")
  $(".number3").css("opacity",".4")
  $(".number4").css("color","#5f24ef")
  $(".number4").css("opacity",".4")
}) 
$(".item4").mouseleave(function(){
  $(".item2 .round").css("transform","scale(1)")
  $(".item2 .round2").css("transform","scale(1)")
  $(".item3 .round").css("transform","scale(1)")
  $(".item3 .round2").css("transform","scale(1)")
  $(".item4 .round").css("transform","scale(1)")
  $(".item4 .round2").css("transform","scale(1)")
  $(".line2").css("width","5%")
  $(".number2").css("opacity","1")
  $(".number3").css("opacity","1")
  $(".number4").css("opacity","1")
}) 


$(".text-slider").slick({
  arrows: false,
  asNavFor:".img-slider",
})

$(".img-slider").slick({
  arrows: false,
  slidesToShow: 5,
  centerMode: true,
  centerPadding: '0',
  asNavFor: ".text-slider",
  prevArrow: '<i class="icofont-long-arrow-left prev"></i>',
  nextArrow: '<i class="icofont-long-arrow-right next"></i>',
})

$(".testi-slider").slick({
  fade:true,
  arrows: true,
  prevArrow: '<i class="icofont-long-arrow-left prev"></i>',
  nextArrow: '<i class="icofont-long-arrow-right next"></i>',
})

$(document).ready(function(){

	$('#bar1').barfiller({ barColor: '#08baf6' });
	$('#bar2').barfiller({ barColor: '#08baf6' });
	$('#bar3').barfiller({ barColor: '#08baf6' });
	$('#bar4').barfiller({ barColor: '#08baf6' });
	$('#bar5').barfiller({ barColor: '#08baf6' });
	$('#bar6').barfiller({ barColor: '#08baf6' });
	
});