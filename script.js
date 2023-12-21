 let clickCount = 0;
    let colorIndex = 0;
    const button = document.getElementById("clickButton");
    const clickCountDisplay = document.getElementById("clickCount");

    // Array of colors to cycle through
    const colors = ["yellow", "violet", "pink"];

    // Function to handle button click
    function buttonClick() {
        // Increment click count
        clickCount++;
        // Update click count display
        clickCountDisplay.textContent = clickCount;

        // Change button color
        button.style.backgroundColor = colors[colorIndex];

        // Cycle through colors
        colorIndex = (colorIndex + 1) % colors.length;
    }
