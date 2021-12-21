$(document).ready(function(){

	// Изменение цвета ссылки при нажатии
	$('.switch').click(function(event){
		event.preventDefault();
	});
	$('#switch-1').click(function(){
		$('#switch-1').addClass('link-active');
		$('#switch-2, #switch-3, #switch-4').removeClass('link-active');
	});
	$('#switch-2').click(function(){
		$('#switch-2').addClass('link-active');
		$('#switch-1, #switch-3, #switch-4').removeClass('link-active');
	});
	$('#switch-3').click(function(){
		$('#switch-3').addClass('link-active');
		$('#switch-1, #switch-2, #switch-4').removeClass('link-active');
	});
	$('#switch-4').click(function(){
		$('#switch-4').addClass('link-active');
		$('#switch-1, #switch-2, #switch-3').removeClass('link-active');
	});


	// Переключение вкладок
	// Первый раздел
	function clickSwitch1(){
		$('#item-1').addClass('active');
	}
	function clickSwitch1remove(){
		$('#item-2, #item-3, #item-4').removeClass('active');
	}
	$('#switch-1').click(function(){
		// Анимация открытия раздела
		$('.item-1__left-column').css({'animation':'1.5s open-item-1-left ease-in-out'});
		$('.item-1__right-column').css({'animation':'1s open-item-1-right ease-in-out'});
		$('.item-1__blue-bg').css({'animation':'1s open-item-1-blue-bg ease-in-out'});
		
		// Анимация закрытия второго раздела
		$('#item-2').css({'animation':'0.5s close-items ease-in-out'});
		// Анимация закрытия третьего раздела
		$('#item-3').css({'animation':'0.5s close-items ease-in-out'});
		// Анимация закрытия четвертого раздела
		$('#item-4').css({'animation':'0.5s close-items ease-in-out'});

		setTimeout(clickSwitch1, 0);
		setTimeout(clickSwitch1remove, 500);
	});

	// Второй раздел
	function clickSwitch2(){
		$('#item-2').addClass('active');
		$('#item-3, #item-4').removeClass('active');
	}
	function clickSwitchRemoveItem1(){
		$('#item-1').removeClass('active');
	}
	$('#switch-2').click(function(){
		// Анимация открытия второго раздела
		$('#item-2').css({'animation':'0.5s open-items ease-in-out'});

		// Анимация закрытия первого раздела
		$('.item-1__left-column').css({'animation':'1s close-item-1-left ease-in-out'});
		$('.item-1__right-column').css({'animation':'1s close-item-1-right ease-in-out'});
		$('.item-1__blue-bg').css({'animation':'1s close-item-1-blue-bg ease-in-out'});
		// Анимация закрытия третьего раздела
		$('#item-3').css({'animation':'0.5s close-items ease-in-out'});
		// Анимация закрытия четвертого раздела
		$('#item-4').css({'animation':'0.5s close-items ease-in-out'});

		setTimeout(clickSwitch2, 500);
		setTimeout(clickSwitchRemoveItem1, 1000);
	});

	// Третий раздел
	function clickSwitch3(){
		$('#item-3').addClass('active');
		$('#item-2, #item-4').removeClass('active');
	}
	function clickSwitchRemoveItem1(){
		$('#item-1').removeClass('active');
	}
	$('#switch-3').click(function(){
		// Анимация открытия третьего раздела
		$('#item-3').css({'animation':'0.5s open-items ease-in-out'});

		// Анимация закрытия первого раздела
		$('.item-1__left-column').css({'animation':'1s close-item-1-left ease-in-out'});
		$('.item-1__right-column').css({'animation':'1s close-item-1-right ease-in-out'});
		$('.item-1__blue-bg').css({'animation':'1s close-item-1-blue-bg ease-in-out'});
		
		// Анимация закрытия второго раздела
		$('#item-2').css({'animation':'0.5s close-items ease-in-out'});
		// Анимация закрытия четвертого раздела
		$('#item-4').css({'animation':'0.5s close-items ease-in-out'});

		setTimeout(clickSwitch3, 500);
		setTimeout(clickSwitchRemoveItem1, 1000);
	});

	// Четвертый раздел
	function clickSwitch4(){
		$('#item-4').addClass('active');
		$('#item-2, #item-3').removeClass('active');
	}
	function clickSwitchRemoveItem1(){
		$('#item-1').removeClass('active');
	}
	$('#switch-4').click(function(){
		// Анимация открытия четвертого раздела
		$('#item-4').css({'animation':'0.5s open-items ease-in-out'});

		// Анимация закрытия первого раздела
		$('.item-1__left-column').css({'animation':'1s close-item-1-left ease-in-out forwards'});
		$('.item-1__right-column').css({'animation':'1s close-item-1-right ease-in-out 1s forwards'});
		$('.item-1__blue-bg').css({'animation':'2s close-item-1-blue-bg-2 ease-in-out forwards'});
		
		// Анимация закрытия второго раздела
		$('#item-2').css({'animation':'0.5s close-items ease-in-out'});
		// Анимация закрытия третьего раздела
		$('#item-3').css({'animation':'0.5s close-items ease-in-out'});

		setTimeout(clickSwitch4, 500);
		setTimeout(clickSwitchRemoveItem1, 2000);
	});



	// Изменение стилей ссылок для страниц второго раздела
	$('.page-link').click(function(event){
		event.preventDefault();
	});
	$('.page-link-wrap .prev, .page-link-wrap .next').click(function(event){
		event.preventDefault();
	});

	let i = 1;

	$('.page-link-wrap .next').click(function(){
		if(i < 4){
			i++;
		}
		if(i <= 4 && i == 2){
			$('#page-link-2').click();
		} else if (i <= 4 && i == 3){
			$('#page-link-3').click();
		} else if (i <= 4 && i == 4){
			$('#page-link-4').click();
		}
		console.log(i);
	});
	$('.page-link-wrap .prev').click(function(){
		if(i > 1){
			i--;
		}
		if(i >= 0 && i == 1){
			$('#page-link-1').click();
		} else if (i >= 0 && i == 2){
			$('#page-link-2').click();
		} else if (i >= 0 && i == 3){
			$('#page-link-3').click();
		}
		console.log(i);
	});

	$('#page-link-1').text('1/4');
	$('#page-link-1').click(function(){
		i = 1;
		$('#page-link-1').addClass('page-link-active');
		$('#page-link-1').text('1/4');
		$('#page-link-2, #page-link-3, #page-link-4').empty();
		$('#page-link-2, #page-link-3, #page-link-4').removeClass('page-link-active');
	});
	$('#page-link-2').click(function(){
		i = 2;
		$('#page-link-2').addClass('page-link-active');
		$('#page-link-2').text('2/4');
		$('#page-link-1, #page-link-3, #page-link-4').empty();
		$('#page-link-1, #page-link-3, #page-link-4').removeClass('page-link-active');
	});
	$('#page-link-3').click(function(){
		i = 3;
		$('#page-link-3').addClass('page-link-active');
		$('#page-link-3').text('3/4');
		$('#page-link-1, #page-link-2, #page-link-4').empty();
		$('#page-link-1, #page-link-2, #page-link-4').removeClass('page-link-active');
	});
	$('#page-link-4').click(function(){
		i = 4;
		$('#page-link-4').addClass('page-link-active');
		$('#page-link-4').text('4/4');
		$('#page-link-1, #page-link-2, #page-link-3').empty();
		$('#page-link-1, #page-link-2, #page-link-3').removeClass('page-link-active');
	});

	// Переключение страниц второго раздела
	$('#page-link-1').click(function(){
		$('.item-2__page-1').addClass('item-2__page-active');
		$('.item-2__page-2, .item-2__page-3, .item-2__page-4').removeClass('item-2__page-active');
		// Анимация открытия страниц второго раздела
		$('.item-2__page-1--right-column img').css({'animation':'0.2s open-page ease-in-out'});
	});
	$('#page-link-2').click(function(){
		$('.item-2__page-2').addClass('item-2__page-active');
		$('.item-2__page-1, .item-2__page-3, .item-2__page-4').removeClass('item-2__page-active');
		// Анимация открытия страниц второго раздела
		$('.item-2__page-2--right-column img').css({'animation':'0.2s open-page ease-in-out'});
	});
	$('#page-link-3').click(function(){
		$('.item-2__page-3').addClass('item-2__page-active');
		$('.item-2__page-2, .item-2__page-1, .item-2__page-4').removeClass('item-2__page-active');
		// Анимация открытия страниц второго раздела
		$('.item-2__page-3--right-column img').css({'animation':'0.2s open-page ease-in-out'});
	});
	$('#page-link-4').click(function(){
		$('.item-2__page-4').addClass('item-2__page-active');
		$('.item-2__page-2, .item-2__page-1, .item-2__page-3').removeClass('item-2__page-active');
		// Анимация открытия страниц второго раздела
		$('.item-2__page-4--right-column img').css({'animation':'0.2s open-page ease-in-out'});
	});


	// Обработчик цен в четвертом разделе

	let defaultPrice = 8520;
	let routerPrice = 0;
	let antennaPrice = 0;
	let totalPrice = 0;


	function calculatePrice(){
		routerPrice = $('input[name=router-radio]:checked','#item-4__table').val();
		antennaPrice = $('input[name=antenna-radio]:checked','#item-4__table').val();
		totalPrice = +routerPrice + +antennaPrice + +defaultPrice;
		$('.item-4__head--sum').text(totalPrice);
		$('.item-4__head--sum').append('<p>РУБ</p>');
	};
	calculatePrice();
	$('#item-4__table input').change(function(){
		calculatePrice();
	});

	// Смена картинок при выборе радиокнопки
	// Роутер
	$('.item-4__router--tariff p').text('Отсутствует');
	function radioSelect(){
		$('#router-2, #router-3').removeClass('table-active');
	}
	function radioSelect1Add(){
		$('#router-1').addClass('table-active');
	}
	$('.radio-button-1').click(function(){
		// Анимация появления первой картинки
		$('#router-1').css({'animation':'0.5s add-img ease-in-out'});

		// Анимация исчезновения второй картинки
		$('#router-2').css({'animation':'0.5s remove-img ease-in-out'});
		// Анимация исчезновения третьей картинки
		$('#router-3').css({'animation':'0.5s remove-img ease-in-out'});

		setTimeout(radioSelect, 500);
		setTimeout(radioSelect1Add, 0);
		$('.item-4__router--tariff p').text('Отсутствует');
	});

	function radioSelect2(){
		$('#router-1, #router-3').removeClass('table-active');
	}
	function radioSelect2Add(){
		$('#router-2').addClass('table-active');
	}
	$('.radio-button-2').click(function(){
		// Анимация появления второй картинки
		$('#router-2').css({'animation':'0.5s add-img ease-in-out'});

		// Анимация исчезновения первой картинки
		$('#router-1').css({'animation':'0.5s remove-img ease-in-out'});
		// Анимация исчезновения третьей картинки
		$('#router-3').css({'animation':'0.5s remove-img ease-in-out'});

		setTimeout(radioSelect2, 500);
		setTimeout(radioSelect2Add, 0);
		$('.item-4__router--tariff p').empty();
	});

	function radioSelect3(){
		$('#router-1, #router-2').removeClass('table-active');
	}
	function radioSelect3Add(){
		$('#router-3').addClass('table-active');
	}
	$('.radio-button-3').click(function(){
		// Анимация появления третьей картинки
		$('#router-3').css({'animation':'0.5s add-img ease-in-out'});

		// Анимация исчезновения первой картинки
		$('#router-1').css({'animation':'0.5s remove-img ease-in-out'});
		// Анимация исчезновения второй картинки
		$('#router-2').css({'animation':'0.5s remove-img ease-in-out'});

		setTimeout(radioSelect3, 500);
		setTimeout(radioSelect3Add, 0);
		$('.item-4__router--tariff p').empty();
	});

	// Антенна
	function antennaSelect(){
		$('#antenna-2, #antenna-3, #antenna-4').removeClass('table-active');
	}
	function antennaSelect1Add(){
		$('#antenna-1').addClass('table-active');
	}
	$('.antenna-radio-1').click(function(){
		// Анимация появления первой картинки
		$('#antenna-1').css({'animation':'0.5s add-img ease-in-out'});

		// Анимация исчезновения второй картинки
		$('#antenna-2').css({'animation':'0.5s remove-img ease-in-out'});
		// Анимация исчезновения третьей картинки
		$('#antenna-3').css({'animation':'0.5s remove-img ease-in-out'});
		// Анимация исчезновения четвертой картинки
		$('#antenna-4').css({'animation':'0.5s remove-img ease-in-out'});

		setTimeout(antennaSelect, 500);
		setTimeout(antennaSelect1Add, 0);
	});

	function antennaSelect2(){
		$('#antenna-1, #antenna-3, #antenna-4').removeClass('table-active');
	}
	function antennaSelect2Add(){
		$('#antenna-2').addClass('table-active');
	}
	$('.antenna-radio-2').click(function(){
		// Анимация появления второй картинки
		$('#antenna-2').css({'animation':'0.5s add-img ease-in-out'});

		// Анимация исчезновения первой картинки
		$('#antenna-1').css({'animation':'0.5s remove-img ease-in-out'});
		// Анимация исчезновения третьей картинки
		$('#antenna-3').css({'animation':'0.5s remove-img ease-in-out'});
		// Анимация исчезновения четвертой картинки
		$('#antenna-4').css({'animation':'0.5s remove-img ease-in-out'});

		setTimeout(antennaSelect2, 500);
		setTimeout(antennaSelect2Add, 0);
	});

	function antennaSelect3(){
		$('#antenna-2, #antenna-1, #antenna-4').removeClass('table-active');
	}
	function antennaSelect3Add(){
		$('#antenna-3').addClass('table-active');
	}
	$('.antenna-radio-3').click(function(){
		// Анимация появления третьей картинки
		$('#antenna-3').css({'animation':'0.5s add-img ease-in-out'});

		// Анимация исчезновения второй картинки
		$('#antenna-2').css({'animation':'0.5s remove-img ease-in-out'});
		// Анимация исчезновения первой картинки
		$('#antenna-1').css({'animation':'0.5s remove-img ease-in-out'});
		// Анимация исчезновения четвертой картинки
		$('#antenna-4').css({'animation':'0.5s remove-img ease-in-out'});

		setTimeout(antennaSelect3,500);
		setTimeout(antennaSelect3Add, 0);
	});

	function antennaSelect4(){
		$('#antenna-2, #antenna-3, #antenna-1').removeClass('table-active');
	}
	function antennaSelect4Add(){
		$('#antenna-4').addClass('table-active');
	}
	$('.antenna-radio-4').click(function(){
		// Анимация появления четвертой картинки
		$('#antenna-4').css({'animation':'0.5s add-img ease-in-out'});

		// Анимация исчезновения второй картинки
		$('#antenna-2').css({'animation':'0.5s remove-img ease-in-out'});
		// Анимация исчезновения первой картинки
		$('#antenna-1').css({'animation':'0.5s remove-img ease-in-out'});
		// Анимация исчезновения третьей картинки
		$('#antenna-3').css({'animation':'0.5s remove-img ease-in-out'});

		setTimeout(antennaSelect4,500);
		setTimeout(antennaSelect4Add, 0);
	});

});