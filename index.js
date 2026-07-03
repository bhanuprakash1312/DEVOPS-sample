// Initialize the internal counter tracking variable
let count = 0;

// Grab references to the HTML elements
const valueDisplay = document.getElementById('counter-value');
const decreaseBtn = document.getElementById('decrease-btn');
const resetBtn = document.getElementById('reset-btn');
const increaseBtn = document.getElementById('increase-btn');

// Function to safely update the visible DOM and text colors
function updateDisplay() {
    valueDisplay.textContent = count;
    
    // Change text color dynamically based on the number value
    if (count > 0) {
        valueDisplay.style.color = "#2ecc71"; // Green
    } else if (count < 0) {
        valueDisplay.style.color = "#e74c3c"; // Red
    } else {
        valueDisplay.style.color = "#2c3e50"; // Neutral slate
    }
}

// Attach interactive event listeners to buttons
increaseBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});
