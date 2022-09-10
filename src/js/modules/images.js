const images = () => {
	const imageBox = document.querySelector('.works');
	const showImage = document.createElement('div');
	const image = document.createElement('img');
	image.style.cssText = `
	max-width: 100%;
	max-height:100%;
	`;
	showImage.classList.add('popup');
	imageBox.appendChild(showImage);
	showImage.appendChild(image);
	showImage.style.justifyContent = 'center';
	showImage.style.alignItems = 'center';

	imageBox.addEventListener('click', function (e) {
		e.preventDefault();
		const target = e.target;
		if (target.classList.contains('preview')) {
			const href = target.parentNode.getAttribute('href');
			image.setAttribute('src', href);
			showImage.style.display = 'flex';
			document.body.classList.add('modal-open');
		}
		if (target && target.classList.contains('popup')) {
			showImage.style.display = 'none';
			document.body.classList.remove('modal-open');
		}
	});

};
export default images;