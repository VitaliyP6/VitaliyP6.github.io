jQuery(document).ready(function(){



	// Эффект при наведении на ссылку

	jQuery('.block-7__selection--button-1 .block-7__selection--button-line').css({'display':'none'});
	jQuery('.block-7__selection--button-2 .block-7__selection--button-line').css({'display':'none'});
	jQuery('.block-7__selection--button-3 .block-7__selection--button-line').css({'display':'none'});
	jQuery('.block-7__selection--button-4 .block-7__selection--button-line').css({'display':'none'});
	jQuery('.block-7__selection--button-5 .block-7__selection--button-line').css({'display':'none'});

	jQuery('.block-7__selection--button-1').mouseenter(function(){
        jQuery('.block-7__selection--button-1 .block-7__selection--button-line').css({'animation':'0.4s ease-in forwards bt-enter'});
        jQuery('.block-7__selection--button-1 .block-7__selection--button-line').css({'transform-origin':'left'});
        jQuery('.block-7__selection--button-1 .block-7__selection--button-line').css({'display':'block'});
    });
    jQuery('.block-7__selection--button-1').mouseleave(function(){
        jQuery('.block-7__selection--button-1 .block-7__selection--button-line').css({'animation':'0.4s ease-in forwards bt-leave'});
        jQuery('.block-7__selection--button-1 .block-7__selection--button-line').css({'transform-origin':'right'});
    });

    jQuery('.block-7__selection--button-2').mouseenter(function(){
        jQuery('.block-7__selection--button-2 .block-7__selection--button-line').css({'animation':'0.4s ease-in forwards bt-enter'});
        jQuery('.block-7__selection--button-2 .block-7__selection--button-line').css({'transform-origin':'left'});
        jQuery('.block-7__selection--button-2 .block-7__selection--button-line').css({'display':'block'});
    });
    jQuery('.block-7__selection--button-2').mouseleave(function(){
        jQuery('.block-7__selection--button-2 .block-7__selection--button-line').css({'animation':'0.4s ease-in forwards bt-leave'});
        jQuery('.block-7__selection--button-2 .block-7__selection--button-line').css({'transform-origin':'right'});
    });

    jQuery('.block-7__selection--button-3').mouseenter(function(){
        jQuery('.block-7__selection--button-3 .block-7__selection--button-line').css({'animation':'0.4s ease-in forwards bt-enter'});
        jQuery('.block-7__selection--button-3 .block-7__selection--button-line').css({'transform-origin':'left'});
        jQuery('.block-7__selection--button-3 .block-7__selection--button-line').css({'display':'block'});
    });
    jQuery('.block-7__selection--button-3').mouseleave(function(){
        jQuery('.block-7__selection--button-3 .block-7__selection--button-line').css({'animation':'0.4s ease-in forwards bt-leave'});
        jQuery('.block-7__selection--button-3 .block-7__selection--button-line').css({'transform-origin':'right'});
    });

    jQuery('.block-7__selection--button-4').mouseenter(function(){
        jQuery('.block-7__selection--button-4 .block-7__selection--button-line').css({'animation':'0.4s ease-in forwards bt-enter'});
        jQuery('.block-7__selection--button-4 .block-7__selection--button-line').css({'transform-origin':'left'});
        jQuery('.block-7__selection--button-4 .block-7__selection--button-line').css({'display':'block'});
    });
    jQuery('.block-7__selection--button-4').mouseleave(function(){
        jQuery('.block-7__selection--button-4 .block-7__selection--button-line').css({'animation':'0.4s ease-in forwards bt-leave'});
        jQuery('.block-7__selection--button-4 .block-7__selection--button-line').css({'transform-origin':'right'});
    });

    jQuery('.block-7__selection--button-5').mouseenter(function(){
        jQuery('.block-7__selection--button-5 .block-7__selection--button-line').css({'animation':'0.4s ease-in forwards bt-enter'});
        jQuery('.block-7__selection--button-5 .block-7__selection--button-line').css({'transform-origin':'left'});
        jQuery('.block-7__selection--button-5 .block-7__selection--button-line').css({'display':'block'});
    });
    jQuery('.block-7__selection--button-5').mouseleave(function(){
        jQuery('.block-7__selection--button-5 .block-7__selection--button-line').css({'animation':'0.4s ease-in forwards bt-leave'});
        jQuery('.block-7__selection--button-5 .block-7__selection--button-line').css({'transform-origin':'right'});
    });


    jQuery('.block-7__selection--button-1, .block-7__selection--button-2, .block-7__selection--button-3, .block-7__selection--button-4, .block-7__selection--button-5, .block-7__selection--button-6').click(function(event){
    	event.preventDefault();
    });


    // Выделение кнопки при нажатии
    	// Первая кнопка
	jQuery('.block-7__selection--button-1').click(function(){
		jQuery('.block-7__selection--button-line-1').addClass('line-active');
		jQuery('.block-7__selection--button-line-2').removeClass('line-active');
		jQuery('.block-7__selection--button-line-3').removeClass('line-active');
		jQuery('.block-7__selection--button-line-4').removeClass('line-active');
		jQuery('.block-7__selection--button-line-5').removeClass('line-active');
	});

		// Вторая кнопка
	// Первая кнопка
	jQuery('.block-7__selection--button-2').click(function(){
		jQuery('.block-7__selection--button-line-2').addClass('line-active');
		jQuery('.block-7__selection--button-line-1').removeClass('line-active');
		jQuery('.block-7__selection--button-line-3').removeClass('line-active');
		jQuery('.block-7__selection--button-line-4').removeClass('line-active');
		jQuery('.block-7__selection--button-line-5').removeClass('line-active');
	});

		// Третья кнопка
	jQuery('.block-7__selection--button-3').click(function(){
		jQuery('.block-7__selection--button-line-3').addClass('line-active');
		jQuery('.block-7__selection--button-line-1').removeClass('line-active');
		jQuery('.block-7__selection--button-line-2').removeClass('line-active');
		jQuery('.block-7__selection--button-line-4').removeClass('line-active');
		jQuery('.block-7__selection--button-line-5').removeClass('line-active');
	});

		// Четвертая кнопка
	jQuery('.block-7__selection--button-4').click(function(){
		jQuery('.block-7__selection--button-line-4').addClass('line-active');
		jQuery('.block-7__selection--button-line-1').removeClass('line-active');
		jQuery('.block-7__selection--button-line-2').removeClass('line-active');
		jQuery('.block-7__selection--button-line-3').removeClass('line-active');
		jQuery('.block-7__selection--button-line-5').removeClass('line-active');
	});

		// Пятая кнопка
	jQuery('.block-7__selection--button-5').click(function(){
		jQuery('.block-7__selection--button-line-5').addClass('line-active');
		jQuery('.block-7__selection--button-line-1').removeClass('line-active');
		jQuery('.block-7__selection--button-line-2').removeClass('line-active');
		jQuery('.block-7__selection--button-line-3').removeClass('line-active');
		jQuery('.block-7__selection--button-line-4').removeClass('line-active');
	});


    // Смена изображений при нажатии на кнопку

    	// Смена картинок при нажатии на кнопки в седьмом блоке
	// Первая картинка
	function click1(){
		jQuery('.block-7__right--img-1').addClass('img-active');
	}
	function clickRemove1(){
		jQuery('.block-7__right--img-2, .block-7__right--img-3, .block-7__right--img-4, .block-7__right--img-5, .block-7__right--img-6').removeClass('img-active');
	}
	jQuery('.block-7__selection--button-1').click(function(){
		jQuery('.block-7__right--img-1').css({'animation':'0.5s open-img ease-in-out'});
		jQuery('.block-7__right--img-2, .block-7__right--img-3, .block-7__right--img-4, .block-7__right--img-5, .block-7__right--img-6').css({'animation':'0.5s close-img ease-in-out'});
		setTimeout(click1, 0);
		setTimeout(clickRemove1, 500);
	});

	// Вторая картинка
	function click2(){
		jQuery('.block-7__right--img-2').addClass('img-active');
	}
	function clickRemove2(){
		jQuery('.block-7__right--img-1, .block-7__right--img-3, .block-7__right--img-4, .block-7__right--img-5, .block-7__right--img-6').removeClass('img-active');
	}
	jQuery('.block-7__selection--button-2').click(function(){
		jQuery('.block-7__right--img-2').css({'animation':'0.5s open-img ease-in-out'});
		jQuery('.block-7__right--img-1, .block-7__right--img-3, .block-7__right--img-4, .block-7__right--img-5, .block-7__right--img-6').css({'animation':'0.5s close-img ease-in-out'});
		setTimeout(click2, 0);
		setTimeout(clickRemove2, 500);
	});

	// Третья картинка
	function click3(){
		jQuery('.block-7__right--img-3').addClass('img-active');
	}
	function clickRemove3(){
		jQuery('.block-7__right--img-2, .block-7__right--img-1, .block-7__right--img-4, .block-7__right--img-5, .block-7__right--img-6').removeClass('img-active');
	}
	jQuery('.block-7__selection--button-3').click(function(){
		jQuery('.block-7__right--img-3').css({'animation':'0.5s open-img ease-in-out'});
		jQuery('.block-7__right--img-2, .block-7__right--img-1, .block-7__right--img-4, .block-7__right--img-5, .block-7__right--img-6').css({'animation':'0.5s close-img ease-in-out'});
		setTimeout(click3, 0);
		setTimeout(clickRemove3, 500);
	});

	// Четвертая картинка
	function click4(){
		jQuery('.block-7__right--img-4').addClass('img-active');
	}
	function clickRemove4(){
		jQuery('.block-7__right--img-2, .block-7__right--img-3, .block-7__right--img-1, .block-7__right--img-5, .block-7__right--img-6').removeClass('img-active');
	}
	jQuery('.block-7__selection--button-4').click(function(){
		jQuery('.block-7__right--img-4').css({'animation':'0.5s open-img ease-in-out'});
		jQuery('.block-7__right--img-2, .block-7__right--img-3, .block-7__right--img-1, .block-7__right--img-5, .block-7__right--img-6').css({'animation':'0.5s close-img ease-in-out'});
		setTimeout(click4, 0);
		setTimeout(clickRemove4, 500);
	});

	// Пятая картинка
	function click5(){
		jQuery('.block-7__right--img-5').addClass('img-active');
	}
	function clickRemove5(){
		jQuery('.block-7__right--img-2, .block-7__right--img-3, .block-7__right--img-4, .block-7__right--img-1, .block-7__right--img-6').removeClass('img-active');
	}
	jQuery('.block-7__selection--button-5').click(function(){
		jQuery('.block-7__right--img-5').css({'animation':'0.5s open-img ease-in-out'});
		jQuery('.block-7__right--img-2, .block-7__right--img-3, .block-7__right--img-4, .block-7__right--img-1, .block-7__right--img-6').css({'animation':'0.5s close-img ease-in-out'});
		setTimeout(click5, 0);
		setTimeout(clickRemove5, 500);
	});

	// Шестая картинка
	function click6(){
		jQuery('.block-7__right--img-6').addClass('img-active');
	}
	function clickRemove6(){
		jQuery('.block-7__right--img-2, .block-7__right--img-3, .block-7__right--img-4, .block-7__right--img-5, .block-7__right--img-1').removeClass('img-active');
	}
	jQuery('.block-7__selection--button-6').click(function(){
		jQuery('.block-7__right--img-6').css({'animation':'0.5s open-img ease-in-out'});
		jQuery('.block-7__right--img-2, .block-7__right--img-3, .block-7__right--img-4, .block-7__right--img-5, .block-7__right--img-1').css({'animation':'0.5s close-img ease-in-out'});
		setTimeout(click6, 0);
		setTimeout(clickRemove6, 500);
	});


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

	$('a[href^="#antennas"]').on('click',function(){
	event.preventDefault();
    var sc = $('a[href^="#antennas"]').attr("href"),
        dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 1000);
	});

	$('a[href^="#why"]').on('click',function(){
	event.preventDefault();
    var sc = $('a[href^="#why"]').attr("href"),
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