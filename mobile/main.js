$(document).ready(function(){

	$('a[href^="#scroll-up"]').on('click',function(){
	event.preventDefault();
    var sc = $('a[href^="#scroll-up"]').attr("href"),
        dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 1000);
	});

	$('a[href^="#price"]').on('click',function(){
	event.preventDefault();
    var sc = $('a[href^="#price"]').attr("href"),
        dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 1000);
	});


	let wh = 1036;
	var f = document.querySelector('.scrollTop')
	window.addEventListener('scroll', function () {
		var st = document.documentElement.scrollTop
	  if (st > 1036) {
	  	$('.scrollTop').show(400);
	  } else {
	    $('.scrollTop').hide(400);
		}
	});

});