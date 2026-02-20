// projects.js

/*
  INSTRUCCIONES PARA AGREGAR PROYECTOS:
  1. Copia el bloque de código entre las llaves { } de un proyecto existente.
  2. Pégalo al final del array `projects`, antes del cierre final de corchetes `]`.
  3. Asegúrate de poner una coma (,) después del cierre de llave `}` del proyecto anterior.
  4. Cambia los datos (id, title, shortDescription, etc.) por los de tu nuevo proyecto.
*/

const projects = [
    {
        id: 1,
        title: "Asistente de Tareas IA",
        shortDescription: "Aplicación de gestión de tareas potenciada con IA para priorizar actividades.",
        longDescription: "Una herramienta inteligente que no solo lista tus tareas, sino que utiliza algoritmos de procesamiento de lenguaje natural para entender la urgencia e importancia de cada una, sugiriendo el orden óptimo de ejecución. Ideal para aumentar la productividad diaria.",
        image: "https://via.placeholder.com/400x250/0ea5e9/ffffff?text=AI+Task+Manager", // Placeholder image
        tags: ["React", "OpenAI API", "Node.js"],
        links: {
            demo: "#", // Poner URL real o dejar #
            code: "#"  // Poner URL real o dejar #
        }
    },
    {
        id: 2,
        title: "Vibecoding Portfolio",
        shortDescription: "Este mismo portafolio, diseñado para destacar creatividad y soluciones.",
        longDescription: "Un sitio web personal construido desde cero con HTML, CSS y JavaScript vainilla. Enfocado en la experiencia de usuario (UX), animaciones suaves y una estética 'Vibecoding' que refleja mi personalidad y enfoque profesional.",
        image: "https://via.placeholder.com/400x250/6366f1/ffffff?text=Portfolio+Vibecoding", // Placeholder image
        tags: ["HTML5", "CSS3", "JavaScript"],
        links: {
            demo: "#",
            code: "https://github.com/tu-usuario/tu-repo"
        }
    },
    {
        id: 3,
        title: "Bot de Automatización",
        shortDescription: "Script para automatizar reportes diarios de mantenimiento industrial.",
        longDescription: "Desarrollé un script en Python que extrae datos de sensores industriales, genera un reporte en PDF y lo envía automáticamente por correo electrónico a los supervisores cada mañana, ahorrando 2 horas de trabajo manual diario.",
        image: "https://via.placeholder.com/400x250/10b981/ffffff?text=Automation+Bot", // Placeholder image
        tags: ["Python", "Pandas", "Automation"],
        links: {
            demo: "#",
            code: "#"
        }
    }
];
