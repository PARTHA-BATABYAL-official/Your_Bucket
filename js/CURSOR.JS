// Create the center dot
const cursorDot = document.querySelector(".i");

let isCursorInside = true; // Track if mouse is inside

const mymouse = (e) => {
  if (!isCursorInside) return; // Prevent creating ribbons if mouse is out

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const cursorElement = document.createElement("div");
  cursorElement.classList.add("custom-cursor");
  cursorElement.style.left = `${mouseX}px`;
  cursorElement.style.top = `${mouseY}px`;
  cursorElement.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;

  // Create floating direction
  cursorElement.style.setProperty("--x", `${Math.random() * 400 - 20}px`);
  cursorElement.style.setProperty("--y", `${Math.random() * 700 - 20}px`);

  document.body.appendChild(cursorElement);
  setTimeout(() => {
    cursorElement.remove();
  }, 2000);
};

// Mouse move – show and move the dot
document.addEventListener("mousemove", (e) => {
  isCursorInside = true;
  cursorDot.style.display = "block";
  cursorDot.style.left = `${e.pageX - cursorDot.offsetWidth / 3}px`;
  cursorDot.style.top = `${e.pageY + cursorDot.offsetHeight / 9}px`;
  mymouse(e);
});

// Touch move support
document.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  cursorDot.style.left = `${touch.pageX - cursorDot.offsetWidth / 3}px`;
  cursorDot.style.top = `${touch.pageY + cursorDot.offsetHeight / 9}px`;
  mymouse(touch);
});

// Mouse click – burst effect
document.addEventListener("click", (e) => {
  for (let i = 0; i < 10; i++) {
    mymouse(e);
  }
});

// When mouse leaves the window – hide cursor
document.addEventListener("mouseleave", () => {
  isCursorInside = false;
  cursorDot.style.display = "none";
});

// When mouse enters again – show cursor
document.addEventListener("mouseenter", () => {
  isCursorInside = true;
  cursorDot.style.display = "block";
});
