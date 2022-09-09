import validationInputsForNum from "./validationInputsForNum";

const changeParamWindow = (setWindow) => {
	const widthWindow = document.querySelector('#width');
	const heightWindow = document.querySelector('#height');
	const formWindow = document.querySelectorAll('[data-balcon]');
	const typeWindow = document.querySelector('#view_type');
	const profileWindow = document.querySelectorAll('.checkbox');
	validationInputsForNum([widthWindow, heightWindow]);

	const bindActionToParametrs = (triggerSelector) => {
		const trigger = document.querySelectorAll(triggerSelector);
		trigger.forEach(el => {
			el.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}
				switch (triggerSelector) {
					case '.popup_calc_button':
						setWindow.width = widthWindow.value;
						setWindow.height = heightWindow.value;
						formWindow.forEach(item => {
							if (item.classList.contains('do_image_more')) {
								setWindow.form = item.getAttribute('data-balcon');
							}
						});
						break;
					case '.popup_calc_profile_button':
						setWindow.type = typeWindow.value;
						break;
				}
			});
		});
		profileWindow.forEach(item => {
			item.addEventListener('change', function () {
				for (let i = 0; i < profileWindow.length; i++) {
					profileWindow[i].checked = false;
				}
				this.checked = true;
				if (this == profileWindow[0]) setWindow.profile = 'Холодное';
				if (this == profileWindow[1]) setWindow.profile = 'Теплое';
			});
		});
	};
	bindActionToParametrs('.popup_calc_button');
	bindActionToParametrs('.popup_calc_profile_button');

};
export default changeParamWindow;