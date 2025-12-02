import { FaReact, FaJsSquare, FaPhp, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiJquery, SiOpenai } from "react-icons/si";

function Skills() {
    const skills = [
        { name: "React", icon: <FaReact size={40} className="text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-teal-400" /> },
        { name: "JavaScript", icon: <FaJsSquare size={40} className="text-yellow-500" /> },
        { name: "PHP", icon: <FaPhp size={40} className="text-indigo-700" /> },
        { name: "GitHub", icon: <FaGithub size={40} className="text-gray-800 dark:text-white" /> },
        { name: "MySQL", icon: <SiMysql size={40} className="text-blue-600" /> },
        { name: "jQuery", icon: <SiJquery size={40} className="text-blue-500" /> },

        {
            name: "ChatGPT",
            icon: <SiOpenai size={40} className="text-gray-800 dark:text-white" />,
            description:
                "Built an automated Slack thread summarizer using ChatGPT with emoji-triggered EN/KO/JP language selection."
        },
    ];

    return (
        <section
            id="skills"
            className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-12"
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Skills</h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
                Here are some of the technologies I work with. I love building clean, functional, and scalable web applications.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-5xl">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transform transition duration-500 hover:scale-110 hover:bg-indigo-50 dark:hover:bg-gray-700 cursor-pointer relative group"
                    >
                        <div className="mb-2">{skill.icon}</div>
                        <span className="text-lg font-semibold">{skill.name}</span>

                        {/* Tooltip for skills with description */}
                        {skill.description && (
                            <div className="absolute bottom-0 translate-y-full mt-3 w-64 bg-gray-800 text-white text-sm p-3 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg text-center">
                                {skill.description}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
