import houstonGuitarShop from '../assets/houstonGuitarShop.webp';
import tiendaGuitarras from '../assets/tiendaDeGuitarras.webp';
import tiendaCelulares from '../assets/tiendaDeTelefonosCelulares.webp';

const Projects = [
    {
        id: 1,
        title: "Houston guitar shop",
        description: "Proyecto basado en una tienda ficticia que ofrece instrumentos musicales, accesorios, y cursos de guitarra de distintos niveles de dificultad.",
        imageUrl: houstonGuitarShop,
        link: "https://houstonguitarshop.vercel.app/",
        tags: ["HTML", "CSS", "SASS", "Bootstrap"],
    },
    {
        id: 2,
        title: "Tienda de guitarras",
        description: "Proyecto creado a partir de una tienda ficticia de guitarras y accesorios. Se hace uso de carrito, sus funciones, y de filtro según productos o categorías.",
        imageUrl: tiendaGuitarras,
        link: "https://tienda-de-guitarras-one.vercel.app/",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
        id: 3,
        title: "Tienda de telefonos celulares",
        description: "Proyecto creado a partir de una tienda ficticia de celulares. Se hace uso de carrito, sus funciones, y de filtro por categorías.",
        imageUrl: tiendaCelulares,  
        link: "https://tienda-de-telefonos-celulares.vercel.app/",
        tags: ["HTML", "CSS", "JavaScript", "React", "React Bootstrap", "Firebase",],
    },
]

export default Projects;