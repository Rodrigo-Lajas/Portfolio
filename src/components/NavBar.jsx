import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <nav className="bg-gray-800 text-white fixed top-0 w-full shadow-2xl">
            <div className="p-4 md:hidden">
                <button className="text-white bg-gray-700 hover:bg-gray-600 focus:outline-none rounded p-2 transition duration-300 ease-in-out" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                </button>
            </div>
            <ul className="hidden md:flex items-center justify-evenly space-x-4 my-2 p-4">
                <li className=" mx-4 font-noto-sans text-lg font-bold"><a href="#" className='hover:text-lime-400 active:text-lime-600 transition duration-300 ease-in-out'>Inicio</a></li>
                <li className="mx-4 font-noto-sans text-lg font-bold"><a href="#about" className='hover:text-lime-400 active:text-lime-600 transition duration-300 ease-in-out'>Acerca de mi</a></li>
                <li className="mx-4 font-noto-sans text-lg font-bold"><a href="#projects" className='hover:text-lime-400 active:text-lime-600 transition duration-300 ease-in-out'>Proyectos</a></li>
                <li className="mx-4 font-noto-sans text-lg font-bold"><a href="#contact" className='hover:text-lime-400 active:text-lime-600 transition duration-300 ease-in-out'>Contacto</a></li>
            </ul>

            {isMenuOpen ? (
                <ul className='flex-col h-screen w-full fixed bg-gray-800 md:hidden'>
                    <li className="font-noto-sans text-2xl font-bold mx-4 py-8 flex justify-center"><a href="#" onClick={closeMenu}>Inicio</a></li>
                    <li className="font-noto-sans text-2xl font-bold  mx-4 py-8 flex justify-center"><a href="#about" onClick={closeMenu}>Acerca de mi</a></li>
                    <li className="font-noto-sans text-2xl font-bold mx-4 py-8 flex justify-center"><a href="#projects" onClick={closeMenu}>Proyectos</a></li>
                    <li className="font-noto-sans text-2xl font-bold mx-4 py-8 flex justify-center"><a href="#contact" onClick={closeMenu}>Contacto</a></li>
                </ul>
            ) : null}
        </nav>
    );
}      
