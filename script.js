// Initialize click count and color index
let clickCount = 0;
let colorIndex = 0;
const button = document.getElementById("clickButton");
const clickCountDisplay = document.getElementById("clickCount")

const colors = ["yellow", "violet", "pink"];

function buttonClick() {
    button.style.backgroundColor = colors[colorIndex];

    colorIndex = (colorIndex + 1) % colors.length;

    clickCount++;

    clickCountDisplay.textContent = clickCount;
}
button.addEventListener("click", buttonClick);

