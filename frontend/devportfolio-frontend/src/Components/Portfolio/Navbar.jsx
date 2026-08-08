import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar({ portfolio, isDark, setIsDark }) {

    const [active, setActive] = useState("home");

    const navItems = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Projects", id: "projects" },
        { name: "Experience", id: "experience" },
        { name: "Education", id: "education" },
        { name: "Certificates", id: "certifications" },
        { name: "Contact", id: "contact" }
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b ${isDark
                ? "bg-slate-950/80 border-slate-800"
                : "bg-white/90 border-gray-200"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">

                <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center font-bold text-white">

                        {portfolio?.username?.charAt(0) || "O"}

                    </div>

                    <h1
                        className={`font-bold text-lg sm:text-xl tracking-wide ${isDark ? "text-white" : "text-gray-900"
                            }`}
                    >
                        {portfolio?.username || "Om Prakash"}

                    </h1>

                </div>

                <nav className="hidden lg:flex gap-8">

                    {navItems.map((item) => (

                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => setActive(item.id)}
                            className={`transition-all duration-300 font-medium ${active === item.id
                                ? "text-indigo-500"
                                : isDark
                                    ? "text-slate-300 hover:text-white"
                                    : "text-gray-600 hover:text-black"
                                }`}
                        >
                            {item.name}
                        </a>

                    ))}

                </nav>


                <button
                    onClick={() => setIsDark(!isDark)}
                    className={`w-11 h-11 rounded-full border flex items-center justify-center transition ${isDark
                        ? "border-slate-700 text-white hover:bg-slate-800"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100"
                        }`}
                >
                    {isDark ? <FaMoon /> : <FaSun />}
                </button>
            </div>

        </header>
    );
}

export default Navbar;