const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Alterna o estado do menu (Abre / Fecha)
const toggleMenu = () => {
    const isActive = hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
    // Melhora a acessibilidade indicando se o menu está aberto
    hamburger.setAttribute("aria-expanded", isActive);
};

hamburger.addEventListener("click", toggleMenu);

// Fecha o menu ao clicar em qualquer link interno
document.querySelectorAll(".nav-link, .btn-contato").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
    });
});


