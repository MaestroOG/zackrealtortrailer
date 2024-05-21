var swiper = new Swiper(".testimonials-bottom", {
    loop: true
});

const navbar = document.querySelector(".navbar-container")

document.addEventListener("scroll", () => {
    if (window.scrollY > 46) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }
})