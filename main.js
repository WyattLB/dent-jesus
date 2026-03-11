document.addEventListener("DOMContentLoaded", function () {
  // Sticky header shrink on scroll
  const header = document.querySelector(".site-header");
  const scrollThreshold = 20;

  function handleScroll() {
    if (!header) return;
    if (window.scrollY > scrollThreshold) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // Mobile menu toggle
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  function closeMobileMenu() {
    if (hamburger) {
      hamburger.classList.remove("is-open");
      hamburger.setAttribute("aria-expanded", "false");
    }
    if (mobileMenu) {
      mobileMenu.classList.remove("is-open");
    }
    document.body.classList.remove("menu-open");
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", function () {
      const isOpen = hamburger.classList.toggle("is-open");
      hamburger.setAttribute("aria-expanded", String(isOpen));
      mobileMenu.classList.toggle("is-open");
      document.body.classList.toggle("menu-open", isOpen);
    });

    mobileMenu.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        closeMobileMenu();
      }
    });
  }

  // Initialize Lucide icons if available
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
});

