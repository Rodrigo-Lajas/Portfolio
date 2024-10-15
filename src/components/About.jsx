import Perfil from '../assets/IMG_6802.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
    return (
        AOS.init(),
        <section id="about" className="bg-gray-800 text-white p-4 pt-12 ">
            <h3 className="flex items-center justify-center text-4xl font-noto-sans font-bold w-auto m-8 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 sm:text-6xl sm:leading-normal">Acerca de mí</h3>
            <div data-aos="flip-down" className="w-full max-w-xs bg-gray-600 rounded-lg shadow-lg mx-auto">
                <img className="object-cover w-full h-56 rounded-lg" src={Perfil} alt="avatar"></img>
                    <div className="py-5 text-center">
                        <p className="block text-xl font-bold text-white" tabIndex="0" role="link">Rodrigo Lajas</p>
                        <span className="text-sm text-slate-300 ">FrontEnd Developer</span>
                    </div>
            </div>
            <p data-aos="fade-up" className="flex m-8 text-2xl font-noto-sans font-bold leading-normal text-slate-300 mx-8">Soy un desarrollador Front End en formación, apasionado por la creación de interfaces web atractivas y funcionales. Actualmente estoy aprendiendo a dominar tecnologías como React, Bootstrap y Tailwind CSS, que utilizo para construir proyectos dinámicos y modernos.</p>
        </section>
    );
}