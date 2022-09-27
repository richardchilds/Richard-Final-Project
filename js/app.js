document
  .getElementById("nav-trigger")
  .addEventListener("click", sideMenuAppears);
document
  .getElementById("nav-close")
  .addEventListener("click", sideMenuDisappears);

console.log("nav-trigger() is active");
console.log("nav-close() is active");

function sideMenuAppears() {
  console.log("sideMenuAppears() is active");
  document.getElementById("nav-menu").classList.add("show-menu");
}

function sideMenuDisappears() {
  console.log("sideMenuDisappears() is active");
  document.getElementById("nav-menu").classList.remove("show-menu");
}
