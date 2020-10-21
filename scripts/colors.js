(function(){
	const black = document.querySelector(".colorBlack")
	const white = document.querySelector(".colorWhite")
	const green = document.querySelector(".colorGreen")
	const blue = document.querySelector(".colorBlue")
	const red = document.querySelector(".colorRed")
	const active = document.querySelector(".tshirt-active")
	const tshirt = document.querySelector(".tshirt")

	black.addEventListener("click", function(e){
	e.preventDefault();
	tshirt.classList.add("active")
	})

	closingBtn.addEventListener("click", function(e){
		e.preventDefault();
		sidebar.classList.remove("sidebar--opened")
	})	
})();

