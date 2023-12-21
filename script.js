

let clickCount = 0;
let colorIndex = 0;
const button = document.getElementById("clickButton");
const clickCountDisplay = document.getElementById("clickCount");

const colors = ["yellow", "violet", "pink"];

function buttonClick() {

    clickCount++;
    clickCountDisplay.textContent = clickCount;

    button.style.backgroundColor = colors[colorIndex];

    colorIndex = (colorIndex + 1) % colors.length;
}

