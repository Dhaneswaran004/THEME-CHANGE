function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
}

window.onload = function () {
  document.body.classList.add("light-theme");
};
