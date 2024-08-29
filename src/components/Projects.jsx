// import projects from "../components/ProjectsArray";
// import ProjectCard from "./ui/ProjectCard";

// export default function Proyectos() {
//     return (
//         <section id="projects" className="bg-gray-800 text-white p-4 scroll-mt-10">
//             <h3 className="flex items-center justify-center text-4xl font-noto-sans leading-normal font-bold w-auto m-8 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 sm:text-6xl sm:leading-normal">Proyectos</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
//                 {projects.map((project) => (
//                     <ProjectCard
//                         key={project.id}
//                         title={project.title}
//                         description={project.description}
//                         imageUrl={project.imageUrl}
//                         link={project.link}
//                         repositorio={project.repositorio}
//                         tags={project.tags}
//                     />
//                 ))}
//             </div>
//         </section>
//     );
// }