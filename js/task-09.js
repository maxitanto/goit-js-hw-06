const btnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');
const bodyRef = document.querySelector('body');

btnRef.addEventListener('click', onChangeColor);

function onChangeColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
  
  spanRef.textContent = `- ${bodyRef.style.backgroundColor}`
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

