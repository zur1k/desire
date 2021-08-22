$(function () {
	// right side menu - чтобы добавлялся и убирался класс (close)
	$('.header__btn').on('click', function () {
		$('.rightside-menu').removeClass('rightside-menu--close')
	})
	$('.rightside-menu__close').on('click', function () {
		$('.rightside-menu').addClass('rightside-menu--close')
	})

	$('.header__btn-menu').on('click', function () {
		$('.menu').toggleClass('menu--open')
	})
	//вставляем  эелемент в другой блок для адаптации. чтоб соблюдать правильный порядок. (изначально был works-path__items-box с 2мя item, и отдельно еще элемент works-path__item--measuring  )  - для правильного порядка через метод флекс бокс объединили в один див

	if ($(window).width() < 651) {
		$('.works-path__item--measuring').appendTo($('.works-path__items-box'));
	};

	//slick-slider 
	$('.top__slider').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true
	})
	$('.contact-slider').slick({
		slidesToShow: 10,
		slidesToScroll: 10,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 1700,
				settings: {
					slidesToShow: 8,
					slidesToScroll: 8,

				}
			},
			{
				breakpoint: 1511,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
				}
			},
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			},
			{
				breakpoint: 841,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 551,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{

				breakpoint: 376,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}

			}


		]
	})
	$('.article-slider__box').slick({
		prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/arrow-slide-left.svg" alt="arrow-left"></button>Previous</button>',
		nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/arrow-slide-right.svg" alt="arrow-right"></button>Previous</button>'


	})

	//MixItUp - делаем калерею по фильтрам и категориям 
	var mixer = mixitup('.gallery__inner', {
		load: {
			filter: '.living'
		}
	});

})

