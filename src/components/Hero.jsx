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

const skillsArray = [
    { id: 1, name: "HTML", link: "https://www.html.com/", logo: htmlLogo },
    { id: 2, name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", logo: cssLogo },
    { id: 3, name: "JavaScript", link: "https://www.javascript.com/", logo: jsLogo },
    { id: 4, name: "React", link: "https://reactjs.org/", logo: reactLogo },
    { id: 5, name: "Bootstrap", link: "https://getbootstrap.com/", logo: bootstrapLogo },
    { id: 6, name: "Tailwind", link: "https://tailwindcss.com/", logo: tailwindLogo },
    { id: 7, name: "Material UI", link: "https://mui.com/", logo: materialUiLogo },
]

export default function Hero() {
    return (
        <section id="hero" className="bg-gray-800 text-white p-4 pt-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col items-center justify-center m-4">
                    <h1 className="flex items-center justify-center m-4 text-4xl leading-normal font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 font-noto-sans sm:text-6xl sm:leading-normal">Hola! Soy Rodrigo Lajas</h1>
                    <p className="flex items-center justify-center m-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 text-2xl font-bold leading-normal font-noto-sans">Soy un desarrollador front-end en formación con pasión por crear aplicaciones web.</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={heroImage} alt="Hero Image" className="w-4/5 h-auto object-contain my-8 border-4 border-l-lime-400 border-t-lime-200 border-r-lime-200 border-b-lime-400 shadow-lg" loading='lazy' />
                </div>
            </div>
            <div className="flex mx-auto items-center justify-center">
                <h3 className="flex items-center justify-center text-4xl font-bold font-noto-sans w-auto m-8 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 sm:text-4xl sm:leading-normal">Skills</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center">
                {skillsArray.map((skill) => (
                    <motion.div key={skill.id} {...buttonAnimation}>
                        <a href={skill.link} target="_blank" rel="noopener noreferrer">
                            <img src={skill.logo} alt={skill.name} className="w-24 h-24 p-2 m-2" loading='lazy'/>
                        </a>
                    </motion.div>
                ))
                }
            </div>
        </section>
    );
}