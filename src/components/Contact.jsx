import github from '../assets/github-svgrepo-com.svg';
import linkedin from '../assets/linkedin-svgrepo-com.svg';
import mail from '../assets/mail-svgrepo-com.svg';

export default function Contacto() {

    const contactArray = [
        { id: 1, name: "GitHub", link: "https://github.com/Rodrigo-Lajas", logo: github },
        { id: 2, name: "LinkedIn", link: "https://www.linkedin.com/in/rodrigolajas/", logo: linkedin },
        { id: 3, name: "Mail", link: "mailto:rodrigolajas18@gmail.com", logo: mail },
    ]

    return (
        <section id="contact" className="bg-gray-800 text-white p-4 pt-12">
            <h3 className="flex items-center justify-center text-4xl leading-normal font-bold font-noto-sans w-auto m-8 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 sm:text-6xl sm:leading-normal">
                Contacto
            </h3>
            <div className="flex items-center justify-center mt-8">
                {contactArray.map((contact) => (                   
                <div key={contact.id}>
                    <a href={contact.link} target="_blank" rel="noopener noreferrer" className="transition duration-300 ease-in-out">
                        <img src={contact.logo} alt={contact.name} className="w-24 h-24 p-2 m-2" loading='lazy' />
                    </a>
                </div>
                ))}
            </div>
        </section >
    );
}