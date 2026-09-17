document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const year = document.getElementById("year");
  const showQrBtn = document.getElementById("showQrBtn");
  const qrModal = document.getElementById("qrModal");
  const closeQrBtn = document.getElementById("closeQrBtn");

  if (year) year.textContent = new Date().getFullYear();

  function openQr() {
    if (!qrModal) return;
    qrModal.classList.add("open");
    qrModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    if (closeQrBtn) closeQrBtn.focus();
  }

  function closeQr() {
    if (!qrModal) return;
    qrModal.classList.remove("open");
    qrModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  if (showQrBtn) showQrBtn.addEventListener("click", openQr);
  if (closeQrBtn) closeQrBtn.addEventListener("click", closeQr);
  if (qrModal) {
    qrModal.querySelectorAll("[data-close-qr]").forEach(function (el) {
      el.addEventListener("click", closeQr);
    });
  }
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeQr();
  });

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      const open = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealItems.forEach(function (item) {
    observer.observe(item);
  });
});
