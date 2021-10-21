
$('.mainslider').slick({
	slidesToScroll: 1,
	autoplay: false,
	dots: false,
	infinite: true,
	autoplaySpeed: 3000,
	slidesToShow: 1,
	// centerMode: true,
	responsive: [
		{
			breakpoint: 990,
			settings: {
				arrows: true,
				// centerMode: true,
				centerPadding: '0px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows: true,
				// centerMode: true,
				centerPadding: '0px',
				slidesToShow: 1
			}
		}
	]
});


$('.slideradvantages').slick({
	slidesToScroll: 1,
	autoplay: false,
	arrows: true,
	dots: false,
	infinite: true,
	autoplaySpeed: 3000,
	slidesToShow: 3,
	responsive: [
		{
			breakpoint: 990,
			settings: {
				arrows: false,
				// centerMode: true,
				centerPadding: '0px',
				slidesToShow: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '10px',
				slidesToShow: 1
			}
		}
	]
});

