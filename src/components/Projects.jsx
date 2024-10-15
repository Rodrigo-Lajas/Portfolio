import { useState } from "react";
import ProjectsArray from "../components/ProjectsArray";
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';


{/*tarjeta de proyectos*/}
function ProjectsCard({ title, description, imageUrl, link, tags = [] }) {

    AOS.init();
    return (
        <article data-aos="fade-up" className="max-w-sm h-full rounded-lg overflow-hidden shadow-lg bg-gray-600">
            <img className="object-cover w-full h-56 rounded-t-md" src={imageUrl} alt={title} />
            <div className="px-6 py-4 flex flex-col">
                <h3 className="font-bold text-xl font-noto-sans mb-4 text-white">{title}</h3>
                <p className="text-slate-300 text-sm font-noto-sans">{description}</p>
                <div className="flex flex-wrap gap-1 mt-4">
                    {tags.map(tag => <span key={tag} className="bg-gradient-to-r from-lime-400 to-lime-100 text-gray-800 rounded-full px-4 py-1 text-xs font-medium font-noto-sans shadow-lg">{tag}</span>)}
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer" className="self-center underline hover:text-lime-400 active:text-lime-600 transition duration-300 ease-in-out mt-4">
                    Ir al sitio
                </a>
            </div>
        </article>
    );
}

ProjectsCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
};

const customButton = "inline-block bg-gradient-to-r from-lime-400 to-lime-100 text-gray-800 rounded-full px-4 py-1 text-xs font-medium font-noto-sans m-1 shadow-lg"

export default function Proyectos() {

    const [selectTag, setSelectTag] = useState('Todos');

    const proyectosFiltrados = selectTag === 'Todos'
        ? ProjectsArray : ProjectsArray.filter((project) => project.tags.includes(selectTag));

    return (
        <section id="projects" className="bg-gray-800 text-white p-4 pt-12">
            <h3 className="flex items-center justify-center text-4xl font-noto-sans leading-normal font-bold w-auto m-8 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 sm:text-6xl sm:leading-normal">Proyectos</h3>
            <div className="flex flex-wrap items-center justify-center p-4">
                <button className={customButton} onClick={() => setSelectTag('Todos')}>Ver todos</button>
                <button className={customButton} onClick={() => setSelectTag('Bootstrap')}>Bootstrap</button>
                <button className={customButton} onClick={() => setSelectTag('CSS')}>CSS</button>
                <button className={customButton} onClick={() => setSelectTag('Firebase')}>Firebase</button>
                <button className={customButton} onClick={() => setSelectTag('HTML')}>HTML</button>
                <button className={customButton} onClick={() => setSelectTag('Java')}>Java</button>
                <button className={customButton} onClick={() => setSelectTag('JavaScript')}>JavaScript</button>
                <button className={customButton} onClick={() => setSelectTag('React')}>React</button>
                <button className={customButton} onClick={() => setSelectTag('Tailwind')}>Tailwind</button>
            </div>

            {/*implementacion de tarjeta*/}
            <div className="grid grid-cols-1 m-8 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
                {proyectosFiltrados.map(project => (
                    <ProjectsCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        link={project.link}
                        repositorio={project.repositorio}
                        tags={project.tags}
                    >
                    </ProjectsCard>
                ))}
            </div>
        </section>
    );
}