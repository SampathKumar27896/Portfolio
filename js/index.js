
$(document).ready(function() { 
	
	$(window).scroll(function(){
		var image1 = document.getElementById('landing_img_1');
		var image2 = document.getElementById('landing_img_2');
		var v = window.scrollY;
		var scroll = $(window).scrollTop(),
		dh =  $(document).height(),
		wh =  $(window).height();
		value = (scroll / (dh - wh)) *20;
		image1.style.left =  v * 1 + 'px'
		image2.style.left =  v * 1.1 + 'px'
		$('#wrapper').css('left', -value * 1 + '%');
	})
});