'use strict';

const button = document.querySelector('#button');

button.addEventListener('click', function(e) {
	const radius = document.querySelector('#R').value;
	const corner = document.querySelector('#v').value;
	
	const leng = 2 * radius * Math.sin((corner/2 * Math.PI / 180));

	document.querySelector('.output').textContent = Math.round(leng * 10) / 10;
});