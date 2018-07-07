const Toggle = document.querySelector('#toggle-icon');

Toggle.addEventListener ('click', navbarToggle);

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
 