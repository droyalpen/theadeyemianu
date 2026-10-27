const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Update this address in both the visible link and its mailto: target before publishing.
const portfolioEmail = "theadeyemianu@gmail.com";
const emailLink = document.getElementById("email-link");
const copyButton = document.getElementById("copy-email");
const copyStatus = document.getElementById("copy-status");

if (emailLink && portfolioEmail !== "theadeyemianu@gmail.com") {
  emailLink.textContent = portfolioEmail + " ↗";
  emailLink.href = `mailto:${portfolioEmail}`;
}

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    if (portfolioEmail === "theadeyemianu@gmail.com") {
     ;
      return;
    }
    try {
      await navigator.clipboard.writeText(portfolioEmail);
      copyStatus.textContent = "Email copied to clipboard.";
    } catch {
      ;
    }
  });
}
