
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label",
    isOpen ? "Close navigation" : "Toggle navigation");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu when a navigation link is clicked
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Toggle navigation");
    menuToggle.textContent = "☰";
  });
});

// Automatically update the footer year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Preselect a membership when a pricing button is clicked
const planSelect = document.getElementById("plan");

document.querySelectorAll("[data-plan]").forEach((button) => {
  button.addEventListener("click", () => {
    planSelect.value = button.dataset.plan;
  });
});

// Contact form validation and demo response
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const name = document.getElementById("name").value.trim();
  const plan = planSelect.value;

  formMessage.textContent =
    `Thanks, ${name}! Your ${plan} membership enquiry is ready.`;

  // This demo does not send information to a server.
  // Connect a backend or form service to receive real enquiries.
  contactForm.reset();
});
