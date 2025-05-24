// === SCROLL-IN ANIMATIONS ===
function handleScrollFadeIn() {
  const fadeEls = document.querySelectorAll('.fade-in');
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', handleScrollFadeIn);
window.addEventListener('DOMContentLoaded', handleScrollFadeIn);

// === NAVIGATION ACTIVE LINK (Optional: Requires nav links with href="#section") ===
function setActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a');
  let current = '';
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) {
      current = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}
window.addEventListener('scroll', setActiveNav);
window.addEventListener('DOMContentLoaded', setActiveNav);

// === BACKGROUND BUBBLES ===
function createBubble() {
  const bubble = document.createElement('div');
  bubble.className = 'bg-bubble';
  bubble.style.left = Math.random() * 100 + 'vw';
  bubble.style.animationDuration = (6 + Math.random() * 4) + 's';
  bubble.style.opacity = 0.15 + Math.random() * 0.15;
  bubble.style.width = bubble.style.height = (10 + Math.random() * 40) + 'px';
  document.body.appendChild(bubble);
  setTimeout(() => bubble.remove(), 10000);
}
setInterval(createBubble, 800);

// === OPTIONAL: SMOOTH SCROLL FOR NAV LINKS ===
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

