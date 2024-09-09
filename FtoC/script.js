// DOM Elements
const celsiusInput = document.getElementById("celsius");
const convertBtn = document.getElementById("convertBtn");
const resultParagraph = document.getElementById("result");

// Function to convert Celsius to Fahrenheit
function convertTemperature() {
  const celsius = celsiusInput.value;
  if (celsius === "") {
    resultParagraph.textContent = "Please enter a value.";
  } else {
    const fahrenheit = (celsius * 9) / 5 + 32;
    resultParagraph.textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(
      2
    )}°F`;
  }
}

// Event Listener for the Convert Button
convertBtn.addEventListener("click", convertTemperature);

// function convertTemperature() {
//   const celsius = document.getElementById("celsius").value;
//   if (celsius === "") {
//     document.getElementById("result").textContent = "Please enter a value.";
//   } else {
//     const fahrenheit = (celsius * 9) / 5 + 32;
//     document.getElementById(
//       "result"
//     ).textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
//   }
// }
