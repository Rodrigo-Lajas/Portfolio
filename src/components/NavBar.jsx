import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import navBarItems from '../components/NavBarArray';
import { Link } from 'react-router-dom';

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
        < nav className="bg-gray-800 text-white fixed top-0 w-full shadow-2xl md:bg-opacity-50 backdrop-blur z-10" >
            <div className="p-4 md:hidden">
                <button className="text-white bg-gray-700 hover:bg-gray-600 focus:outline-none rounded p-2 transition duration-300 ease-in-out" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                </button>
            </div>

            <ul className="hidden md:flex items-center justify-evenly space-x-4 my-2 p-4">
                {navBarItems.map((item) => (
                    <li  key={item.id} className={navBarLi}><Link to={item.link} className={navBarLiHover}>{item.title}</Link></li>
                ))}
            </ul>

            {isMenuOpen ? (
                <ul className='flex-col h-screen w-full fixed bg-gray-800 md:hidden'>
                    {navBarItems.map((item) => (
                        <li className={mobileNavLi} key={item.id}><Link to={item.link} onClick={closeMenu}>{item.title}</Link></li>
                    ))}
                </ul>
            ) : null
            }
        </nav >
    );
}      
