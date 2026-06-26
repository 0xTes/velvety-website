// ─── DARK / LIGHT MODE TOGGLE ───────────────────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Persist theme choice across visits
const savedTheme = localStorage.getItem('velvety-theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('velvety-theme', next);
});

// ─── NAVBAR SCROLL ──────────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  document.getElementById('floatingCta').classList.toggle('visible', window.scrollY > 400);
});

// ─── MOBILE NAV ─────────────────────────────────────────────────────────────
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.add('open');
  document.body.style.overflow = 'hidden';
});
document.getElementById('mobileClose').addEventListener('click', closeMobileNav);

function closeMobileNav() {
  document.getElementById('mobileNav').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── HERO AVATARS — show initial when no image loads ────────────────────────
document.querySelectorAll('.avatar-img').forEach(el => {
  const img = el.querySelector('img');
  if (!img || !img.src || img.src === window.location.href) {
    // No src set — show initial immediately
    el.classList.add('show-initial');
    if (img) img.style.display = 'none';
  }
});

// ─── EMAIL SUBSCRIBE ────────────────────────────────────────────────────────
function handleSubscribe() {
  const input = document.getElementById('emailInput');
  const email = input.value.trim();
  if (!email || !email.includes('@')) {
    input.style.borderColor = '#C79A9A';
    input.placeholder = 'Please enter a valid email';
    setTimeout(() => {
      input.style.borderColor = '';
      input.placeholder = 'your@email.com';
    }, 2000);
    return;
  }
  input.value = '';
  input.placeholder = '✓ You\'re in! Check your inbox.';
  input.style.borderColor = 'var(--gold)';
  setTimeout(() => {
    input.placeholder = 'your@email.com';
    input.style.borderColor = '';
  }, 4000);
}

document.getElementById('emailInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleSubscribe();
});

// ─── SMOOTH SCROLL ──────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 72; // nav height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ─── INTERSECTION OBSERVER — FADE IN ────────────────────────────────────────
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

// ─── GIF PANEL — show fallback if no src ────────────────────────────────────
(function () {
  const gif = document.getElementById('heroGif');
  const fallback = document.getElementById('gifFallback');
  if (!gif || !fallback) return;
  // If no real src is set, show fallback
  if (!gif.src || gif.src === window.location.href) {
    gif.style.display = 'none';
    fallback.style.display = 'flex';
  }
})();

/*
  ════════════════════════════════════════════════════════════════
  HOW TO SWAP THE HERO GIF
  ————————————————————————
  Option A — edit the HTML directly:
    Set the `src` attribute on <img id="heroGif"> to your GIF URL.

  Option B — swap at runtime (e.g. from a CMS or admin panel):
    document.getElementById('heroGif').src = 'https://yourcdn.com/banner.gif';

  Option C — replace with a <video> element for better looping:
    const panel = document.getElementById('gifContainer');
    panel.innerHTML = `
      <video autoplay loop muted playsinline style="width:100%;height:100%;object-fit:cover;border-radius:20px;">
        <source src="https://yourcdn.com/banner.mp4" type="video/mp4" />
      </video>`;
  ════════════════════════════════════════════════════════════════

  HOW TO EDIT TESTIMONIAL AVATARS
  ————————————————————————————————
  Each .testimonial-card has data attributes:
    data-name, data-handle, data-avatar (image URL), data-initial, data-color

  To update from JS:
    const card = document.querySelectorAll('.testimonial-card')[0];
    card.querySelector('.author-avatar-img').src = 'https://yourcdn.com/amara.jpg';
    card.querySelector('.author-name').textContent = 'New Name';
    card.querySelector('.author-handle').textContent = 'New Platform';
    card.querySelector('p').textContent = '"New testimonial quote."';
  ════════════════════════════════════════════════════════════════
*/