import heroImage from '../assets/IMG_5893.webp';
import htmlLogo from '../assets/html-5-svgrepo-com.svg';
import cssLogo from '../assets/css-3-svgrepo-com.svg';
import jsLogo from '../assets/javascript-logo-svgrepo-com.svg';
import reactLogo from '../assets/react-svgrepo-com.svg';
import bootstrapLogo from '../assets/bootstrap-svgrepo-com.svg';
import tailwindLogo from '../assets/tailwind-svgrepo-com.svg';
import materialUiLogo from '../assets/material-ui-svgrepo-com.svg';

import { motion } from "framer-motion"
import { buttonAnimation } from './ui/buttonAnimation';

export default function Hero() {
    return (
        <section id="hero" className="bg-gray-800 text-white p-4 pt-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col items-center justify-center m-4">
                    <h1 className="flex items-center justify-center m-4 text-4xl leading-normal font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 font-noto-sans sm:text-6xl sm:leading-normal">Hola! Soy Rodrigo Lajas</h1>
                    <p className="flex items-center justify-center m-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 text-2xl font-bold leading-normal font-noto-sans">Soy un desarrollador front-end en formación con pasión por crear aplicaciones web.</p>
                </div>
                <div className="flex flex-col items-center justify-center m-4">
                    <img src={heroImage} alt="Hero Image" className="w-4/5 h-auto object-contain my-8 border-4 border-l-lime-400 border-t-lime-200 border-r-lime-200 border-b-lime-400" loading='lazy'/>
                </div>
            </div>
            <div className="flex mx-auto items-center justify-center">
                <h3 className="flex items-center justify-center text-4xl font-bold font-noto-sans w-auto m-8 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 sm:text-4xl sm:leading-normal">Skills</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center">
                <motion.div {...buttonAnimation}>
                    <a href="https://www.html.com/" target="_blank" rel="noopener noreferrer">
                        <img src={htmlLogo} alt="HTML" className="w-24 h-24 p-2 m-2" loading='lazy'/>
                    </a>
                </motion.div>
                <motion.div {...buttonAnimation} className="flex flex-col items-center justify-center">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                        <img src={cssLogo} alt="CSS" className="w-24 h-24 p-2 m-2" loading='lazy'/>
                    </a>
                </motion.div>
                <motion.div {...buttonAnimation}>
                    <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                        <img src={jsLogo} alt="JavaScript" className="w-24 h-24 p-2 m-2" loading='lazy'/>
                    </a>
                </motion.div>
                <motion.div {...buttonAnimation}>
                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                        <img src={reactLogo} alt="React" className="w-24 h-24 p-2 m-2" />
                    </a>
                </motion.div>
                <motion.div {...buttonAnimation}>
                    <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                        <img src={bootstrapLogo} alt="Bootstrap" className="w-24 h-24 p-2 m-2" />
                    </a>
                </motion.div>
                <motion.div {...buttonAnimation}>
                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                        <img src={tailwindLogo} alt="Tailwind" className="w-24 h-24 p-2 m-2" />
                    </a>
                </motion.div>
                <motion.div {...buttonAnimation}>
                    <a href="https://mui.com/" target="_blank" rel="noopener noreferrer">
                        <img src={materialUiLogo} alt="Material UI" className="w-24 h-24 p-2 m-2" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}