const inputEl = document.querySelector("#input-field");
const convertBtn = document.querySelector("#convert-button");
const resultEl = document.querySelector(".result-output");

const mToFeet = document.querySelector("#meter-to-feet");
const lToGallon = document.querySelector("#liter-to-gallons");

convertBtn.addEventListener("click", () => {
  let inputValue = Number(inputEl.value);
  //convert meters to feet
  mToFeet.textContent = `${inputValue} meters = ${meterToFeet(
    inputValue
  )} | ${inputValue} feet = ${feetToMeter(inputValue)} meters`;

  inputEl.value = "";
});

function meterToFeet(m) {
  let feet = m * 3.281;
  return feet;
}

function feetToMeter(f) {
  let meter = f * 0.3048;
  return meter;
}

function literToGallon(l) {
  let galoon = l * 0.264;
  return galoon;
}

function kilogramToPound(kg) {
  let pound = kg * 2.204;
  return pound;
}
