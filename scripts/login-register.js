// ===== Toggle show/hide password
let btnTogglePass = document.querySelector(".password-icon");
let inputPass = document.querySelector(".input-pass");
btnTogglePass.addEventListener("click", () => {
    if (inputPass.getAttribute("type") === "password") {
        inputPass.setAttribute("type", "text");
    } else {
        inputPass.setAttribute("type", "password");
    }
});

// ===== Switch between login and registration form
let btnLogin = document.querySelector(".login-link a");
let btnRegister = document.querySelector(".register-link a");
let loginForm = document.querySelector(".login-content-box");
let registerForm = document.querySelector(".register-content-box");

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    registerForm.classList.remove("active");
    loginForm.classList.add("active");
});
btnRegister.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
});
