//************************************
//* Navbar                           *
//************************************


//Targets toggle icon
const Toggle = document.querySelector('#toggle-icon');

//Add onclick event to icon
Toggle.addEventListener ('click', navbarToggle);

//Toggles menus when in mobile mode
function navbarToggle() {
  const NavItems = document.querySelectorAll(".nav-item");
  NavItems.forEach(function toggleResponsive(navItem) {
		if (navItem.className === "nav-item") {
	    navItem.className += " responsive";
		} else {
	    navItem.className = "nav-item";
		}
	})
}
 
//************************************
//* Other                            *
//************************************ 
