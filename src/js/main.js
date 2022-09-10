import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeParamWindow from './modules/changeParamWindow';
import timer from './modules/timer';
import images from './modules/images';


document.addEventListener('DOMContentLoaded', () => {
	'use strict';
	const setingsWindow = {};
	changeParamWindow(setingsWindow);
	modals();
	tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
	tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
	tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
	forms(setingsWindow);
	timer('#timer', '2022,09,19');
	images();
});
