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