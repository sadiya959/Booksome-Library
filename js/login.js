

const loginForm = document.querySelector("#login-form")
const email = document.querySelector("#email")
const password = document.querySelector("#password")



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


loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

      const isEmailValid = validateEmail();
      const isPasswordValid = validatePassword();

    if(isEmailValid && isPasswordValid){
        const existingUsers = JSON.parse(localStorage.getItem('users'))
          
       existingUsers.forEach(user => {
        if(user.email === email.value && user.password === password.value){
            console.log("Form submitted successfully!");
            window.location.href = "../pages/dashboard.html";
        }
       });
       
    }

    
})