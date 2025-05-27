

const signupForm = document.querySelector("#signup-form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const validateUsername = () => {
  if (username.value.trim() === "") {
    //failed
    setError(username, "username is required");
    // return false;
  } else {
    setSuccess(username);
    return true;
  }
};

function validateEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    setError(email, "Please enter a valid email address.");
    return false;
  } else {
    setSuccess(email);
    return true;
  }
}

function validatePassword() {
  if (password.value.length < 5) {
    setError(password, "Password must be at least 5 characters long.");
    return false;
  } else {
    setSuccess(password);
    return true;
  }
}

const setError = (element, error) => {
  element.classList.add("invalid");
  element.parentElement.querySelector(".error-message").textContent = error;
};

const setSuccess = (element) => {
  element.classList.remove("invalid");
  element.parentElement.querySelector(".error-message").textContent = "";
};

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const isUserNameValid = validateUsername();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];


  
  if (isUserNameValid && isEmailValid && isPasswordValid) {

     const newUser = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    console.log("Form submitted successfully!");
    console.log(newUser);
    window.location.href = "./pages/login.html";
  } else {
    console.log("Form submission failed.");
  }
});
