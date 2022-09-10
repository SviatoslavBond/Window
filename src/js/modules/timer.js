const timer = (selectorTimer, deadline) => {

	const end = new Date(deadline);

	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}
	function setClock(selectorTimer) {
		let day, hour, minut, second;
		const timer = document.querySelector(selectorTimer),
			seconds = timer.querySelector('#seconds'),
			minuts = timer.querySelector('#minutes'),
			hours = timer.querySelector('#hours'),
			days = timer.querySelector('#days');

		let timerId = setInterval(updateClock, 1000);
		updateClock();

		function updateClock() {
			let timeDif = Date.parse(end) - Date.now();
			second = Math.floor(timeDif / 1000) % 60;
			minut = Math.floor(timeDif / 60000) % 60;
			hour = Math.floor(timeDif / 3600000) % 24;
			day = Math.floor(timeDif / 86400000);
			seconds.innerHTML = getZero(second);
			minuts.innerHTML = getZero(minut);
			hours.innerHTML = getZero(hour);
			days.innerHTML = getZero(day);
			if (timeDif <= 0) {
				seconds.innerHTML = '00';
				minuts.innerHTML = '00';
				hours.innerHTML = '00';
				days.innerHTML = '00';
				clearInterval(timerId);
			}
		}
	}
	setClock(selectorTimer);
};
export default timer;