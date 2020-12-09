new Swiper ('.image-swiper', {

	navigation: {
		prevEl:'.swiper-button-prev',
		nextEl:'.swiper-button-next',

	},

	pagination: {

	el: '.swiper-pagination',

	},

	

	slidesPerGroup: 1,

	slidesPerView: 1,

	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// 	draggable: true,

	// },

	preloadImages:false,

	lazy: {
		loadOntransitionStart: false,
		loadPrevNext: false,
	},
});

new Swiper ('.parallax-swiper', {

	parallax: true,
	speed: 1500,

		navigation: {
		prevEl:'.swiper-button-prev',
		nextEl:'.swiper-button-next',

	},

	 keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

});