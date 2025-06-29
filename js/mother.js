// converter.js

function setupConverter({
  fromSelector = "#fromType",
  toSelector = "#toType",
  inputSelector = "#inputValue",
  outputSelector = "#outputValue",
} = {}) {
  const fromType = document.querySelector(fromSelector);
  const toType = document.querySelector(toSelector);
  const inputField = document.querySelector(inputSelector);
  const outputField = document.querySelector(outputSelector);

  if (!fromType || !toType || !inputField || !outputField) {
    console.error("One or more converter elements not found in the DOM.");
    return;
  }

  function convert() {
    const from = fromType.value;
    const to = toType.value;
    const input = inputField.value.trim();

    if (!input) {
      outputField.value = "";
      return;
    }

    let decimal;

    // Convert input to decimal
    switch (from) {
      case "decimal":
      case "ascii":
        decimal = parseInt(input, 10);
        break;
      case "binary":
        decimal = /^[01]+$/.test(input) ? parseInt(input, 2) : NaN;
        break;
      case "octal":
        decimal = /^[0-7]+$/.test(input) ? parseInt(input, 8) : NaN;
        break;
      case "hex":
        decimal = /^[0-9a-fA-F]+$/.test(input) ? parseInt(input, 16) : NaN;
        break;
      case "char":
        decimal = input.length === 1 ? input.charCodeAt(0) : NaN;
        break;
      default:
        decimal = NaN;
    }

    if (isNaN(decimal)) {
      outputField.value = "Invalid input";
      return;
    }

    let result;

    // Convert decimal to desired format
    switch (to) {
      case "decimal":
      case "ascii":
        result = decimal.toString(10);
        break;
      case "binary":
        result = decimal.toString(2);
        break;
      case "octal":
        result = decimal.toString(8);
        break;
      case "hex":
        result = decimal.toString(16).toUpperCase();
        break;
      case "char":
        result =
          decimal >= 0 && decimal <= 255
            ? String.fromCharCode(decimal)
            : "Invalid char";
        break;
      default:
        result = "Error";
    }

    outputField.value = result;
  }

  inputField.addEventListener("input", convert);
  fromType.addEventListener("change", convert);
  toType.addEventListener("change", convert);
}

window.setupConverter = setupConverter;
