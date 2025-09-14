//your JS code here. If required.

const allColor = document.querySelector('#colorSelect');
const btn = document.querySelector('input');

btn.addEventListener('click', () => {
	allColor.remove([0]);
});