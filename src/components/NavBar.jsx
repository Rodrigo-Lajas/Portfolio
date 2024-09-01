import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { buttonAnimation } from './ui/buttonAnimation';

const navBarLi = "mx-4 font-noto-sans text-lg font-bold"

const navBarLiHover = "hover:text-lime-400 active:text-lime-600 transition duration-300 ease-in-out"

const mobileNavLi = "font-noto-sans text-2xl font-bold mx-4 py-8 flex justify-center"

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (

        <nav className="bg-gray-800 text-white fixed top-0 w-full shadow-2xl bg-opacity-50 backdrop-blur">
            <div className="p-4 md:hidden">
                <button className="text-white bg-gray-700 hover:bg-gray-600 focus:outline-none rounded p-2 transition duration-300 ease-in-out" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                </button>
            </div>

            <ul className="hidden md:flex items-center justify-evenly space-x-4 my-2 p-4">
                <motion.li {...buttonAnimation} className={navBarLi}><a href="#" className={navBarLiHover}>Inicio</a></motion.li>
                <motion.li {...buttonAnimation} className={navBarLi}><a href="#about" className={navBarLiHover}>Acerca de mi</a></motion.li>
                <motion.li {...buttonAnimation} className={navBarLi}><a href="#projects" className={navBarLiHover}>Proyectos</a></motion.li>
                <motion.li {...buttonAnimation} className={navBarLi}><a href="#contact" className={navBarLiHover}>Contacto</a></motion.li>
            </ul>

            {isMenuOpen ? (
                <ul className='flex-col h-screen w-full fixed bg-gray-800 md:hidden'>
                    <li className={mobileNavLi}><a href="#" onClick={closeMenu}>Inicio</a></li>
                    <li className={mobileNavLi}><a href="#about" onClick={closeMenu}>Acerca de mi</a></li>
                    <li className={mobileNavLi}><a href="#projects" onClick={closeMenu}>Proyectos</a></li>
                    <li className={mobileNavLi}><a href="#contact" onClick={closeMenu}>Contacto</a></li>
                </ul>
            ) : null}
        </nav>
    );
}      
