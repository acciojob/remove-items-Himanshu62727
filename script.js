//your JS code here. If required.

const allColor = document.querySelector('#colorSelect');
const btn = document.querySelector('input');

btn.addEventListener('click', () => {
	const currentValue = allColor.selectedIndex;
	if (currentValue != -1) {
		allColor.remove(currentValue)
	}
});