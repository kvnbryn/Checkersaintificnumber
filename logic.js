const form = document.getElementById('sciForm');
const message = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const number = document.getElementById('number').value;

  // Regular expression to validate scientific notation format
  const regex = /^-?\d+\.?\d*(?:[eE][+-]?\d+)?$/;

  if (regex.test(number)) {
    message.textContent = "Valid scientific number!";
  } else {
    message.textContent = "Invalid input. Please enter a scientific number (e.g., 1.23e-5).";
  }
});