// Wait till DOM loads
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  // Scroll reveal function
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  };

  // Highlight nav link based on section in viewport
  const highlightNav = () => {
    let scrollPos = window.scrollY || window.pageYOffset;

    sections.forEach(section => {
      const top = section.offsetTop - 80; // offset for header height
      const bottom = top + section.offsetHeight;

      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  // Smooth scroll for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetID = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetID);

      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Run on scroll
  window.addEventListener('scroll', () => {
    revealOnScroll();
    highlightNav();
  });

  // Initial call so sections are revealed if already in viewport
  revealOnScroll();
  highlightNav();
});
