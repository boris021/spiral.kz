var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 18,
	watchOverflow: true,
	loop: true,
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
			slidesPerView: 2.5,
			spaceBetween: 20
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 18,
			loop: false,
		}
	}
});