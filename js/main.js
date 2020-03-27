var btn = document.getElementById('btn');
btn.onclick = function(){
	var text = document.querySelector('.title span');
	text.classList.add('red');
	var img = document.querySelector('.travel');
	img.src='../web/assets/orig.png';
	var more = document.getElementById('more');
	var dots = document.getElementById('dots');
	if(dots.style.display === "none"){
		btn.innerHTML="Двигаться к мечте!";
		more.style.display="none";
		dots.style.display="inline";
	} else{
		btn.innerHTML="Скрыть";
		dots.style.display="none";
		more.style.display="inline";
	}
}
$(document).ready(function(){
	$(".btn").click(function(){
		$(".travel").Class("pic");
	});
});

	$(window).scroll(function() {
	    $('.blockfree').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInDown");
	        }
	    });
	});
		$(window).scroll(function() {
	    $('.blockfree1').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});
			$(window).scroll(function() {
	    $('.blockfree2').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRight");
	        }
	    });
	});
			$(window).scroll(function() {
	    $('.form').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("pulse");
	        }
	    });
	});