import project1 from "../assets/logo_nativecamp.png";
import project2 from "../assets/portfolio.png";

function Projects() {
    const projectsData = [
        {
            id: 1,
            name: "NativeCamp",
            description:
                "Native Camp is one of the best ESL online tutoring schools in Japan. Lessons are provided via a unique language platform developed by our company.",
            image: project1,
            technologies: ["PHP", "Javascript", "MySQL", "Redis", "Github", "Jquery"],
            liveLink: "https://nativecamp.net/",
        },
        {
            id: 2,
            name: "Portfolio",
            description:
                "A personal portfolio built with React and Tailwind CSS, showcasing my skills, projects, and experience.",
            image: project2,
            technologies: ["React", "Tailwind CSS", "JavaScript", "GitHub", "Vercel"],
            liveLink: "https://gio-dev-portfolio.vercel.app/",
        },
    ];

    return (
        <section
            id="projects"
            className="min-h-screen flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-16"
        >
            {/* Header */}
            <div className="text-center mb-12 animate-fadeIn">
                <h2 className="text-4xl font-semibold mb-2">Projects</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    A showcase of the projects I’ve built using modern web technologies.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
                {projectsData.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col hover:scale-105 transform transition duration-300 h-full"
                    >
                        {project.image && (
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full max-h-64 sm:max-h-72 md:max-h-80 lg:max-h-96 object-cover rounded-md mb-4"
                            />
                        )}

                        {/* Flexible content */}
                        <div className="flex-1 flex flex-col">
                            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                            <p className="mb-4 font-serif flex-1">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-white text-sm font-medium px-2 py-1 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Fixed bottom button */}
                        {project.liveLink && (
                            <div className="flex justify-end mt-auto">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full text-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                                >
                                    View Live
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
