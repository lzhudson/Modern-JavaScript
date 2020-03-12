const inputName = document.getElementById('name');
inputName.addEventListener('blur', validateName);

const inputZipCode = document.getElementById('zip');
inputZipCode.addEventListener('blur', validateZipCode);

const inputEmail = document.getElementById('email');
inputEmail.addEventListener('blur', validateEmail);

const inputPhone = document.getElementById('phone');
inputPhone.addEventListener('blur', validatePhone);

function validateName() {
  const nameValue = inputName.value;
  const re = /^[a-zA-Z]{2,10}$/;

  if (!re.test(nameValue)) {
    inputName.classList.add('is-invalid');
  } else {
    inputName.classList.remove('is-invalid');
  }
}

function validateZipCode() {
  const zipCodeValue = inputZipCode.value;
  const re = /^[0-9]{5}(-[0-9]{4})?$/;

  if (!re.test(zipCodeValue)) {
    inputZipCode.classList.add('is-invalid');
  } else {
    inputZipCode.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const emailValue = inputEmail.value;
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if(!re.test(emailValue)) {
    inputEmail.classList.add('is-invalid');
  } else {
    inputEmail.classList.remove('is-invalid');
  }
}

function validatePhone() {
  const phoneValue = inputPhone.value;
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  if(!re.test(phoneValue)) {
    inputPhone.classList.add('is-invalid');
  } else {
    inputPhone.classList.remove('is-invalid');
  }
}