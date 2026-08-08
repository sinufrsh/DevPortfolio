import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white border-b">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="h-20 flex items-center justify-between">

                    <Link
                        to="/"
                        className="text-2xl font-bold whitespace-nowrap"
                    >
                        🚀 DevPortfolio
                    </Link>


                    <ul className="hidden md:flex items-center gap-8 text-sm font-semibold">

                        <li className="hover:text-indigo-600 cursor-pointer">
                            Features
                        </li>

                        <li className="hover:text-indigo-600 cursor-pointer">
                            How it Works
                        </li>

                        <li className="hover:text-indigo-600 cursor-pointer">
                            About
                        </li>

                    </ul>

                    <div className="hidden md:flex gap-4 font-bold text-sm">

                        <Link to="/login">
                            <button className="bg-gray-100 text-black px-4 py-2 rounded-xl border hover:bg-gray-200">
                                Login
                            </button>
                        </Link>

                        <Link to="/register">
                            <button className="bg-violet-500 text-white px-4 py-2 rounded-xl hover:bg-violet-600">
                                Get Started
                            </button>
                        </Link>

                    </div>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-2xl"
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>

                </div>

                {menuOpen && (

                    <div className="md:hidden pb-5">

                        <div className="flex flex-col gap-5 text-sm font-semibold">

                            <a
                                href="#features"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-indigo-600"
                            >
                                Features
                            </a>

                            <a
                                href="#how-it-works"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-indigo-600"
                            >
                                How it Works
                            </a>

                            <a
                                href="#about"
                                onClick={() => setMenuOpen(false)}
                                className="hover:text-indigo-600"
                            >
                                About
                            </a>

                            <div className="flex gap-3 pt-2">

                                <Link
                                    to="/login"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <button className="bg-gray-100 px-4 py-2 rounded-xl">
                                        Login
                                    </button>
                                </Link>

                                <Link
                                    to="/register"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <button className="bg-violet-500 text-white px-4 py-2 rounded-xl">
                                        Get Started
                                    </button>
                                </Link>

                            </div>

                        </div>

                    </div>

                )}

            </div>

        </nav>
    );
}

export default Navbar;