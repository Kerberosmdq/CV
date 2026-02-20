// script.js

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. RENDERIZADO DE PROYECTOS ---
    const projectsContainer = document.getElementById('projects-container');

    // Función para crear las tarjetas de proyectos
    function renderProjects() {
        if (!projectsContainer) return;

        // Verificamos si existe la variable 'projects' (definida en projects.js)
        if (typeof projects === 'undefined') {
            console.error("El archivo projects.js no se ha cargado correctamente.");
            projectsContainer.innerHTML = "<p>Error al cargar proyectos.</p>";
            return;
        }

        projectsContainer.innerHTML = ''; // Limpiar contenedor

        projects.forEach(project => {
            const card = document.createElement('div');
            card.classList.add('project-card');
            // Añadimos un pequeño retraso a la animación de cada tarjeta
            card.style.transitionDelay = `${project.id * 100}ms`;

            // Generamos el HTML de la tarjeta
            card.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-info">
                    <h4>${project.title}</h4>
                    <p>${project.shortDescription}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;

            // Evento click para abrir el modal
            card.addEventListener('click', () => openModal(project));

            projectsContainer.appendChild(card);
        });
    }

    renderProjects();


    // --- 2. LÓGICA DEL MODAL ---
    const modal = document.getElementById('project-modal');
    const closeModalBtn = document.querySelector('.close-modal');

    // Elementos internos del modal
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTags = document.getElementById('modal-tags');
    const modalDemo = document.getElementById('modal-demo');
    const modalCode = document.getElementById('modal-code');

    function openModal(project) {
        modalImage.src = project.image;
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.longDescription;

        // Renderizar tags en el modal
        modalTags.innerHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        // Configurar enlaces
        modalDemo.href = project.links.demo;
        modalCode.href = project.links.code;

        // Mostrar modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll
    }

    // Event listeners para cerrar modal
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // Cerrar al hacer clic fuera del contenido
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Cerrar con tecla ESC
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });


    // --- 3. ANIMACIONES AL SCROLL (Intersection Observer) ---

    const observerOptions = {
        threshold: 0.1, // Se activa cuando el 10% del elemento es visible
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Dejar de observar una vez animado
            }
        });
    }, observerOptions);

    // Seleccionamos elementos a animar
    const animatedElements = document.querySelectorAll('section, .project-card, .skill-card, .puesto-trabajo, .contacto-card');

    animatedElements.forEach(el => {
        el.classList.add('hidden'); // Añadir clase base para ocultar
        observer.observe(el);
    });


    // --- 4. SCROLL SUAVE (Navegación) ---
    const navHeight = 70;
    const navLinks = document.querySelectorAll('.navbar a[href^="#"], .boton-principal');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Solo prevenimos si el link es interno (empieza con #)
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);

                if (targetElement) {
                    const scrollPosition = targetElement.offsetTop - navHeight;
                    window.scrollTo({
                        top: scrollPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    console.log("%c VIBECODING ACTIVATED ", "background: #0ea5e9; color: white; padding: 5px; border-radius: 5px; font-weight: bold;");
});
