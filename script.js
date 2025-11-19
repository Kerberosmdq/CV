// script.js

// Este evento asegura que el script se ejecute solo cuando el DOM (estructura HTML) esté completamente cargado.
document.addEventListener('DOMContentLoaded', () => {

    // Define la altura de la barra de navegación (70px, según tu CSS).
    // Esto es crucial para que el scroll se detenga justo debajo de la barra fija y no oculte el título de la sección.
    const navHeight = 70;

    // Selecciona todos los enlaces de la barra de navegación y el botón principal de CTA que empiecen con '#'
    const navLinks = document.querySelectorAll('.navbar a[href^="#"], .boton-principal');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Detiene el comportamiento de salto brusco del enlace

            const targetId = this.getAttribute('href'); // Obtiene el #id destino (ej: #contact)
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calcula la posición de scroll. Restamos la altura de la barra de navegación
                // para crear un pequeño margen superior.
                const scrollPosition = targetElement.offsetTop - navHeight;

                // Realiza el scroll de forma suave (animada)
                window.scrollTo({
                    top: scrollPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mensaje en la consola para desarrolladores
    console.log("%c¡Hola! Gracias por inspeccionar mi código.", "color: #0ea5e9; font-size: 16px; font-weight: bold;");
});