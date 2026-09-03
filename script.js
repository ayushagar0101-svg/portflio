// =========================================================
// Mobile navigation toggle
// =========================================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close the mobile menu after clicking a link
navLinks.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// =========================================================
// Reveal sections as the user scrolls down
// (each section gets a small fade + slide-up the first time
// it enters the viewport)
// =========================================================
const revealTargets = document.querySelectorAll('.section, .hero-inner');

revealTargets.forEach((el) => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((el) => revealObserver.observe(el));

// =========================================================
// Contact form
// There is no backend, so we just show a short message
// instead of actually sending the data anywhere.
// =========================================================
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  formNote.textContent = 'Thanks! Please contact me directly through email.';

  contactForm.reset();

  // Clear the message after a few seconds
  setTimeout(() => {
    formNote.textContent = '';
  }, 5000);
});

// =========================================================
// Navbar background on scroll
// (keeps it subtle — just a slightly stronger shadow once
// the page has been scrolled a bit)
// =========================================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0 1px 0 rgba(0, 0, 0, 0.04)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});
