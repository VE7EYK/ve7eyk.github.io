const toggle = document.getElementById("themeToggle");
const body = document.body;

function setTheme(mode) {
  body.classList.remove("light-mode", "dark-mode");
  body.classList.add(mode);
  localStorage.setItem("theme", mode);

  toggle.textContent = mode === "dark-mode" ? "☀️" : "🌙";
}

toggle.addEventListener("click", () => {
  const newMode = body.classList.contains("light-mode")
    ? "dark-mode"
    : "light-mode";
  setTheme(newMode);
});

setTheme(localStorage.getItem("theme") || "light-mode");
