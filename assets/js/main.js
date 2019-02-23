$(document).ready(function() {
	$(document).ready(function() {
		$(".down").click(function() {
			 $('html, body').animate({
				 scrollTop: $(".up").offset().top
			 }, 1500);
		 });
		});
		
	$(".up").click(function() {
		 $('html, body').animate({
			 scrollTop: $(".down").offset().top
		 }, 1000);
	 });
	 
	
	});


	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		autoplay:true,
		responsiveClass:true,
		responsive:{
				0:{
						items:1,
						nav:true
				},
				768:{
						items:2,
						nav:false
				},
				992:{
						items:4,
						nav:true,
						loop:false
				}
		}
	})

