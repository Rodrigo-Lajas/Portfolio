const TopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-slate-600 hover:bg-slate-700 text-white font-bold rounded-full p-2 transition duration-300 ease-in-out"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
            </svg>
        </button>
    );
}
export default TopButton