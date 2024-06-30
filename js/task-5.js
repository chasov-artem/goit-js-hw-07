function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeButton = document.querySelector(".change-color");
const bodyBack = document.querySelector(".color");


changeButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  bodyBack.textContent = randomColor;
})