(function(){

	const elem = document.querySelector('.products__list');
	const iso = new Isotope( elem, {
  	itemSelector: '.products__item',
  	filter: '.new'
	});

	const controls = document.querySelectorAll(".filter__link");
	const active = "filter__item--active";

	controls.forEach(function (control) {
		control.addEventListener('click', function(e){
			e.preventDefault();

			const filterName = control.getAttribute("data-filter");

			controls.forEach(function(link){
				link.closest(".filter__item").classList.remove(active);
			})


			control.closest('.filter__item').classList.add(active);

			iso.arrange({
				filter: `.${filterName}`
			})

		})
	})

}())