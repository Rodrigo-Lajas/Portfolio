import { useState } from 'react';

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <nav className="bg-gray-800 text-white p-4 fixed top-0 w-full">
            <div className="md:hidden">
                <button className="text-white bg-gray-700 hover:bg-gray-600 focus:outline-none rounded p-2 transition duration-300 ease-in-out" onClick={toggleMenu}>
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <ul className="hidden md:flex items-center justify-center space-x-4">
                <li className="font-bold mx-4 text-2xl"><a href="#" className='hover:text-lime-400 active:text-lime-600 transition duration-300 ease-in-out'>Inicio</a></li>
                <li className="font-bold mx-4 text-2xl"><a href="#about" className='hover:text-lime-400 active:text-lime-600 transition duration-300 ease-in-out'>Acerca de mi</a></li>
                <li className="font-bold mx-4 text-2xl"><a href="#projects" className='hover:text-lime-400 active:text-lime-600 transition duration-300 ease-in-out'>Proyectos</a></li>
                <li className="font-bold mx-4 text-2xl"><a href="#contact" className='hover:text-lime-400 active:text-lime-600 transition duration-300 ease-in-out'>Contacto</a></li>
            </ul>

            {isMenuOpen ? (
                <ul className='flex-col md:hidden'>
                    <li className="font-bold mx-4 py-2 flex justify-center"><a href="#" onClick={closeMenu}>Inicio</a></li>
                    <li className="font-bold mx-4 py-2 flex justify-center"><a href="#about" onClick={closeMenu}>Acerca de mi</a></li>
                    <li className="font-bold mx-4 py-2 flex justify-center"><a href="#projects" onClick={closeMenu}>Proyectos</a></li>
                    <li className="font-bold mx-4 py-2 flex justify-center"><a href="#contact" onClick={closeMenu}>Contacto</a></li>
                </ul>
            ) : null}
        </nav>
    );
}      
