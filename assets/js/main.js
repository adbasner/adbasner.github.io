//************************************
//* Current Date for Copyright       *
//************************************ 

//Selects date span
const date = document.querySelector('#date'); 

//get current date
const currentDate = new Date();
const year = currentDate.getFullYear();

//change info in date span to current date
date.innerHTML = year;

//************************************
//* Makes Hamburger work             *
//************************************ 

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems);
});

