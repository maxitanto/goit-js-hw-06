const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onAddName);

function onAddName(evt) {
	if (evt.currentTarget.value === "") {
		nameRef.textContent = "Anonymous";
	} else {
		nameRef.textContent = evt.currentTarget.value;
	}
} 