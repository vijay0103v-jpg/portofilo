/**
 * VIJAY V — PREMIUM DARK EDITORIAL PORTFOLIO
 * High-performance vanilla interactions, scroll-driven animations,
 * dynamic glassmorphic lighting, active nav tracking, and smooth Back-to-Top.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Year Updater
  const yearEl = document.querySelector('#year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Accessible Mobile Navigation Drawer
  const menuToggle = document.querySelector('#menuToggle');
  const navLinks = document.querySelector('#navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open navigation');
      });
    });
  }

  // 3. Luminous Scroll Progress Bar, Dynamic Header State & Floating Back-To-Top
  const progressBar = document.querySelector('#scrollProgress');
  const siteHeader = document.querySelector('.site-header');
  const floatingBackToTop = document.querySelector('#floatingBackToTop');

  let ticking = false;
  const updateScrollState = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Update progress bar width
    if (progressBar && docHeight > 0) {
      const percent = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
      progressBar.style.width = percent + '%';
    }

    // Toggle header scrolled state for deeper glassmorphism
    if (siteHeader) {
      if (scrollY > 30) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    // Toggle floating back-to-top button
    if (floatingBackToTop) {
      if (scrollY > 380) {
        floatingBackToTop.classList.add('visible');
      } else {
        floatingBackToTop.classList.remove('visible');
      }
    }

    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollState);
      ticking = true;
    }
  }, { passive: true });
  updateScrollState();

  // 4. Smooth Back-to-Top Handlers (Eliminates offset issues with sticky headers)
  const backToTopButtons = document.querySelectorAll('.back-to-top-link, #floatingBackToTop, .footer-wordmark');
  backToTopButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      if (window.history && window.history.pushState) {
        window.history.pushState(null, null, '#top');
      }
    });
  });

  // 5. Scroll-Triggered Reveal Animations (Intersection Observer)
  const revealTargets = document.querySelectorAll(
    '.section-header, .highlight-card, .service-card, .timeline-item, ' +
    '.project-card, .about-portrait-card, .about-bio-col, .experience-card, ' +
    '.skills-category-card, .edu-card, .publication-card, .cert-lead-card, ' +
    '.contact-editorial-banner, .contact-channel-card'
  );

  revealTargets.forEach(el => {
    el.classList.add('reveal-on-scroll');
  });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    });

    revealTargets.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver
    revealTargets.forEach(el => el.classList.add('is-revealed'));
  }

  // 6. Active Section Tracking in Navigation
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.site-nav .nav-link, .site-nav .nav-cta');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navItems.forEach(item => {
            const href = item.getAttribute('href');
            if (href === `#${currentId}`) {
              item.classList.add('active');
            } else if (href && href.startsWith('#')) {
              item.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-30% 0px -55% 0px',
      threshold: 0
    });

    sections.forEach(sec => navObserver.observe(sec));
  }

  // 7. Interactive Specular Cursor Tracking on Glass Cards
  const glassCards = document.querySelectorAll(
    '.service-card, .project-card, .experience-card, .edu-card, ' +
    '.publication-card, .cert-lead-card, .skills-category-card, .contact-channel-card, .highlight-card'
  );

  glassCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x.toFixed(1)}%`);
      card.style.setProperty('--mouse-y', `${y.toFixed(1)}%`);
    }, { passive: true });
  });
});
