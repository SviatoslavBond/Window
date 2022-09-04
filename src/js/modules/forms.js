import { post } from "jquery";

const forms = () => {
	const forms = document.querySelectorAll('form'),
		input = document.querySelectorAll('input'),
		message = {
			loading: 'Загрузка...',
			succses: 'Спасибо мы скоро с вами свяжемся',
			fail: 'Что-то пошло не так...'
		};
	const postDate = async (url, data) => {
		document.querySelector('.status').textContent = message.loading;
		let res = await fetch(url, {
			method: 'POST',
			body: data,
		});
		return await res.text();
	};
	const clearInputs = () => {
		input.forEach(item => {
			item.value = '';
		});
	};
	forms.forEach(form => {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			const statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			form.appendChild(statusMessage);

			const formDate = new FormData(form);
			postDate('assets/server.php', formDate)
				.then(res => {
					console.log(res);
					statusMessage.textContent = message.succses;
				}).catch(er => {
					statusMessage.textContent = message.fail;
				}).finally(() => {
					clearInputs();
					setTimeout(() => {
						statusMessage.remove();
					}, 3000);
				});
		});
	});
	console.log(forms);
}
export default forms;