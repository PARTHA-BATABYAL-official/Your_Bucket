document.addEventListener("DOMContentLoaded", () => {
  const cursorDot = document.querySelector(".i");
  if (!cursorDot) return;

  let isCursorInside = true;

  const mymouse = (e) => {
    if (!isCursorInside) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const cursorElement = document.createElement("div");
    cursorElement.classList.add("custom-cursor");
    cursorElement.style.left = `${mouseX}px`;
    cursorElement.style.top = `${mouseY}px`;
    cursorElement.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;

    cursorElement.style.setProperty("--x", `${Math.random() * 400 - 20}px`);
    cursorElement.style.setProperty("--y", `${Math.random() * 700 - 20}px`);

    document.body.appendChild(cursorElement);
    setTimeout(() => {
      cursorElement.remove();
    }, 2000);
  };

  document.addEventListener("mousemove", (e) => {
    isCursorInside = true;
    cursorDot.style.display = "block";
    cursorDot.style.left = `${e.pageX - cursorDot.offsetWidth / 3}px`;
    cursorDot.style.top = `${e.pageY + cursorDot.offsetHeight / 9}px`;
    mymouse(e);
  });

  document.addEventListener("click", (e) => {
    for (let i = 0; i < 10; i++) {
      mymouse(e);
    }
  });

  document.addEventListener("mouseleave", () => {
    isCursorInside = false;
    cursorDot.style.display = "none";
  });

  document.addEventListener("mouseenter", () => {
    isCursorInside = true;
    cursorDot.style.display = "block";
  });
});
