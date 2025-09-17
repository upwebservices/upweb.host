// Navigation toggle for mobile
(function () {
  const toggleButton = document.querySelector('[data-nav-toggle]');
  const navList = document.querySelector('[data-nav-list]');
  if (!toggleButton || !navList) return;
  toggleButton.addEventListener('click', () => {
    const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', String(!expanded));
    navList.setAttribute('aria-expanded', String(!expanded));
  });
})();

// Reveal on scroll
(function () {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.15 });
  document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
})();

// Smooth scroll for same-page anchors
(function(){
  function isSamePageLink(link){
    return link.hash && (link.origin === window.location.origin) && (link.pathname === window.location.pathname);
  }
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link || !isSamePageLink(link)) return;
    const target = document.querySelector(link.hash);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.pushState(null, '', link.hash);
  });
})();

// Contact form mailto handler
(function(){
  const form = document.querySelector('form.contact');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.dataset.email || 'sales@erled-agency.example';
    const formData = new FormData(form);
    const subject = encodeURIComponent('New inquiry from Erled Agency website');
    const lines = [];
    for (const [key, value] of formData.entries()) {
      lines.push(`${key}: ${value}`);
    }
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  });
})();

// Footer year
(function(){
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();

