// script.js

// Fade in sections on scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// Simple scroll animation classes
const style = document.createElement('style');
style.innerHTML = `
  .hidden {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-out;
  }
  .visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

// Highlight nav link on scroll
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (
      section.offsetTop <= fromTop + 100 &&
      section.offsetTop + section.offsetHeight > fromTop + 100
    ) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
});

// Optional: style for active nav link
const navActiveStyle = document.createElement('style');
navActiveStyle.innerHTML = `
  .active-link {
    color: var(--highlight) !important;
  }
`;
document.head.appendChild(navActiveStyle);
