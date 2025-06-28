const cards = document.querySelectorAll(".package2");
const popup = document.querySelector(".popup-screen");
const closeButton = document.querySelector(".close");
const container = document.querySelector(".con");

cards.forEach((el) => {
  el.addEventListener("click", () => {
    cards.forEach((e) => e.classList.remove("active"));
    el.classList.add("active");
    popup.classList.add("popup");

    if (el.id === "a1") {
      container.innerHTML = `
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
        </div>`;

      // Call the function defined in script.js
      if (typeof setupQRFunctionality === "function") {
        setupQRFunctionality();
      } else {
        console.error("setupQRFunctionality is not defined");
      }
    } else {
      container.innerHTML = "";
    }
    if (el.id === "a2") {
      container.innerHTML = `
        <div class="content">
          <h1>Coming Soon</h1>
          <p>Stay tuned for more features!</p>
        </div>`;
    } else if (el.id === "a3") {
      container.innerHTML = `
        <div class="content">
          <h1>Coming Soon</h1>
          <p>Stay tuned for more features!</p>
        </div>`;
    }
  });
});

closeButton.addEventListener("click", () => {
  popup.classList.remove("popup");
  cards.forEach((e) => e.classList.remove("active"));
  container.innerHTML = "";
});
