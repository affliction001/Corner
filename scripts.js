'use strict';

const button = document.querySelector('#button');

button.addEventListener('click', function(e) {
	const radius = document.querySelector('#R').value;
	const corner = document.querySelector('#v').value;

	const leng = +radius * Math.sqrt(2 - (2 / Math.cos(+corner)));

	document.querySelector('.output').textContent = leng;
});