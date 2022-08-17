
// ===== Toggle menu mobile 
const btnBars = document.querySelector(".menu-bars");
const navbar = document.querySelector(".navbar");
btnBars.addEventListener("click", () => {
    navbar.classList.toggle("active");
    btnBars.classList.toggle("active");
});
