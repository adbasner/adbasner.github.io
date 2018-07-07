//************************************
//* Navbar                           *
//************************************


//Targets toggle icon
const Toggle = document.querySelector('#toggle-icon');

//Add onclick event to icon
Toggle.addEventListener ('click', navbarToggle);

//Function to show/hide nav items, called in navbarToggle
function toggleResponsive(navItem) {
    if (navItem.className === "nav-item") {
      navItem.className += " responsive";
    } else {
      navItem.className = "nav-item";
    }
  }

//Selects .nav-items and calls toggleResponsive to show/hide them
function navbarToggle() {
  const NavItems = document.querySelectorAll(".nav-item");
  NavItems.forEach(toggleResponsive)
}
 
//************************************
//* Text Carousel                    *
//* Replaced with css animate        *
//************************************ 

// let textIndex = 0;

// function carousel() {
//   let texts = document.querySelectorAll(".i-am-a-text");
//   for (let i = 0; i < texts.length; i++) {
//   texts[i].style.display = "none"
//   }

//   textIndex++;

//   if (textIndex > texts.length) {
//     textIndex = 1;
//   }
//   texts[textIndex - 1].style.display = "block";
//   setTimeout(carousel, 2000);
// }

// carousel();