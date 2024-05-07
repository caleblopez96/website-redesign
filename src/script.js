const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
	// main.classList.toggle("blur");
	// footer.classList.toggle("blur");
}
