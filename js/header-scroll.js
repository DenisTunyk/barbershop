window.onscroll = () => chengeHeaderBackground();

document.querySelector;

function chengeHeaderBackground() {
	const header = document.querySelector("[data-header]");
	const headerOfsetTriger = header.offsetTop;
	const pageOffset = window.pageYOffset;

	if (pageOffset > headerOfsetTriger) {
		header.classList.add("no-transparency");
	} else {
		header.classList.remove("no-transparency");
	}
}
