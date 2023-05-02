const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');

let counterValue = 0;

decrementRef.addEventListener('click', () => {
	valueRef.textContent = counterValue -= 1;
});

incrementRef.addEventListener('click', () => {
	valueRef.textContent = counterValue += 1;
});


