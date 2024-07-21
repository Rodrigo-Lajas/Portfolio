export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex items-center justify-center space-x-4">
                <li className="font-bold mx-4"><a href="#hero">Inicio</a></li>
                <li className="font-bold mx-4"><a href="#about">Acerca de mi</a></li>
                <li className="font-bold mx-4"><a href="#projects">Proyectos</a></li>
                <li className="font-bold mx-4"><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    );
}      
