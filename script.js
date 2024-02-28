let width = document.getElementById("width");
let height = document.getElementById("height");

width.innerText = "window width: " + window.innerWidth;
	height.innerText = "window height: " + window.innerHeight;

window.addEventListener("resize", function() {
	width.innerText = "window width: " + window.innerWidth;
	height.innerText = "window height: " + window.innerHeight;
})