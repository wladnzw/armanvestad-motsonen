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

// Nav background on scroll + hero parallax
const nav = document.querySelector('nav');
const heroPhoto = document.querySelector('.hero-photo');
let rafId = null;

window.addEventListener('scroll', () => {
  nav.classList.toggle('nav-scrolled', window.scrollY > 60);

  if (heroPhoto && !rafId) {
    rafId = requestAnimationFrame(() => {
      heroPhoto.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      rafId = null;
    });
  }
}, { passive: true });

// Booking modal
const bookingToggle = document.querySelector('#booking-toggle');
const bookingModal = document.querySelector('#booking-modal');
const bookingClose = document.querySelector('#booking-close');
const bookingBackdrop = document.querySelector('#booking-backdrop');

function openBooking() {
  bookingModal.classList.add('open');
  bookingModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  bookingClose.focus();
}

function closeBooking() {
  bookingModal.classList.remove('open');
  bookingModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  bookingToggle.focus();
}

bookingToggle?.addEventListener('click', openBooking);
bookingClose?.addEventListener('click', closeBooking);
bookingBackdrop?.addEventListener('click', closeBooking);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && bookingModal.classList.contains('open')) closeBooking();
});

// Mobile hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  nav.classList.toggle('nav-open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    nav.classList.remove('nav-open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});
