// script.js

// Animate sections on scroll
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll("section").forEach(sec => {
  sec.classList.add("fade-start");
  observer.observe(sec);
});

// Add CSS dynamically for animation
const style = document.createElement("style");
style.textContent = `
  .fade-start {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.6s ease;
  }
  .fade-in {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
