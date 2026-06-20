<script>
  // Navbar scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    document.getElementById('floatingCta').classList.toggle('visible', window.scrollY > 400);
  });

  // Mobile nav
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobileNav').classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  document.getElementById('mobileClose').addEventListener('click', closeMobileNav);
  function closeMobileNav() {
    document.getElementById('mobileNav').classList.remove('open');
    document.body.style.overflow = '';
  }

  // Email subscribe handler
  function handleSubscribe() {
    const input = document.getElementById('emailInput');
    const email = input.value.trim();
    if (!email || !email.includes('@')) {
      input.style.borderColor = '#C79A9A';
      input.placeholder = 'Please enter a valid email';
      setTimeout(() => { input.style.borderColor = ''; input.placeholder = 'your@email.com'; }, 2000);
      return;
    }
    input.value = '';
    input.placeholder = '✓ You\'re in! Check your inbox.';
    input.style.borderColor = 'var(--gold)';
    setTimeout(() => { input.placeholder = 'your@email.com'; input.style.borderColor = ''; }, 4000);
  }

  // Enter key subscribe
  document.getElementById('emailInput').addEventListener('keydown', e => { if (e.key === 'Enter') handleSubscribe(); });

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

  // Intersection Observer for subtle fade-in
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.service-card, .step, .testimonial-card, .faq-item, .rf-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
</script>