function initGradientMaker() {
  const colorCountInput = document.getElementById("colorCount");
  const degreeInput = document.getElementById("degree");
  const colorInputsContainer = document.getElementById("colorInputs");
  const preview = document.getElementById("preview");
  const cssCode = document.getElementById("cssCode");

  let inputTimeout;

  function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  }

  function updateColorInputs(force = false) {
    let count = parseInt(colorCountInput.value);
    if (!force && isNaN(count)) return;
    if (isNaN(count) || count < 1) {
      count = 1;
      colorCountInput.value = 1;
    }

    colorInputsContainer.innerHTML = "";

    for (let i = 0; i < count; i++) {
      const color = getRandomColor();
      const label = document.createElement("label");
      label.className = "color-circle";
      label.style.backgroundColor = color;

      const input = document.createElement("input");
      input.type = "color";
      input.value = color;

      input.addEventListener("input", () => {
        label.style.backgroundColor = input.value;
        updateGradient();
      });

      label.appendChild(input);
      colorInputsContainer.appendChild(label);
    }

    updateGradient();
  }

  function updateGradient() {
    const degree = degreeInput.value || 90;
    const colors = [
      ...colorInputsContainer.querySelectorAll("input[type='color']"),
    ].map((i) => i.value);
    const gradient = `linear-gradient(${degree}deg, ${colors.join(", ")})`;
    preview.style.background = gradient;
    cssCode.textContent = `background: ${gradient};`;
  }

  function copyCode() {
    navigator.clipboard
      .writeText(cssCode.textContent)
      .then(() => alert("🎉 CSS code copied to clipboard!"))
      .catch(() => alert("⚠️ Copy failed. Please try again."));
  }

  // Event Listeners
  colorCountInput.addEventListener("input", () => {
    clearTimeout(inputTimeout);
    inputTimeout = setTimeout(() => updateColorInputs(true), 500);
  });

  colorCountInput.addEventListener("blur", () => updateColorInputs(true));
  degreeInput.addEventListener("input", updateGradient);

  // Expose copy function globally if needed
  window.copyCode = copyCode;

  // Initial render
  updateColorInputs(true);
}
//global function to initialize the gradient maker
window.initGradientMaker = initGradientMaker;
