const header = document.getElementById("header");
const nav = document.getElementById("nav");
const menuMobile = document.getElementById("menuMobile");
const navLinks = document.querySelectorAll(".nav a");


// =====================================================
// HEADER AO ROLAR A PÁGINA
// =====================================================

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// =====================================================
// MENU MOBILE
// =====================================================

menuMobile.addEventListener("click", () => {

    nav.classList.toggle("active");
    document.body.classList.toggle("menu-open");

    const icon = menuMobile.querySelector("i");

    if (nav.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// =====================================================
// FECHAR MENU AO CLICAR
// =====================================================

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");
        document.body.classList.remove("menu-open");

        const icon = menuMobile.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// =====================================================
// DESTACAR SEÇÃO ATUAL NO MENU
// =====================================================

const sections = document.querySelectorAll("section[id]");

function activeMenu() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + currentSection) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", activeMenu);


// =====================================================
// ANO AUTOMÁTICO
// =====================================================

const year = document.getElementById("currentYear");

if (year) {
    year.textContent = new Date().getFullYear();
}