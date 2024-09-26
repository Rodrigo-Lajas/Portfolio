import houstonGuitarShop from '../assets/houstonGuitarShop.webp';
import tiendaGuitarras from '../assets/tiendaDeGuitarras.webp';
import tiendaCelulares from '../assets/tiendaDeTelefonosCelulares.webp';
import automation from '../assets/automationJava.webp';

const Projects = [
    {
        id: 1,
        title: "HOUSTON GUITAR SHOP",
        description: "Proyecto basado en una tienda ficticia que ofrece instrumentos musicales, accesorios, y cursos de guitarra de distintos niveles de dificultad.",
        imageUrl: houstonGuitarShop,
        link: "https://houstonguitarshop.vercel.app/",
        tags: ["HTML", "CSS", "SASS", "Bootstrap"],
    },
    {
        id: 2,
        title: "TIENDA DE GUITARRAS",
        description: "Proyecto creado a partir de una tienda ficticia de guitarras y accesorios. Se hace uso de carrito, sus funciones, y de filtro según productos o categorías.",
        imageUrl: tiendaGuitarras,
        link: "https://tienda-de-guitarras-one.vercel.app/",
        tags: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: 3,
        title: "TIENDA DE TELEFONIA MOVIL",
        description: "Proyecto creado a partir de una tienda ficticia de celulares. Se hace uso de carrito, sus funciones, y de filtro por categorías.",
        imageUrl: tiendaCelulares,  
        link: "https://tienda-de-telefonos-celulares.vercel.app/",
        tags: ["React", "Bootstrap", "Firebase"],
    },
    {
        id: 4,
        title: "AUTOMATION",
        description: "Pequeñas actividades realizadas para ejecutar automatizaciones. Se hizo uso de Selenium, Chrome Driver y Java.",
        imageUrl: automation,
        link: "https://github.com/Rodrigo-Lajas/Automation",
        tags: ["Selenium", "Chrome Driver", "Java"],
    }
]

export default Projects;