const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Abre e fecha o menu ao clicar no hambúrguer
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Fecha o menu quando um link é clicado (útil para páginas de uma única página/one-page)
document.querySelectorAll(".nav-link, .btn-contato").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

