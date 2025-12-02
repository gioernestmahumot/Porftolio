import profilePic from "../assets/profile.png";

function Hero({ name }) {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-900 text-white px-4 md:px-16 py-12"
        >
            {/* Text Content */}
            <div className="text-center md:text-left max-w-xl md:mr-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 whitespace-nowrap">
                    Hi, I’m <span className="text-indigo-400">{name}</span>
                </h1>
                <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-200">
                    I’m a full-stack web developer who enjoys building smooth and meaningful web experiences. I’m currently improving my overall development workflow and creating projects that help me grow both technically and creatively.
                </p>
                <a
                    href="#projects"
                    className="inline-block px-6 py-3 bg-indigo-500 rounded-lg text-white font-medium hover:bg-indigo-600 transition-colors shadow-lg"
                >
                    See My Work
                </a>
            </div>

            {/* Profile Image */}
            <div className="mb-8 md:mb-0 flex-shrink-0">
                <img
                    src={profilePic}
                    alt="Gio Ernest Mahumot"
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.6)] object-cover transform hover:scale-105 hover:shadow-[0_0_30px_rgba(79,70,229,0.8)] transition-all duration-300"
                />
            </div>
        </section>
    );
}

export default Hero;
