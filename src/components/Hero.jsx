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
                    <h1 className="flex items-center justify-center m-4 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 sm:text-6xl">Hola! Soy Rodrigo Lajas</h1>
                    <p className="flex items-center justify-center m-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 text-2xl font-bold">Soy un desarrollador front-end en formación con pasión por crear aplicaciones web.</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={heroImage} alt="Hero Image" className="w-full h-full object-cover my-8 border-l-lime-400" />
                </div>
            </div>
            <div className="flex mx-auto items-center justify-center">
                <h3 className="flex items-center justify-center text-2xl font-bold w-auto m-8 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 text-2xl sm:text-4xl">Principales tecnologias que manejo</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    {/* <p className="flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 p-2 m-2 text-xl">HTML</p> */}
                    <img src={htmlLogo} alt="HTML" className="w-24 h-24 p-2 m-2" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    {/* <p className="flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 p-2 m-2 text-xl">CSS</p> */}
                    <img src={cssLogo} alt="CSS" className="w-24 h-24 p-2 m-2"/>
                </div>
                <div>
                {/* <p className="flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 p-2 m-2 text-xl">JavaScript</p> */}
                <img src={jsLogo} alt="JavaScript" className="w-24 h-24 p-2 m-2" />
                </div>
                <div>
                {/* <p className="flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 p-2 m-2 text-xl">React</p> */}
                <img src={reactLogo} alt="React" className="w-24 h-24 p-2 m-2" />
                </div>
                <div>
                {/* <p className="flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 p-2 m-2 text-xl">Bootstrap</p> */}
                <img src={bootstrapLogo} alt="Bootstrap" className="w-24 h-24 p-2 m-2" />
                </div>
                <div>
                {/* <p className="flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 p-2 m-2 text-xl">Tailwind</p> */}
                <img src={tailwindLogo} alt="Tailwind" className="w-24 h-24 p-2 m-2" />
                </div>
                <div>
                {/* <p className="flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 p-2 m-2 text-xl">Material UI</p> */}
                <img src={materialUiLogo} alt="Material UI" className="w-24 h-24 p-2 m-2" />
                </div>
            </div>
        </section>
    );
}