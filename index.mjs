// Select DOM elements
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");

// Toggle mobile menu
const toggleMobileMenu = () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
};

// Change navbar background on scroll
const changeNavBackground = () => {
  const scrollThreshold = 80;
  if (window.scrollY > scrollThreshold) {
    navbar.style.backgroundColor = "rgba(50, 50, 80, 0.9)"; // Dark semi-transparent background color
  } else {
    navbar.style.backgroundColor = "";
  }
};

// Close mobile menu
const closeMobileMenu = () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
};

// Smooth scroll to section
const scrollToSection = (e) => {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute("href");
  const targetSection = document.querySelector(targetId);
  const navbarHeight = navbar.offsetHeight;
  const targetPosition = targetSection.offsetTop - navbarHeight;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });

  closeMobileMenu();
};

// Event listeners
hamburger.addEventListener("click", toggleMobileMenu);
window.addEventListener("scroll", changeNavBackground);
navLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

// Initialize navbar background on page load
changeNavBackground();

// Export functions for potential use in other modules
export {
  toggleMobileMenu,
  changeNavBackground,
  closeMobileMenu,
  scrollToSection,
};
