// =============================
// 📩 Contact Form Handler
// =============================

// Select the form element
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form values
    const name = contactForm.querySelector('#name').value.trim();
    const email = contactForm.querySelector('#email').value.trim();
    const message = contactForm.querySelector('#message').value.trim();

    // Simple validation
    if (!name || !email || !message) {
      alert('⚠️ Please fill out all fields.');
      return;
    }

    // Optional: Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('⚠️ Please enter a valid email address.');
      return;
    }

    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      // Example: Sending via Formspree (no backend needed)
      const response = await fetch('https://formspree.io/f/mjkbzldo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });

      if (response.ok) {
        alert('✅ Message sent successfully!');
        contactForm.reset();
      } else {
        alert('❌ Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Form error:', error);
      alert('⚠️ An error occurred. Please try again.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });
}

console.log("✅ form-handler.js loaded");
