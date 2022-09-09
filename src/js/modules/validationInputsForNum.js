const validationInputsForNum = (inputFields) => {
	inputFields.forEach(item => {
		item.value = item.value.replace(/\D/gi, '');
	});
};
export default validationInputsForNum;