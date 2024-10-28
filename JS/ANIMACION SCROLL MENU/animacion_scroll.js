// MENU PC
// botones
const ABOUT_ME_BOTON = document.getElementById("about_me_boton");
const PORTAFOLIO_BOTON = document.getElementById("portafolio_boton");
const CONTACT_FORM_BOTON = document.getElementById("contact_form_boton");

const ABOUT_ME = document.getElementById("SOBRE_MI");
const PORTAFOLIO = document.getElementById("PORTAFOLIO");
const CONTACT_FORM = document.getElementById("FORMULARIO_DE_CONTACTO")

const BOTON_INICIO = document.getElementById("boton_inicio");


// MENU MOBILE ---
const ABOUT_ME_MOBILE = document.getElementById("about_me_mobile");
const PORTAFOLIO_MOBILE = document.getElementById("portafolio_mobile");
const FORM_CONTACT_MOBILE = document.getElementById("form_contact_mobile");


const scrollBoton = (elemento) => {
    const target = document.querySelector(elemento);
    if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY; // Obtiene la posición del elemento
        window.scrollTo({
            top: top,
            behavior: 'smooth' // Desplazamiento suave
        });
    }
};

// pc
ABOUT_ME_BOTON.addEventListener('click', () => {scrollBoton('#SOBRE_MI');});
PORTAFOLIO_BOTON.addEventListener('click', () => {scrollBoton('#PORTAFOLIO');});
CONTACT_FORM_BOTON.addEventListener('click', () => {scrollBoton('#FORMULARIO_DE_CONTACTO');});


// mobile
ABOUT_ME_MOBILE.addEventListener('click', () => {scrollBoton('#SOBRE_MI'), cerrarVentanModal();});
PORTAFOLIO_MOBILE.addEventListener('click', () => {scrollBoton('#PORTAFOLIO'), cerrarVentanModal();});
FORM_CONTACT_MOBILE.addEventListener('click', () => {scrollBoton('#FORMULARIO_DE_CONTACTO'), cerrarVentanModal();});




// vuelve al inicio
const inicio = 0;
const scroll_0 = (valor) => {
    window.scrollTo({
        top: valor,
        behavior: 'smooth'
    });
};


BOTON_INICIO.addEventListener("click", () => scroll_0(inicio));