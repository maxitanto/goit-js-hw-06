const inputRef = document.querySelector('#validation-input')
const inputValidLength = Number(inputRef.dataset.length);

inputRef.addEventListener('blur', onInputValidation);

function onInputValidation(evt) {
	const inputLength = evt.currentTarget.value.length;

	if (inputLength === inputValidLength) {
		inputRef.classList.remove('invalid');
		inputRef.classList.add('valid'); 
	} else {
		inputRef.classList.remove('valid');
		inputRef.classList.add('invalid');
	}
}