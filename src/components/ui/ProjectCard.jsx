/* eslint-disable react/prop-types */
const ProjectCard = ({title, description, imageUrl, link}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div> 
                <p className="text-gray-700 text-base">{description}</p> 
                </div> 
                <div className="px-6 pt-4 pb-2">
                    <a href={link} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ir al proyecto</a>
                </div>
            </div>
    )
}

export default ProjectCard;