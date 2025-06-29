const cards = document.querySelectorAll(".package2");
const popup = document.querySelector(".popup-screen");
const closeButton = document.querySelector(".close");
const container = document.querySelector(".con");

const templates = {
  a1: `
    <div id="main">
      <div class="img">
        <div class="imginner"></div>
      </div>
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
      <h1><span>Mother Teresa</span></h1>
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
    <div class="content">
      <h1>Coming Soon</h1>
      <p>Stay tuned for more features!</p>
    </div>`,
};

// Handle card clicks
cards.forEach((card) => {
  card.addEventListener("click", () => {
    // Remove active class from all cards and set the clicked one
    cards.forEach((c) => c.classList.remove("active"));
    card.classList.add("active");

    // Show popup
    popup.classList.add("popup");

    const { id } = card;

    // Inject corresponding content
    container.innerHTML = templates[id] || templates.a3;

    // Initialize functionality based on card
    switch (id) {
      case "a1":
        if (typeof setupQRFunctionality === "function") {
          setupQRFunctionality();
        } else {
          console.error("setupQRFunctionality is not defined");
        }
        break;

      case "a2":
        if (typeof setupConverter === "function") {
          setupConverter();
        } else {
          console.error("setupConverter is not defined");
        }
        break;
    }
  });
});

// Close popup
closeButton.addEventListener("click", () => {
  popup.classList.remove("popup");
  cards.forEach((c) => c.classList.remove("active"));
  container.innerHTML = "";
});
