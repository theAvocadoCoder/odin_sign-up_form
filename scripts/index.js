function checkPasswordMatch() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    displayErrorMessage();
  } else {
    removeErrorMessage();
  }
}

function displayErrorMessage() {
  removeErrorMessage();
  const textNode = document.createTextNode("* Passwords do not match");
  passwordInput.classList.toggle("error", true);
  confirmPasswordInput.classList.toggle("error", true);
  passwordErrorMessage.appendChild(textNode);
}

function removeErrorMessage() {
  if (passwordErrorMessage.firstChild) {
    passwordErrorMessage.removeChild(passwordErrorMessage.firstChild); 
    passwordInput.classList.toggle("error", false);
    confirmPasswordInput.classList.toggle("error", false);
  }
}


const passwordErrorMessage = document.querySelector("#password-error-message"),
  passwordInput = document.querySelector("#password"),
  confirmPasswordInput = document.querySelector("#confirm-password"),
  submitButton = document.querySelector("button");

confirmPasswordInput.addEventListener("change", checkPasswordMatch);

submitButton.addEventListener("click", (e)=>{
  e.preventDefault;
  checkPasswordMatch();
})
