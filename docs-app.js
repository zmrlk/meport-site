/* ============================================
   MEPORT DOCS — Adaptive content + navigation
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Level Selector ----
  const levelPills = document.querySelectorAll('.level-pill');
  let currentLevel = localStorage.getItem('meport-docs-level') || 'beginner';
  setLevel(currentLevel);

  levelPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const level = pill.dataset.level;
      if (level !== currentLevel) {
        currentLevel = level;
        localStorage.setItem('meport-docs-level', level);
        setLevel(level);
      }
    });
  });

  function setLevel(level) {
    document.documentElement.setAttribute('data-level', level);

    // Update pills
    levelPills.forEach(p => {
      p.classList.toggle('active', p.dataset.level === level);
    });

    // Show/hide level content
    document.querySelectorAll('.level-content').forEach(el => {
      const showFor = el.dataset.show;
      el.classList.toggle('visible', showFor === level);
    });

    // Show/hide min-level sections
    document.querySelectorAll('[data-min-level]').forEach(el => {
      const minLevel = el.dataset.minLevel;
      const levels = ['beginner', 'power', 'dev'];
      const currentIdx = levels.indexOf(level);
      const minIdx = levels.indexOf(minLevel);
      el.style.display = currentIdx >= minIdx ? '' : 'none';
    });
  }

  // ---- Active sidebar link on scroll ----
  const sections = document.querySelectorAll('.doc-section');
  const navLinks = document.querySelectorAll('.docs-link');

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-80px 0px -60% 0px', threshold: 0 });

  sections.forEach(s => scrollObserver.observe(s));

  // ---- Smooth scroll for sidebar links ----
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Close mobile sidebar
          document.getElementById('sidebar')?.classList.remove('open');
        }
      }
    });
  });

  // ---- Mobile sidebar toggle ----
  const toggle = document.getElementById('nav-toggle');
  const sidebar = document.getElementById('sidebar');

  toggle?.addEventListener('click', () => {
    sidebar?.classList.toggle('open');
  });

  // Close sidebar on outside click (mobile)
  document.addEventListener('click', (e) => {
    if (sidebar?.classList.contains('open') &&
        !sidebar.contains(e.target) &&
        !toggle?.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });

  // ---- Language switch ----
  const langSwitch = document.getElementById('lang-switch');
  let lang = localStorage.getItem('meport-lang') || 'en';
  updateLangUI(lang);

  langSwitch?.addEventListener('click', (e) => {
    const option = e.target.closest('.lang-option');
    if (option) {
      const newLang = option.dataset.lang;
      if (newLang && newLang !== lang) {
        lang = newLang;
        localStorage.setItem('meport-lang', lang);
        document.documentElement.setAttribute('data-lang', lang);
        document.documentElement.setAttribute('lang', lang);
        updateLangUI(lang);
      }
    }
  });

  function updateLangUI(lang) {
    document.querySelectorAll('.lang-option').forEach(el => {
      el.classList.toggle('active', el.dataset.lang === lang);
    });
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
  }
});
