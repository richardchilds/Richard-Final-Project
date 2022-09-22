const hamburgerButton = document.getElementById("nav-trigger");
const closeButton = document.getElementById("nav-close");
const menu = document.querySelector("#nav-menu");

function toggleMenu(){
  menu.classList.toggle("menu-open")
}

hamburgerButton.addEventListener("click", toggleMenu); 
closeButton.addEventListener("click", toggleMenu); 
 
 
 //document.getElementById('nav-trigger').addEventListener('click', sideMenuAppears);
 // document.getElementById('nav-close').addEventListener('click', sideMenuDisappears);

  //function sideMenuAppears() {
  //document.getElementById('nav-menu').classList.add('show-menu');
  //}
  
  //function sideMenuDisappears() {
  //document.getElementById('nav-menu').classList.remove('show-menu');
  //}

