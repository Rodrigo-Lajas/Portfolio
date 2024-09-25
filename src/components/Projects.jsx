import projects from "../components/ProjectsArray";
import { useState } from "react";
import ProjectCard from "./ui/ProjectCard";
import { motion } from "framer-motion";
import { buttonAnimation } from "../components/ui/buttonAnimation";

const customButton = "inline-block bg-gradient-to-r from-lime-400 to-lime-100 text-gray-800 rounded-full px-4 py-1 text-xs font-medium font-noto-sans m-1 shadow-lg"

export default function Proyectos() {

    const [selectTag, setSelectTag] = useState('Todos');

    const proyectosFiltrados = selectTag === 'Todos'
        ? projects : projects.filter((project) => project.tags.includes(selectTag));

    return (
        <section id="projects" className="bg-gray-800 text-white p-4 scroll-mt-10">
            <h3 className="flex items-center justify-center text-4xl font-noto-sans leading-normal font-bold w-auto m-8 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 sm:text-6xl sm:leading-normal">Proyectos</h3>
            <div className="flex flex-wrap items-center justify-center">
                <motion.button {...buttonAnimation} className={customButton} onClick={() => setSelectTag('Todos')}>Ver todos</motion.button>
                <motion.button {...buttonAnimation} className={customButton} onClick={() => setSelectTag('HTML')}>HTML</motion.button>
                <motion.button {...buttonAnimation} className={customButton} onClick={() => setSelectTag('CSS')}>CSS</motion.button>
                <motion.button {...buttonAnimation} className={customButton} onClick={() => setSelectTag('Tailwind')}>Tailwind</motion.button>
                <motion.button {...buttonAnimation} className={customButton} onClick={() => setSelectTag('Bootstrap')}>Bootstrap</motion.button>
                <motion.button {...buttonAnimation} className={customButton} onClick={() => setSelectTag('JavaScript')}>JavaScript</motion.button>
                <motion.button {...buttonAnimation} className={customButton} onClick={() => setSelectTag('React')}>React</motion.button>
                <motion.button {...buttonAnimation} className={customButton} onClick={() => setSelectTag('Firebase')}>Firebase</motion.button>
            </div>

            <div className="grid grid-cols-1 m-8 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
                {proyectosFiltrados.map(project => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        link={project.link}
                        repositorio={project.repositorio}
                        tags={project.tags}
                    >
                    </ProjectCard>
                ))}
            </div>
        </section>
    );
}