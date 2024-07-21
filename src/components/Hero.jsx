export default function Hero() {
    return (
        <section id="hero" className="bg-gray-800 text-white p-4">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col items-center justify-center m-4">
                    <h1 className="flex items-center justify-center m-4 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 sm:text-6xl">Bienvenido a mi Portafolio</h1>
                    <p className="flex items-center justify-center m-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 text-2xl font-bold">Soy un desarrollador front-end en formación con pasión por crear aplicaciones web.</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src="src/assets/IMG_5893.webp" alt="Hero Image" className="w-full h-full object-cover my-8 border-l-lime-400" />
                </div>
            </div>
            <div className="flex mx-auto items-center justify-center">
                <h3 className="flex items-center justify-center text-2xl font-bold w-auto m-8 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 text-2xl sm:text-4xl">Principales tecnologias que manejo</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    {/* <p className="flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 p-2 m-2 text-xl">HTML</p> */}
                    <img src="src/assets/html-5-svgrepo-com.svg" alt="HTML" className="w-24 h-24 p-2 m-2" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    {/* <p className="flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 p-2 m-2 text-xl">CSS</p> */}
                    <img src="src/assets/css-3-svgrepo-com.svg" alt="CSS" className="w-24 h-24 p-2 m-2"/>
                </div>
                <div>
                {/* <p className="flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 p-2 m-2 text-xl">JavaScript</p> */}
                <img src="src/assets/javascript-logo-svgrepo-com.svg" alt="JavaScript" className="w-24 h-24 p-2 m-2" />
                </div>
                <div>
                {/* <p className="flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 p-2 m-2 text-xl">React</p> */}
                <img src="src/assets/react-svgrepo-com.svg" alt="React" className="w-24 h-24 p-2 m-2" />
                </div>
                <div>
                {/* <p className="flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 p-2 m-2 text-xl">Bootstrap</p> */}
                <img src="src/assets/bootstrap-svgrepo-com.svg" alt="Bootstrap" className="w-24 h-24 p-2 m-2" />
                </div>
                <div>
                {/* <p className="flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 p-2 m-2 text-xl">Tailwind</p> */}
                <img src="src/assets/tailwind-svgrepo-com.svg" alt="Tailwind" className="w-24 h-24 p-2 m-2" />
                </div>
                <div>
                {/* <p className="flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 p-2 m-2 text-xl">Material UI</p> */}
                <img src="src/assets/material-ui-svgrepo-com.svg" alt="Material UI" className="w-24 h-24 p-2 m-2" />
                </div>
            </div>
        </section>
    );
}