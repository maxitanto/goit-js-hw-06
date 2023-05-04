const inputRef = document.querySelector('#validation-input')



inputRef.addEventListener('blur', onInputValidation);

function onInputValidation(evt) {
	const inputLength = evt.currentTarget.value.length;
	const inputInitialValue = 6;

	if (inputLength < inputInitialValue) {
		inputRef.classList.add('invalid'); 
	} else {
		inputRef.classList.remove('invalid');
		inputRef.classList.add('valid');
	}
}