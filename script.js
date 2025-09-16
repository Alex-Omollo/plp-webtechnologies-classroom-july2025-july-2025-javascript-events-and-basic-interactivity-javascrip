// === Part 1: Event Handling ===

// Dark/Light Mode Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Counter Game
let count = 0;
const countDisplay = document.getElementById("count");
const countBtn = document.getElementById("countBtn");

countBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

countBtn.addEventListener("dblclick", () => {
  count = 0;
  countDisplay.textContent = count;
});

// FAQ Toggle
document.querySelectorAll(".faq-question").forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// === Part 2: Form Validation ===
const form = document.getElementById("registerForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // prevent submission

  let isValid = true;

  // Helper validation function
  function validateField(id, regex, errorMsg) {
    const input = document.getElementById(id);
    const error = input.nextElementSibling;
    if (!regex.test(input.value.trim())) {
      error.textContent = errorMsg;
      isValid = false;
    } else {
      error.textContent = "";
    }
  }

  // Validate fields
  validateField("name", /^[a-zA-Z\s]+$/, "Name must contain only letters");
  validateField("email", /^[^ ]+@[^ ]+\.[a-z]{2,3}$/, "Enter a valid email");
  validateField("location", /.+/, "Location cannot be empty");
  validateField("expertise", /.+/, "Expertise cannot be empty");

  if (isValid) {
    successMessage.textContent = "✅ Registration successful!";
    form.reset();
  } else {
    successMessage.textContent = "";
  }
});
