const modals = () => {
	function bindModal(triggerSelector, modalSelector, closeSelector) {
		const trigger = document.querySelectorAll(triggerSelector),
			 modal = document.querySelector(modalSelector),
			 close = document.querySelector(closeSelector);
		trigger.forEach(el => {
			el.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}
				modal.style.display = 'block';
				document.body.classList.add('modal-open');
			});
		});
		close.addEventListener('click', (e) => {
				modal.style.display = 'none';
				document.body.classList.remove('modal-open');
		});
		modal.addEventListener('click', (event) => {
			const target = event.target;
			if (target === modal || target.classList.contains('popup_close')) {
				modal.style.display = 'none';
				document.body.classList.remove('modal-open');
			}
		});
	}
	function showModalByTime(selector,time) {
		setTimeout(() => {
			document.querySelector(selector).style.display = 'block';
			document.body.classList.add('modal-open');
		}, time);
	}
	
	bindModal('.popup_engineer_btn','.popup_engineer','.popup_engineer .popup_close');
	bindModal('.phone_link','.popup','.popup .popup_close');
	// showModalByTime('.popup', 60000);
};
export default modals;