
const modals = (setWindow) => {
	function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {

		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector);
		const widthWindow = document.querySelector('#width');
		const heightWindow = document.querySelector('#height');

		trigger.forEach(el => {
			el.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}
				if (el.classList.contains('popup_calc_button')) {
					// [widthWindow, heightWindow].forEach(input => {
					// 	if (input.value === '') {
					// 		input.style.border = '1px solid red';
					// 		return;
					// 	}
					// });
					if (widthWindow.value === '') {
						widthWindow.style.border = '1px solid red';

					} if (heightWindow.value === '') {
						heightWindow.style.border = '1px solid red';
						return;
					}
				}
				closeAllModal();
				modal.style.display = 'block';
				document.body.classList.add('modal-open');

			});
		});
		[widthWindow, heightWindow].forEach(input => {
			input.addEventListener('input', function () {
				this.style.border = '1px solid #ccc';
			});
		});
		close.addEventListener('click', (e) => {
			closeAllModal();
			document.body.classList.remove('modal-open');
		});

		modal.addEventListener('click', (event) => {
			const target = event.target;
			if (target === modal && closeClickOverlay) {
				closeAllModal();
				document.body.classList.remove('modal-open');
			}
		});
	}

	function showModalByTime(selector, time) {
		setTimeout(() => {
			document.querySelector(selector).style.display = 'block';
			document.body.classList.add('modal-open');
		}, time);
	}
	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
	// showModalByTime('.popup', 60000);

};
function closeAllModal() {
	document.querySelectorAll('[data-modal]').forEach(item => {
		item.style.display = 'none';
	});
}
export { closeAllModal };
export default modals;
