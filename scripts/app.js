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
btnToggleFilter?.addEventListener("click", () => {
  filter.classList.toggle("active");
  overlayBody.classList.toggle("active");
});
overlayBody?.addEventListener("click", () => {
  filter.classList.remove("active");
  overlayBody.classList.remove("active");
});

// ===== Slide home page
const slideLinks = document.querySelectorAll(".slide-links ul li");
const slides = document.querySelectorAll(".slide-item-info");
const slideProgressBar = document.querySelector(".slide-progress-bar");
if (slideProgressBar) slideProgressBar.style.height = `calc(100% / ${slideLinks.length})`;
let offset = 0;
slideLinks.forEach((li) => {
  li.addEventListener("click", () => {
    const slideItem = li.getAttribute("data-slide");
    const indexSlide = li.getAttribute("data-index");
    hideAllSlide();
    deActiveLi();
    document.querySelector(`.${slideItem}`).classList.add("active");
    li.classList.add("active");
    if (indexSlide == 1) {
        offset = 0;
    } else {
        offset = slideProgressBar.offsetHeight * (indexSlide - 1);
    }
    slideProgressBar.style.top = `${offset}px`;
  });
});
const hideAllSlide = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
};
const deActiveLi = () => {
    slideLinks.forEach((slideLink) => {
        slideLink.classList.remove("active");
    });
}

// ====== Change pagination
const btnsPagination = document.querySelectorAll(".btn-pagination");
btnsPagination.forEach(btn => {
  btn.addEventListener("click", () => {
    btnsPagination.forEach((btnPaginate) => {
      btnPaginate.classList.remove("active");
    });

    btn.classList.add("active")
  });
})
