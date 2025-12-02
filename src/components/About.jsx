import profilePic from "../assets/profile.png";
function About() {
    const experience = [
        {
            company: "NativeCamp",
            role: "Web Developer (Current Project)",
            description: "Maintaining and enhancing the platform with PHP, MySQL, JS, and Redis.",
        },
        {
            company: "Sprobe Inc.",
            role: "Tech Support / Monitoring",
            description: "Performed batch monitoring and ensured system stability.",
        },
        {
            company: "Cebu Atlantic Hardware",
            role: "Web Developer",
            description: "Maintained and updated web applications for business and inventory processes.",
        },
        {
            company: "Gaisano Capital",
            role: "Web Developer",
            description: "Worked on internal and customer-facing platforms using PHP, MySQL, and JavaScript.",
        },
    ];

    return (
        <section
            id="about"
            className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-6 md:px-20 py-16"
        >
            {/* Text */}
            <div className="md:w-2/3 mb-8 md:mb-0 md:mr-12 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                    About Me
                </h2>

                <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                    I’m Gio Ernest Mahumot, a full-stack web developer experienced with React, PHP, MySQL, and other modern technologies.
                </p>

                {/* Professional Experience */}
                <div>
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                        Professional Experience
                    </h3>

                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                        {experience.map((exp, idx) => (
                            <li key={idx}>
                                <strong>{exp.company}</strong> – {exp.role}
                                <span className="block text-sm text-gray-500 dark:text-gray-400">
                                    {exp.description}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                    Outside of coding, I pursue hobbies, stay active, explore new programming languages,
                    and contribute to open-source projects.
                </p>
            </div>

            {/* Profile Image */}
            <div className="md:w-1/3 flex justify-center md:justify-end">
                <img
                    src={profilePic}
                    alt="Gio Ernest Mahumot"
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-indigo-500 object-cover shadow-xl transform hover:scale-105 transition-transform duration-300"
                />
            </div>
        </section>
    );
}

export default About;
