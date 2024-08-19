import github from '../assets/github-svgrepo-com.svg';
import linkedin from '../assets/linkedin-svgrepo-com.svg';
import mail from '../assets/mail-svgrepo-com.svg';
export default function Contacto() {
    return (
        <section id="contact" className="bg-gray-800 text-white p-4 scroll-mt-16">
        <h3 className="flex items-center justify-center text-4xl leading-normal font-bold font-noto-sans w-auto m-8 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 sm:text-6xl sm:leading-normal">
            Contacto
        </h3>
        <div className="flex items-center justify-center space-x-6 mt-8">
            <a href="https://github.com/Rodrigo-Lajas" target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:text-lime-300 transition duration-300 ease-in-out text-4xl">
                <img src={github} alt="GitHub" className="w-24 h-24 p-2 m-2" />
            </a>
            <a href="https://www.linkedin.com/in/rodrigolajas/" target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:text-lime-300 transition duration-300 ease-in-out text-4xl">
                <img src={linkedin} alt="LinkedIn" className="w-24 h-24 p-2 m-2" />
            </a>
            <a href="mailto:rodrigolajas18@gmail.com" className="text-lime-400 hover:text-lime-300 transition duration-300 ease-in-out text-4xl">
                <img src={mail} alt="Email" className="w-24 h-24 p-2 m-2" />
            </a>
        </div>
    </section>
    );
}