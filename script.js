// Get the Enter button and the display element
const enterButton = document.getElementById('increase'); // Using const because the button reference does not change
const display = document.getElementById('count'); // Using const because the display reference does not change

// Set up the count variable
let count = 0;

// Add a click event listener to the Enter button
enterButton.addEventListener('click', function() {
	count = count + 1; // Increase the count by 1
	display.textContent = count; // Update the display with just the number
});

// Get the Exit button
const exitButton = document.getElementById('decrease'); // Using const because the button reference does not change

// Add a click event listener to the Exit button
exitButton.addEventListener('click', function() {
	if (count > 0) {
		count = count - 1; // Decrease the count by 1
	}
	display.textContent = count; // Update the display with just the number
});

// Get the Reset button
const resetButton = document.getElementById('reset'); // Using const because the button reference does not change

// Add a click event listener to the Reset button
resetButton.addEventListener('click', function() {
    count = 0; // Set the count to zero
    display.textContent = count; // Update the display with zero
});
