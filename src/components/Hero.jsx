import heroImage from '../assets/IMG_5893.webp';
import htmlLogo from '../assets/html-5-svgrepo-com.svg';
import cssLogo from '../assets/css-3-svgrepo-com.svg';
import jsLogo from '../assets/javascript-logo-svgrepo-com.svg';
import reactLogo from '../assets/react-svgrepo-com.svg';
import bootstrapLogo from '../assets/bootstrap-svgrepo-com.svg';
import tailwindLogo from '../assets/tailwind-svgrepo-com.svg';
import materialUiLogo from '../assets/material-ui-svgrepo-com.svg';

export default function Hero() {
    return (
        <section id="hero" className="bg-gray-800 text-white p-4 mt-4">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col items-center justify-center m-4">
                    <h1 className="flex items-center justify-center m-4 text-4xl leading-normal font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 sm:text-6xl sm:leading-normal">Hola! Soy Rodrigo Lajas</h1>
                    <p className="flex items-center justify-center m-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 text-2xl font-bold leading-normal">Soy un desarrollador front-end en formación con pasión por crear aplicaciones web.</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={heroImage} alt="Hero Image" className="w-full h-full object-contain my-8 border-4 border-l-lime-400 border-t-lime-200 border-r-lime-200 border-b-lime-400" />
                </div>
            </div>
            <div className="flex mx-auto items-center justify-center">
                <h3 className="flex items-center justify-center text-2xl font-bold w-auto m-8 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 text-2xl sm:text-4xl sm:leading-normal">Principales tecnologias que manejo</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <a href="https://www.html.com/" target="_blank" rel="noopener noreferrer">
                        <img src={htmlLogo} alt="HTML" className="w-24 h-24 p-2 m-2" />
                    </a>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                    <img src={cssLogo} alt="CSS" className="w-24 h-24 p-2 m-2" />
                    </a>
                </div>
                <div>
                    <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                        <img src={jsLogo} alt="JavaScript" className="w-24 h-24 p-2 m-2" />
                    </a>
                </div>
                <div>
                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                        <img src={reactLogo} alt="React" className="w-24 h-24 p-2 m-2" />
                    </a>
                </div>
                <div>
                    <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                        <img src={bootstrapLogo} alt="Bootstrap" className="w-24 h-24 p-2 m-2" />
                    </a>
                </div>
                <div>
                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                        <img src={tailwindLogo} alt="Tailwind" className="w-24 h-24 p-2 m-2" />
                    </a>
                </div>
                <div>
                    <a href="https://mui.com/" target="_blank" rel="noopener noreferrer">
                        <img src={materialUiLogo} alt="Material UI" className="w-24 h-24 p-2 m-2" />
                    </a>
                </div>
            </div>
        </section>
    );
}