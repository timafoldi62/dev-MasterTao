const burger = document.querySelector(".hamburger");
burger.addEventListener("click", function () {
	burger.classList.toggle("is-active");
});

// slider
$(".first-screen-slider").slick({
	dots: true,
	infinite: true,
	appendArrows: ".first-screen-nav",
	responsive: [
		{
			breakpoint: 991,
			settings: {
				arrows: false,
			},
		},
	],
});

//upload-file

document.getElementById("fileInput").onchange = function () {
	//short name
	// document.getElementById('file-name').innerHTML = this.files[0].name;
	document.getElementById("file-name").innerHTML = this.value;
};

const checkButton = document.querySelectorAll('[type="checkbox"]');

checkButton.forEach((item, index) => {
	/*item.closest(".input-column").style.marginBottom = "-10px";*/
	index === 0 ? item.closest(".input-box").classList.add("pos-checkbox") : null;
});
