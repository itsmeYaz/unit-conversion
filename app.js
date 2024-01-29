const inputEl = document.querySelector("#input-field");
const convertBtn = document.querySelector("#convert-button");
const resultEl = document.querySelector(".result-output");

const lengthResult = document.querySelector("#length");
const volumeResult = document.querySelector("#volume");
const massResult = document.querySelector("#mass");

convertBtn.addEventListener("click", () => {
  let inputValue = Number(inputEl.value);
  inputEl.value = "";
  //convert meters to feet
  lengthResult.textContent = `${inputValue} meters = ${meterToFeet(
    inputValue
  )} | ${inputValue} feet = ${feetToMeter(inputValue)} meters`;

  volumeResult.textContent = `${inputValue} gallons = ${literToGallon(
    inputValue
  )} | ${inputValue} gallons = ${galToLiter(inputValue)} liters`;

  massResult.textContent = `${inputValue} kilos = ${kilogramToPound(
    inputValue
  )} | ${inputValue} pounds = ${poundToKg(inputValue)} kilos`;
});

//Length functions
function meterToFeet(m) {
  let feet = (m * 3.28084).toFixed(2);
  return Number(feet);
}

function feetToMeter(f) {
  let meter = (f * 0.3048).toFixed(2);
  return Number(meter);
}

//Volume Functions
function literToGallon(l) {
  let galoon = (l * 0.264172).toFixed(2);
  return Number(galoon);
}

function galToLiter(gal) {
  let liter = (gal * 3.78541).toFixed(2);
  return Number(liter);
}

//Mass Functions
function kilogramToPound(kg) {
  let pound = (kg * 2.20462).toFixed(2);
  return Number(pound);
}

function poundToKg(pound) {
  let kg = (pound * 0.453592).toFixed(2);
  return Number(kg);
}
