document.querySelectorAll('.nav-link[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = this.getAttribute("href");
    const targetElement = document.querySelector(target);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Remove the active class from all nav-links
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      // Add the active class to the clicked nav-link
      this.classList.add("active");
    });
  });
});
$(document).ready(function () {
  $("#myCarousel").carousel();
});
