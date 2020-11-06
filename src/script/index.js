const toggler = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("#mobile-navigation");
const mobileLink = mobileNav.querySelectorAll("a");

// mobile nav toggle handle
toggler.addEventListener("click", function(){
  handleToggle();
});

// handlw mobile nav link click
mobileLink.forEach(link => {
  link.addEventListener("click", function(){
    handleToggle();
  });
});



// handle toggle
const handleToggle = ()=> {
  toggler.classList.toggle("show");
  if(toggler.classList.contains("show")){
    toggler.setAttribute("src","src/assets/close-menu.svg");
    mobileNav.classList.add("show");
    document.body.style.overflowY = "hidden";

  } else {
    toggler.setAttribute("src","src/assets/hamburger-menu.svg");
    mobileNav.classList.remove("show");
    document.body.style.overflowY = "auto";
  }
}

