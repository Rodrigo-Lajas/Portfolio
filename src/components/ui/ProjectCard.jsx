/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import { buttonAnimation } from "./buttonAnimation";
const ProjectCard = ({ title, description, imageUrl, link, tags = [] }) => {
    return (
        <div className="max-w-sm h-full rounded-lg overflow-hidden shadow-lg bg-gray-600 p-6">
            <img className="w-96 rounded-md" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
                <motion.div {...buttonAnimation}
                    className="font-bold text-xl font-noto-sans my-4 text-white text-center">
                    <a href={link} target="_blank" className='hover:text-lime-400 active:text-lime-600 transition duration-300 ease-in-out'>{title}</a>
                </motion.div>
                <p className="text-slate-300 text-sm font-noto-sans">{description}</p>
            </div>
            <div className="p-4">
                {tags.map((tag) => (
                    <span
                        key={tag} className="inline-block bg-gradient-to-r from-lime-400 to-lime-100 text-gray-800 rounded-full px-4 py-1 text-xs font-medium font-noto-sans m-1"
                    >
                        {tag}
                    </span>
                ))}
            </div>

        </div>
    )
}

export default ProjectCard;