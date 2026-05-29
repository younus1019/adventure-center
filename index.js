// RTL MODE

const rtlBtn = document.getElementById("rtlBtn");

rtlBtn.addEventListener("click", function(){

  document.body.classList.toggle("rtl");

});


// LIGHT MODE

const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", function(){

  document.body.classList.toggle("light");

});


// MOBILE MENU

const hamburger = document.getElementById("hamburger");

const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", function(){

  navLinks.classList.toggle("active");

});

