document.addEventListener("DOMContentLoaded", () => {
  const scrollLinks = document.querySelectorAll(".scroll-link");

  scrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (targetId && targetId.startsWith("#")) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    });
  });
  const pillars = document.querySelectorAll(".pillar-item");
  const descriptionBox = document.getElementById("pillar-description");

  if (pillars.length && descriptionBox) {
    pillars.forEach((pillar) => {
      pillar.addEventListener("click", function () {
        const infoText = this.getAttribute("data-info") || "";
        const pillarTitle = this.querySelector("h3")?.textContent || "";

        descriptionBox.innerHTML = `
          <strong>${pillarTitle}:</strong> ${infoText}
        `;

        descriptionBox.style.backgroundColor = "#f0f8ff";

        pillars.forEach((p) => p.classList.remove("is-active"));
        this.classList.add("is-active");
      });
    });
  }
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const sideNavbar = document.getElementById("sideNavbar");
  const overlay = document.getElementById("overlayMenu");

  if (menuBtn && closeBtn && sideNavbar && overlay) {
    const openMenu = () => {
      sideNavbar.classList.add("open");
      overlay.classList.add("show");
    };

    const closeMenu = () => {
      sideNavbar.classList.remove("open");
      overlay.classList.remove("show");
    };

    menuBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
  }
  const navbarCollapse = document.querySelector(".navbar-collapse");

  window.addEventListener("scroll", () => {
    if (
      window.innerWidth < 992 &&
      navbarCollapse &&
      navbarCollapse.classList.contains("show")
    ) {
      navbarCollapse.classList.remove("show");
    }
  });
});
