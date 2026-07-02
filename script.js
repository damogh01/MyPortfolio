(function () {
  const navbar = document.getElementById('navbar');
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const yearEl = document.getElementById('year');

  // Footer year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky navbar background on scroll
  function handleScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile menu toggle
  menuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    iconOpen.classList.toggle('hidden', !isOpen);
    iconClose.classList.toggle('hidden', isOpen);
    menuBtn.setAttribute('aria-expanded', String(!isOpen));
  });

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-link').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Contact form — opens default mail client with pre-filled message
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      showStatus('Please fill in all fields.', 'error');
      return;
    }

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:damogh01@gmail.com?subject=${subject}&body=${body}`;

    showStatus('Opening your email client…', 'success');
    contactForm.reset();
  });

  function showStatus(text, type) {
    formStatus.textContent = text;
    formStatus.classList.remove('hidden', 'text-red-400', 'text-emerald-400');
    formStatus.classList.add(type === 'error' ? 'text-red-400' : 'text-emerald-400');
  }
})();
