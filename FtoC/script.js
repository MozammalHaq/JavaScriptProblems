// DOM Elements
const fahrenheitInput = document.getElementById("fahrenheit");
const convertBtn = document.getElementById("convertBtn");
const resultParagraph = document.getElementById("result");

// Function to convert Celsius to Fahrenheit
function convertTemperature() {
  const fahrenheit = fahrenheitInput.value;
  if (fahrenheit === "") {
    resultParagraph.textContent = "Please enter a value.";
    fahrenheitInput.value = "";
  } else {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    resultParagraph.textContent = `${fahrenheit}°C is equal to ${celsius.toFixed(
      2
    )}°F`;
    fahrenheitInput.value = "";
  }
}

// Event Listener for the Convert Button
convertBtn.addEventListener("click", convertTemperature);
