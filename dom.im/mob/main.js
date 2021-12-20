jQuery(document).ready(function(){

	// Меню навигации

	$('a[href^="#sets"]').on('click',function(){
	event.preventDefault();
    var sc = $('a[href^="#sets"]').attr("href"),
        dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 1000);
	});

	$('a[href^="#price"]').on('click',function(){
	event.preventDefault();
    var sc = $('a[href^="#price"]').attr("href"),
        dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 1000);
	});

	$('a[href^="#connection"]').on('click',function(){
	event.preventDefault();
    var sc = $('a[href^="#connection"]').attr("href"),
        dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 1000);
	});

	$('a[href^="#for-whom"]').on('click',function(){
	event.preventDefault();
    var sc = $('a[href^="#for-whom"]').attr("href"),
        dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 1000);
	});

	// Кнопка прокрутки вверх страницы

	$('a[href^="#top"]').on('click',function(){
	event.preventDefault();
    var sc = $('a[href^="#top"]').attr("href"),
        dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 1000);
	});
	// Появление и исчезновение кнопки прокрутки на определенной высоте страницы

	let wh = 1036;
	var f = document.querySelector('.scroll-top')
	window.addEventListener('scroll', function () {
		var st = document.documentElement.scrollTop
	  if (st > 1036) {
	  	$('.scroll-top').show(400);
	  } else {
	    $('.scroll-top').hide(400);
		}
	});

});