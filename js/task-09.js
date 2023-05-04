const btnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');
const bodyRef = document.querySelector('body');

btnRef.addEventListener('click', onChangeColor);

function onChangeColor() {
  spanRef.textContent = `- ${getRandomHexColor()}`

  bodyRef.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

