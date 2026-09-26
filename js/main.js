const whyItems = document.querySelectorAll(".why-item");
const whyImageDisplay = document.getElementById("why-image-display");

whyItems.forEach(function (item) {
  item.addEventListener("click", function () {
    whyItems.forEach(function (el) {
      el.classList.remove("active");
    });
    item.classList.add("active");

    const newImage = item.getAttribute("data-image");
    whyImageDisplay.src = newImage;
  });
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
