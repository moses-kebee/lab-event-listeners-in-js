// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Use RGB format instead of color name
  document.body.style.backgroundColor = "rgb(135, 206, 235)"; // light blue in RGB
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // Set to empty string to clear the background color
  document.body.style.backgroundColor = "";
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Get the element that will display the key
  const keyDisplay = document.getElementById("keyPressDisplay");
  
  // Update with exact format test expects: "Key pressed: X"
  if (keyDisplay) {
    keyDisplay.textContent = `Key pressed: ${event.key}`;
  }
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput(event) {
  // Get the element that will display the input text
  const inputDisplay = document.getElementById("textInputDisplay");
  
  // Get the input field directly from the DOM
  const textInput = document.getElementById("textInput");
  
  if (inputDisplay && textInput) {
    // Read the value directly from the input field
    const inputValue = textInput.value;
    inputDisplay.textContent = `You typed: ${inputValue}`;
  }
}

// Attach Event Listeners
function setupEventListeners() {
  // Attach event listener to change background color when the button is clicked
  const changeBtn = document.getElementById('changeColorButton');
  if (changeBtn) {
    changeBtn.addEventListener('click', changeBackgroundColor);
  }

  // Attach event listener to reset background color when the button is double-clicked
  const resetBtn = document.getElementById('resetColorButton');
  if (resetBtn) {
    resetBtn.addEventListener('dblclick', resetBackgroundColor);
  }

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress);

  // Attach event listener to display user input in real-time as they type
  const textInput = document.getElementById('textInput');
  if (textInput) {
    textInput.addEventListener('input', displayUserInput);
  }
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

// Export for testing
module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};