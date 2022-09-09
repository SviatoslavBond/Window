const validationInputsForNum = (inputFields) => {
	inputFields.forEach(item => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/\D/gi, '');
		});
	});
};
export default validationInputsForNum;