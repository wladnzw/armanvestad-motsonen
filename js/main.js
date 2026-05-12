// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

reveals.forEach(el => observer.observe(el));

// Stagger child reveals
document.querySelectorAll('.roles-grid, .faser-grid, .team-grid, .pust-letters').forEach(grid => {
  const children = grid.children;
  Array.from(children).forEach((child, i) => {
    if (!child.classList.contains('reveal')) {
      child.style.transitionDelay = `${i * 0.08}s`;
    }
  });
});
