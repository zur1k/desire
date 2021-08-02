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

})