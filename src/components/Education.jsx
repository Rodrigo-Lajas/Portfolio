import EducationArray from "./EducationArray"

export default function Education() {
    return (
        <section id="education" className="bg-gray-800  p-4 pt-12">
            <h3 className="flex items-center justify-center text-4xl font-noto-sans font-bold w-auto m-8 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 sm:text-6xl sm:leading-normal">Estudios</h3>
            <ul className="timeline timeline-vertical">
                {EducationArray.slice(0).reverse().map((education) => (
                <li key={education.id} className="my-2">
                    <div className="timeline-start text-slate-300">{education.date}</div>
                    <div className="timeline-middle">
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-slate-300 md:mx-8">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end timeline-box bg-slate-600 text-slate-300 border-0">{education.title}</div>
                </li>
))}
            </ul>
        </section>
    )
}
