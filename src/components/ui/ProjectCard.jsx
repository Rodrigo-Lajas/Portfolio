/* eslint-disable react/prop-types */
const ProjectCard = ({ title, description, imageUrl, link, tags = [] }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-600">
            <img className="w-96" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white"><a href={link} target="_blank" className='hover:text-lime-400 active:text-lime-600 transition duration-300 ease-in-out'>{title}</a></div>
                <p className="text-slate-300 text-base">{description}</p>
            </div>
            <div className="p-4">
                {tags.map((tag) => (
                    <span
                        key={tag}  className="inline-block bg-gradient-to-r from-lime-400 to-lime-100 text-gray-800 rounded-full px-4 py-1 text-xs font-medium m-1"
                    >
                        {tag}
                    </span>
                ))}
            </div>

        </div>
    )
}

export default ProjectCard;