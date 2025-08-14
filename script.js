const icons = {
  darkMode: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
         viewBox="0 0 24 24" fill="none" stroke="currentColor" 
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
         class="lucide lucide-moon-star-icon lucide-moon-star">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
    </svg>
  `,
  lightMode: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
         viewBox="0 0 24 24" fill="none" stroke="currentColor" 
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
         class="lucide lucide-sun-dim-icon lucide-sun-dim">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 4h.01" />
      <path d="M20 12h.01" />
      <path d="M12 20h.01" />
      <path d="M4 12h.01" />
      <path d="M17.657 6.343h.01" />
      <path d="M17.657 17.657h.01" />
      <path d="M6.343 17.657h.01" />
      <path d="M6.343 6.343h.01" />
    </svg>
  `,
};

const root = document.documentElement;
const toggleButton = document.getElementById("theme-toggle");
const toggleMobMenu = document.getElementById("toggle-menu");
const navLinks = document.querySelectorAll("#nav-link");
const contactForm = document.getElementById("contact-form");
const feedback = document.getElementById("contact-feedback");
const devImage = document.getElementById("dev-image");
const projectSection = document.getElementById("projects");
const card = document.getElementById("card");

devImage.addEventListener("mouseenter", () => {
  devImage.classList.add("image-feedback");
});

devImage.addEventListener("mouseleave", () => {
  devImage.classList.remove("image-feedback");
});

const mobileMenu = document.getElementById("navigation-links__mobile");

// getting the value for userTheme
const userTheme = localStorage.getItem("userTheme");

// checking user preference
const isDark = window.matchMedia("(prefers-color-scheme)").matches;

// setting the class
if (isDark && userTheme !== "light") {
  root.classList.add("dark");
  toggleButton.innerHTML = icons.darkMode;
} else {
  root.classList.remove("dark");
  toggleButton.innerHTML = icons.lightMode;
}

toggleButton.addEventListener("click", () => {
  // toggling a dark/light mode
  const isDark = root.classList.toggle("dark");

  toggleButton.innerHTML = isDark ? icons.darkMode : icons.lightMode;

  // saving dark/light mode to local storage
  localStorage.setItem("userTheme", isDark ? "dark" : "light");
});

toggleMobMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("toggle-menu");
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    mobileMenu.classList.toggle("toggle-menu");
  });
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("contact-name").value.trim();
  const email = document.getElementById("contact-email").value.trim();
  const message = document.getElementById("contact-message").value.trim();

  if (!name || !email || !message) {
    feedback.textContent = "Please fill in all fields.";
    feedback.classList.add("error");
    feedback.classList.remove("hidden");
  } else {
    feedback.textContent = "Message sent!";
    feedback.classList.remove("hidden");
  }

  setTimeout(() => {
    feedback.classList.add("hidden");
  }, 3500);

  contactForm.reset();
});
