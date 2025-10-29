// contacto.js
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const errorName = document.getElementById('error-name');
const errorEmail = document.getElementById('error-email');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let valid = true;

  // Nombre
  if(nameInput.value.trim() === '') {
    errorName.style.display = 'block';
    valid = false;
  } else {
    errorName.style.display = 'none';
  }

  // Correo
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(emailInput.value.trim())) {
    errorEmail.style.display = 'block';
    valid = false;
  } else {
    errorEmail.style.display = 'none';
  }

  // Mensaje
  if(messageInput.value.trim() === '') {
    errorMessage.style.display = 'block';
    valid = false;
  } else {
    errorMessage.style.display = 'none';
  }

  if(valid) {
    successMessage.style.display = 'block';
    form.reset();
  } else {
    successMessage.style.display = 'none';
  }
});
