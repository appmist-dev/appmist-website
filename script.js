/* ==========================================================================
   AppMist - Interaction Scripts
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initHeaderScroll();
  initFaqAccordion();
  initScreenshotModal();
  initScrollAnimations();
  initBackToTop();
  initSupportTabs();
  initTimerSimulation();
});

/**
 * 1. Dark/Light Theme Switcher
 * Persistence: LocalStorage
 * Default: System Preference (Prefers-color-scheme)
 */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  const currentTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Apply default theme
  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else if (currentTheme === 'dark') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    // If no preference stored, follow system
    if (!systemPrefersDark) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  // Toggle button click listener
  themeToggle.addEventListener('click', () => {
    let theme = 'dark';
    if (document.documentElement.getAttribute('data-theme') === 'light') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      theme = 'light';
    }
    localStorage.setItem('theme', theme);
  });
}

/**
 * 2. Mobile Menu Drawer Navigation
 * Actions: Toggle menu, click outline closure, close on navigation click
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (!toggleBtn || !navMenu) return;

  const toggleMenu = () => {
    const isExpanded = toggleBtn.classList.contains('active');
    toggleBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
  };

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && e.target !== toggleBtn) {
      toggleMenu();
    }
  });

  // Close menu when clicking a menu link
  const menuLinks = navMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
}

/**
 * 3. Sticky Navigation Header Effect
 */
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  const checkScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Initial load check
}

/**
 * 4. FAQ Accordion Animation Handler
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!question || !answer) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close other accordion items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = '0px';
          otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current accordion item
      if (isActive) {
        item.classList.remove('active');
        answer.style.maxHeight = '0px';
        question.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        // Calculate raw scrollHeight to animate correctly
        answer.style.maxHeight = `${answer.scrollHeight}px`;
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * 5. Screenshot Modal (Pure Node Cloning for Crisp Displays)
 */
function initScreenshotModal() {
  const zoomablePhones = document.querySelectorAll('[data-zoomable]');
  const modal = document.getElementById('screenshot-modal');
  const modalWrapper = document.getElementById('modal-content-container');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modal || !modalWrapper || !closeBtn) return;

  const openModal = (phoneNode) => {
    // Clone mockup markup to preserve interactive styling elements
    const clone = phoneNode.cloneNode(true);
    // Remove individual scale effects from clone to keep it centered
    clone.style.transform = 'none';
    clone.style.pointerEvents = 'none';
    clone.removeAttribute('data-zoomable');

    modalWrapper.innerHTML = '';
    modalWrapper.appendChild(clone);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop background scrolling
    closeBtn.focus();
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    modalWrapper.innerHTML = '';
  };

  zoomablePhones.forEach(phone => {
    phone.addEventListener('click', () => openModal(phone));
    
    // Accessibility support: open mockup on keyboard Enter
    phone.setAttribute('tabindex', '0');
    phone.setAttribute('role', 'button');
    phone.setAttribute('aria-label', 'Enlarge screenshot mockup');
    phone.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(phone);
      }
    });
  });

  closeBtn.addEventListener('click', closeModal);
  
  // Close modal when clicking overlay
  modal.querySelector('.modal-overlay').addEventListener('click', closeModal);

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/**
 * 6. Scroll-Triggered Reveal Animations
 */
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Trigger once only
      }
    });
  }, observerOptions);

  reveals.forEach(el => observer.observe(el));
}

/**
 * 7. Back-to-Top Navigation Button
 */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 8. OEM Battery Optimization Guides Tabs Controller
 */
function initSupportTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  if (tabButtons.length === 0) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      // Update button selection state
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update content visibilities
      tabContents.forEach(content => {
        if (content.id === `${targetTab}-tab`) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
    });
  });
}

/**
 * 9. Active Countdown Timer Simulation (Second-by-Second Decrement)
 */
function initTimerSimulation() {
  const initialSeconds = 14 * 60 + 52; // 14:52
  let currentSeconds = initialSeconds;

  setInterval(() => {
    currentSeconds--;
    if (currentSeconds < 0) {
      currentSeconds = initialSeconds; // Reset/loop countdown
    }

    const minutes = Math.floor(currentSeconds / 60);
    const seconds = currentSeconds % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // Select and update all countdown-time elements (in both main body and modal clones)
    const timeElements = document.querySelectorAll('.countdown-time');
    timeElements.forEach(el => {
      el.textContent = formattedTime;
    });
  }, 1000);
}
