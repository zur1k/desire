$(function () {
	// right side menu - чтобы добавлялся и убирался класс (close)
	$('.header__btn').on('click', function () {
		$('.rightside-menu').removeClass('rightside-menu--close')
	})
	$('.rightside-menu__close').on('click', function () {
		$('.rightside-menu').addClass('rightside-menu--close')
	})
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

	})

	//MixItUp - делаем калерею по фильтрам и категориям 
	var mixer = mixitup('.gallery__inner', {
		load: {
			filter: '.living'
		}
	});

})