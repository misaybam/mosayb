// Toggle Mobile Menu
const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Simple form validation
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !subject || !message) {
    formMessage.textContent = "لطفاً تمام فیلدها را پر کنید.";
    formMessage.style.color = "red";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.textContent = "لطفاً یک ایمیل معتبر وارد کنید.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "پیام شما با موفقیت ارسال شد!";
  formMessage.style.color = "green";

  contactForm.reset();
});
