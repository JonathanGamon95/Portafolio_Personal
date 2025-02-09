// Obtener el botón
const scrollButton = document.getElementById('boton_inicio');

// Función para mostrar u ocultar el botón
function toggleButtonVisibility() {
    if (window.scrollY > 800) { // Si el scroll es mayor a 500px
        //scrollButton.style.display = 'block'; // Mostrar el botón
        scrollButton.style.transform = "translateY(0px)";
    } else {
        scrollButton.style.transform = "translateY(100px)";
        //scrollButton.style.display = 'none'; // Ocultar el botón
    }
}

// Agregar un event listener para el evento de scroll
window.addEventListener('scroll', toggleButtonVisibility);

// Agregar acción al botón (por ejemplo, subir al principio)
scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
});
