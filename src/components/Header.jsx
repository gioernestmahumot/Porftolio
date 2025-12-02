import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-gray-900 text-white z-50 shadow-md">
            <div className="flex items-center justify-between px-6 md:px-16 py-4">
                <div className="text-xl font-bold">Gio Ernest</div>

                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                <div className="hidden md:flex gap-8">
                    <a href="#hero" className="hover:text-indigo-400 transition-colors">
                        Home
                    </a>
                    <a href="#about" className="hover:text-indigo-400 transition-colors">
                        About Me
                    </a>
                    <a href="#skills" className="hover:text-indigo-400 transition-colors">
                        Skills
                    </a>
                    <a
                        href="#projects"
                        className="hover:text-indigo-400 transition-colors"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-indigo-400 transition-colors"
                    >
                        Contact
                    </a>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden flex flex-col items-center bg-gray-900 pb-4 gap-4">
                    <a href="#hero" className="hover:text-indigo-400 transition-colors">
                        Home
                    </a>
                    <a href="#about" className="hover:text-indigo-400 transition-colors">
                        About Me
                    </a>
                    <a href="#skills" className="hover:text-indigo-400 transition-colors">
                        Skills
                    </a>
                    <a
                        href="#projects"
                        className="hover:text-indigo-400 transition-colors"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-indigo-400 transition-colors"
                    >
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
}

export default Header;
