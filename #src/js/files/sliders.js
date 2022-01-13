var swiper = new Swiper(".mySwiper", {
	slidesPerView: 5,
	spaceBetween: 25,
	loop: true,
	// watchOverflow: true,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction"
	},
	navigation: {
		prevEl: ".swiper-button-prev",
		nextEl: ".swiper-button-next"
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 15
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 30,
			// loop: false
		}
	}
});