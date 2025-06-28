// Initialize the typed effect
const initializeTypedEffect = () => {
  const phrases = ["Hey", "It's", "_Fatty_", "Create", "Your", "QR"];
  const options = {
    strings: phrases,
    typeSpeed: 150,
    backSpeed: 15,
    loop: true,
    cursorChar: "",
    smartBackspace: true,
    showCursor: false,
  };
  new Typed(".typing", options);
};

// Set up QR generation and event listeners
const setupQRFunctionality = () => {
  const inputField = document.querySelector("#text");
  const submitButton = document.querySelector(".sub");
  const resetButton = document.querySelector(".re");
  const imageContainer = document.querySelector(".imginner");
  const displayContainer = document.querySelector(".img");

  if (
    !inputField ||
    !submitButton ||
    !resetButton ||
    !imageContainer ||
    !displayContainer
  ) {
    return;
  }

  // Generate QR Code
  const generateQRCode = () => {
    if (inputField.value) {
      let size = window.innerWidth <= 768 ? "280x280" : "500x500";
      const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${inputField.value}`;
      const qrImage = document.createElement("img");
      qrImage.src = qrCodeUrl;

      displayContainer.classList.add("display");
      imageContainer.innerHTML = "";
      imageContainer.appendChild(qrImage);
    } else {
      alert("Please enter text");
    }
  };

  // Event Listeners
  submitButton.addEventListener("click", generateQRCode);

  resetButton.addEventListener("click", () => {
    inputField.value = "";
    imageContainer.innerHTML = "";
    displayContainer.classList.remove("display");
  });

  window.addEventListener("resize", () => {
    if (imageContainer.firstChild) {
      generateQRCode();
    }
  });

  inputField.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      submitButton.click();
    }
  });

  imageContainer.addEventListener("click", () => {
    inputField.value = "";
    imageContainer.innerHTML = "";
    displayContainer.classList.remove("display");
  });

  // Start typing effect
  initializeTypedEffect();
};

// Export function so content.js can call it
window.setupQRFunctionality = setupQRFunctionality;

// Optional: run if content is already present on page load
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#text")) {
    setupQRFunctionality();
  }
});
