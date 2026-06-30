/*
 * Appmist Website Script
 * Lightweight shared interactions for navigation, reveal animations,
 * FAQ accordion, and homepage phone mockup state.
 */

(function () {
  "use strict";

  var body = document.body;
  var header = document.querySelector("[data-site-header]");
  var nav = document.querySelector("[data-site-nav]");
  var navToggle = document.querySelector("[data-nav-toggle]");
  var yearTargets = document.querySelectorAll("[data-current-year]");
  var mobileBreakpoint = window.matchMedia("(min-width: 48rem)");
  var revealTargets = document.querySelectorAll("[data-reveal]");
  var faqTriggers = document.querySelectorAll(".faq-trigger");
  var presetButtons = document.querySelectorAll("[data-preset]");
  var phoneTimer = document.querySelector("[data-phone-timer]");
  var phonePresetChips = document.querySelectorAll("[data-phone-chip]");
  var brandLogos = document.querySelectorAll("[data-brand-logo]");
  var playStoreLinks = document.querySelectorAll("[data-play-store-link]");
  var playStoreUrl = body.getAttribute("data-play-store-url");
  var screenshotModal = document.querySelector("[data-screenshot-modal]");
  var screenshotModalImage = document.querySelector("[data-screenshot-modal-image]");
  var screenshotModalTriggers = document.querySelectorAll("[data-screenshot-modal-trigger]");
  var screenshotModalCloseTargets = document.querySelectorAll("[data-screenshot-modal-close]");
  var lastFocusedTrigger = null;

  function setupBrandLogos() {
    if (!brandLogos.length) {
      return;
    }

    brandLogos.forEach(function (logo) {
      var parent = logo.closest(".brand-mark");

      function showFallback() {
        if (!parent) {
          return;
        }

        parent.classList.remove("is-logo-ready");
      }

      function showLogo() {
        if (!parent) {
          return;
        }

        parent.classList.add("is-logo-ready");
      }

      logo.addEventListener("load", showLogo);
      logo.addEventListener("error", showFallback);

      if (logo.complete && logo.naturalWidth > 0) {
        showLogo();
      } else if (logo.complete) {
        showFallback();
      }
    });
  }

  function setCurrentYear() {
    var currentYear = new Date().getFullYear();

    yearTargets.forEach(function (element) {
      element.textContent = currentYear;
    });
  }

  function setupPlayStoreLinks() {
    if (!playStoreLinks.length || !playStoreUrl) {
      return;
    }

    playStoreLinks.forEach(function (link) {
      link.setAttribute("href", playStoreUrl);
    });
  }

  function updateHeaderState() {
    if (!header) {
      return;
    }

    if (window.scrollY > 12) {
      header.classList.add("is-scrolled");
      return;
    }

    header.classList.remove("is-scrolled");
  }

  function closeNavigation() {
    if (!nav || !navToggle) {
      return;
    }

    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
    body.classList.remove("nav-open");
  }

  function toggleNavigation() {
    if (!nav || !navToggle) {
      return;
    }

    var isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
    body.classList.toggle("nav-open", isOpen);
  }

  function handleBreakpointChange(event) {
    if (event.matches) {
      closeNavigation();
    }
  }

  function setupReveal() {
    if (!("IntersectionObserver" in window) || !revealTargets.length) {
      revealTargets.forEach(function (element) {
        element.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealTargets.forEach(function (element) {
      observer.observe(element);
    });
  }

  function toggleFaq(trigger) {
    var isExpanded = trigger.getAttribute("aria-expanded") === "true";
    var panelId = trigger.getAttribute("aria-controls");
    var panel = panelId ? document.getElementById(panelId) : null;
    var faqItem = trigger.closest(".faq-item");

    if (!panel) {
      return;
    }

    faqTriggers.forEach(function (item) {
      var itemPanelId = item.getAttribute("aria-controls");
      var itemPanel = itemPanelId ? document.getElementById(itemPanelId) : null;
      var itemFaq = item.closest(".faq-item");

      item.setAttribute("aria-expanded", "false");

      if (itemPanel) {
        itemPanel.setAttribute("aria-hidden", "true");
      }

      if (itemFaq) {
        itemFaq.classList.remove("is-open");
      }
    });

    if (!isExpanded) {
      trigger.setAttribute("aria-expanded", "true");
      panel.setAttribute("aria-hidden", "false");

      if (faqItem) {
        faqItem.classList.add("is-open");
      }
    }
  }

  function formatTimer(minutes) {
    var padded = String(minutes).padStart(2, "0");
    return padded + ":00";
  }

  function updatePhonePreset(button) {
    if (!button || !phoneTimer) {
      return;
    }

    var minutes = button.getAttribute("data-preset");

    presetButtons.forEach(function (item) {
      item.classList.toggle("is-active", item === button);
      item.setAttribute("aria-pressed", String(item === button));
    });

    phonePresetChips.forEach(function (item) {
      item.classList.toggle("is-active", item.getAttribute("data-phone-chip") === minutes);
    });

    phoneTimer.textContent = formatTimer(minutes);
  }

  function openScreenshotModal(trigger) {
    if (!screenshotModal || !screenshotModalImage || !trigger) {
      return;
    }

    var src = trigger.getAttribute("data-screenshot-src");
    var alt = trigger.getAttribute("data-screenshot-alt") || "";

    screenshotModalImage.setAttribute("src", src);
    screenshotModalImage.setAttribute("alt", alt);
    screenshotModal.hidden = false;
    body.classList.add("modal-open");
    lastFocusedTrigger = trigger;
    document.body.style.overflow = "hidden";

    var closeButton = screenshotModal.querySelector(".image-modal__close");

    if (closeButton) {
      closeButton.focus();
    }
  }

  function closeScreenshotModal() {
    if (!screenshotModal || screenshotModal.hidden) {
      return;
    }

    screenshotModal.hidden = true;
    body.classList.remove("modal-open");
    document.body.style.overflow = "";

    if (screenshotModalImage) {
      screenshotModalImage.setAttribute("src", "");
      screenshotModalImage.setAttribute("alt", "");
    }

    if (lastFocusedTrigger) {
      lastFocusedTrigger.focus();
    }
  }

  function bindEvents() {
    if (navToggle) {
      navToggle.addEventListener("click", toggleNavigation);
    }

    window.addEventListener("scroll", updateHeaderState, { passive: true });
    window.addEventListener("resize", updateHeaderState);

    if (mobileBreakpoint.addEventListener) {
      mobileBreakpoint.addEventListener("change", handleBreakpointChange);
    } else if (mobileBreakpoint.addListener) {
      mobileBreakpoint.addListener(handleBreakpointChange);
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeNavigation();
        closeScreenshotModal();
      }
    });

    document.addEventListener("click", function (event) {
      if (!nav || !navToggle || mobileBreakpoint.matches) {
        return;
      }

      var clickedInsideNav = nav.contains(event.target);
      var clickedToggle = navToggle.contains(event.target);

      if (!clickedInsideNav && !clickedToggle) {
        closeNavigation();
      }
    });

    faqTriggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        toggleFaq(trigger);
      });
    });

    presetButtons.forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.classList.contains("is-active")));
      button.addEventListener("click", function () {
        updatePhonePreset(button);
      });
    });

    screenshotModalTriggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        openScreenshotModal(trigger);
      });
    });

    screenshotModalCloseTargets.forEach(function (target) {
      target.addEventListener("click", closeScreenshotModal);
    });
  }

  function init() {
    setupBrandLogos();
    setupPlayStoreLinks();
    setCurrentYear();
    updateHeaderState();
    setupReveal();
    faqTriggers.forEach(function (trigger) {
      var panelId = trigger.getAttribute("aria-controls");
      var panel = panelId ? document.getElementById(panelId) : null;
      var expanded = trigger.getAttribute("aria-expanded") === "true";

      if (panel) {
        panel.setAttribute("aria-hidden", expanded ? "false" : "true");
      }
    });
    bindEvents();
  }

  init();
})();
