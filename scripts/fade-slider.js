(function(){
	
	const slider = document.querySelectorAll('.fade-slider__item')
	const active = "fade-slider__item--visible"
	let index = 0;

	setInterval(function(){
		slider[index].classList.remove(active);
		index++;

		if (index + 1>slider.length) {
				index = 0;
		} 

		slider[index].classList.add(active);


	}, 3000)

}())