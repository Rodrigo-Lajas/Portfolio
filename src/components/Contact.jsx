import github from '../assets/github-svgrepo-com.svg';
import linkedin from '../assets/linkedin-svgrepo-com.svg';
import mail from '../assets/mail-svgrepo-com.svg';

export default function Contacto() {

    //     { id: 2, name: "LinkedIn", link: "https://www.linkedin.com/in/rodrigolajas/", logo: linkedin },
    //     { id: 3, name: "Mail", link: "mailto:rodrigolajas18@gmail.com", logo: mail },

    return (
        <section className="bg-gray-800 pt-12">
            <div className="container px-6 py-12 mx-auto">
                <div className="text-center">
                    <p className="flex items-center justify-center text-4xl font-noto-sans font-bold w-auto m-8 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 sm:text-6xl sm:leading-normal">Contacto</p>

                    <p className="mt-3 text-gray-500">Siéntete libre de contactarme para cualquier consulta.</p>
                </div>

                <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                            <img src={github} alt='github' className="w-6 h-6" />
                        </span>
                        <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Github</h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Explora mis proyectos y contribuciones en GitHub.</p>
                        <a href='https://github.com/Rodrigo-Lajas' className="mt-2 text-blue-500 dark:text-blue-400">Mi perfil de GitHub</a>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                            <img src={linkedin} alt='linkedin' className="w-6 h-6" />
                        </span>

                        <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Linkedin</h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Conéctate para conocer mi experiencia profesional.</p>
                        <a href='https://www.linkedin.com/in/rodrigolajas/' className="mt-2 text-blue-500 dark:text-blue-400">Mi perfil de Linkedin</a>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                            <img src={mail} alt='mail' className="w-6 h-6" />
                        </span>

                        <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Mail</h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Contáctame para cualquier consulta o colaboración.</p>
                        <p className="mt-2 text-blue-500 dark:text-blue-400">Envíame un correo</p>
                    </div>
                </div>
            </div>
        </section>
    );
}