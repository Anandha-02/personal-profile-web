// =========================
// 🌐 Main Site Scripts
// =========================

// 🌟 Smooth Scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Only smooth scroll for same-page links
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      e.preventDefault();
      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// 🧭 Active Nav Link Highlight on Scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// 📱 Mobile Menu Toggle (Optional)
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-links');

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    mobileToggle.classList.toggle('open');
  });
}

// ✨ Simple fade-in animations on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  fadeElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('show');
    }
  });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

console.log("✅ main.js loaded");
