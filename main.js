const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');

// Função que alterna as classes active/open
function toggleMenu() {
    const isOpen = hamburger.classList.toggle('open');
    navList.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
}

// Abre/fecha ao clicar no botão hambúrguer
hamburger.addEventListener('click', toggleMenu);

// Fecha o menu automaticamente ao clicar em qualquer link (ideal para páginas únicas)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navList.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

