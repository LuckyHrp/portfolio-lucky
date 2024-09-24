const hamMenu = document.getElementById("hamburger-menu");
const navList = document.querySelector(".nav-list");
const navbar = document.querySelector(".navbar");

hamMenu.addEventListener("click", function () {
  navList.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 30) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar .nav-list ul li a");
window.addEventListener("scroll", function () {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(".nav-list ul li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
});
