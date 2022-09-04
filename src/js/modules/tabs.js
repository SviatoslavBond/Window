function tabs(headerSelector, tabSelector, contentSelector, aciveClass) {
	const header = document.querySelector(headerSelector),
		tab = document.querySelectorAll(tabSelector),
		content = document.querySelectorAll(contentSelector);
	function hideTabContetn() {
		content.forEach(item => {
			item.style.display = 'none';
		});
		tab.forEach(item => {
			item.classList.remove(aciveClass);
		});

	}
	function showTabContent(i = 0) {
		content[i].style.display = 'block';
		tab[i].classList.add(aciveClass);
	}
	hideTabContetn();
	showTabContent();

	header.addEventListener('click', function (e) {
		// console.log(this);
		// console.log(e.currentTarget);
		console.log(e.target);

		const target = e.target;
		if (target.classList.contains(tabSelector.replace(/\./, '')) || (this === header)) {
			tab.forEach((item, i) => {
				if (item == target || target.parentNode == item) {
					hideTabContetn();
					showTabContent(i);
				}
			});
		}

	});
}
export default tabs;
// target.parentNode.classList.contains(tabSelector.replace(/\./, ''))