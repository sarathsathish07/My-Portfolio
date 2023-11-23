var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var subjectError = document.getElementById("subject-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = "Valid";
  nameError.style.color = "green";
  return true;
}
function validateEmail() {
  var email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email is invalid";
    return false;
  }
  emailError.innerHTML = "Valid";
  emailError.style.color = "green";
  return true;
}

function validateSubject() {
  var subject = document.getElementById("contact-subject").value;
  if (subject.length == 0) {
    subjectError.innerHTML = "Subject is required";
    subjectError.style.color = "red";
    return false;
  }
  subjectError.innerHTML = "Valid";
  subjectError.style.color = "green";
  return true;
}

function validateMessage() {
  var message = document.getElementById("contact-message").value;
  var required = 20;
  var left = required - message.length;
  if (left > 0) {
    messageError.innerHTML = left + "more characters required";
    return false;
  }

  messageError.innerHTML = "Valid";
  messageError.style.color = "green";
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validateEmail() ||
    !validateSubject() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please enter all the fields to submit ";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
