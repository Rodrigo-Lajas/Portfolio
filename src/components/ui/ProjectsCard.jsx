import PropTypes from 'prop-types';

function ProjectsCard({ title, description, imageUrl, link, tags = []}) {
    return (
        <article className="max-w-sm h-full rounded-lg overflow-hidden shadow-lg bg-gray-600">
            <img className="w-full rounded-t-md" src={imageUrl} alt={title} />
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

export default ProjectsCard;