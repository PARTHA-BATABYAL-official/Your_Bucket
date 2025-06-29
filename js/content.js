// Query DOM elements
const cards = document.querySelectorAll(".package2");
const popup = document.querySelector(".popup-screen");
const closeButton = document.querySelector(".close");
const container = document.querySelector(".con");
const toolName = document.querySelector(".tool_name");

// Tool templates
const templates = {
  a1: `
    <div id="main">
      <div class="img"><div class="imginner"></div></div>
      <div class="wrapper">
        <div class="box">
          <div class="box_inner">
            <p><span class="typing"></span><span>|</span></p>
            <div class="input">
              <input type="text" id="text" placeholder="Enter text" autocomplete="off"/>
            </div>
            <div class="btns">
              <button class="sub">Generate</button>
              <button class="re">Rephrase</button>
            </div>
          </div>
          <div class="right"></div>
        </div>
      </div>
    </div>`,

  a2: `
    <div class="container">
      <div class="l">
        <div class="l1">
          <label for="fromType">From:</label>
          <select id="fromType">
            <option value="decimal">Decimal</option>
            <option value="binary">Binary</option>
            <option value="octal">Octal</option>
            <option value="hex">Hexadecimal</option>
            <option value="ascii">ASCII Code</option>
            <option value="char">Character</option>
          </select>
          <input type="text" id="inputValue" placeholder="Enter value" />
        </div>
        <div class="l2">
          <label for="toType">To:</label>
          <select id="toType">
            <option value="decimal">Decimal</option>
            <option value="binary">Binary</option>
            <option value="octal">Octal</option>
            <option value="hex">Hexadecimal</option>
            <option value="ascii">ASCII Code</option>
            <option value="char">Character</option>
          </select>
          <input type="text" id="outputValue" readonly />
        </div>
      </div>
    </div>`,

  a3: `
    <div class="gradient_con">
      <div class="card">
        <div class="controls">
          <label>Colors:</label>
          <input type="number" id="colorCount" min="1" max="10" value="3" />
          <label>Degree:</label>
          <input type="number" id="degree" value="90" />
        </div>
        <div class="color-inputs" id="colorInputs"></div>
        <div class="preview" id="preview"></div>
        <div class="code-box">
          <button class="copy-btn" onclick="copyCode()">Copy</button>
          <code id="cssCode"></code>
        </div>
      </div>
    </div>`,

  a4: `
    <div class="content">
      <h1>Coming Soon</h1>
      <p>Stay tuned for more features!</p>
    </div>`,
};

// Tool names
const toolNames = {
  b1: "QR Code Generator",
  b2: "Mother Teresa",
  b3: "Gradient Maker",
  b4: "Coming Soon",
};

// Function to handle card selection
function handleCardClick(card) {
  // Deselect all, activate current
  cards.forEach((c) => c.classList.remove("active"));
  card.classList.add("active");

  // Show popup
  popup.classList.add("popup");

  const id = card.id;
  const nameKey = `b${id.slice(1)}`;

  // Inject HTML
  container.innerHTML = templates[id] || templates.a4;
  toolName.textContent = toolNames[nameKey] || "Your Bucket";

  // Initialize tool-specific functionality
  switch (id) {
    case "a1":
      typeof setupQRFunctionality === "function"
        ? setupQRFunctionality()
        : console.error("setupQRFunctionality is not defined");
      break;

    case "a2":
      typeof setupConverter === "function"
        ? setupConverter()
        : console.error("setupConverter is not defined");
      break;

    case "a3":
      typeof initGradientMaker === "function"
        ? initGradientMaker()
        : console.error("initGradientMaker is not defined");
      break;
  }
}

// Event listeners
cards.forEach((card) => {
  card.addEventListener("click", () => handleCardClick(card));
});

closeButton.addEventListener("click", () => {
  popup.classList.remove("popup");
  cards.forEach((c) => c.classList.remove("active"));
  container.innerHTML = "";
});
