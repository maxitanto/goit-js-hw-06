const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onLogin);

function onLogin(evt) {
	evt.preventDefault();

	const { email, password } = evt.currentTarget.elements;
	const userData = {};

	if (password.value === "" || email.value === "") {
		alert("Warning! All fields is required!")
	} else {
		userData.email = email.value;
		userData.password = password.value;
		
		console.log(userData);

		formRef.reset();
	}
}