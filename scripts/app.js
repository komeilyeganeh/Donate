
// ===== Toggle menu mobile 
const btnBars = document.querySelector(".menu-bars");
const navbar = document.querySelector(".navbar");
btnBars.addEventListener("click", () => {
    navbar.classList.toggle("active");
    btnBars.classList.toggle("active");
});

// ===== Toggle filter menu
const btnToggleFilter = document.querySelector(".toggle-filter");
const filter = document.querySelector(".donate-filter");
const overlayBody = document.querySelector(".overlay-body");
btnToggleFilter.addEventListener("click", () => {
    filter.classList.toggle("active");
    overlayBody.classList.toggle("active");
});
overlayBody.addEventListener("click", () => {
    filter.classList.remove("active");
    overlayBody.classList.remove("active");
});
