import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 px-4">
            {/* Social Icons */}
            <div className="flex justify-center gap-6 mb-4">
                <a
                    href="https://mail.google.com/mail/?view=cm&to=gioernestmahumot@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl md:text-3xl transform hover:text-indigo-500 hover:scale-110 transition-transform transition-colors duration-300"
                >
                    <SiGmail />
                </a>
                <a
                    href="https://www.facebook.com/mahumotgio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl md:text-3xl transform hover:text-indigo-500 hover:scale-110 transition-transform transition-colors duration-300"
                >
                    <FaFacebookF />
                </a>
                <a
                    href="https://www.linkedin.com/in/gio-ernest-mahumot-93b33a235/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl md:text-3xl transform hover:text-indigo-500 hover:scale-110 transition-transform transition-colors duration-300"
                >
                    <FaLinkedinIn />
                </a>
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm md:text-base text-center">
                &copy; 2025 Gio Ernest Mahumot. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
