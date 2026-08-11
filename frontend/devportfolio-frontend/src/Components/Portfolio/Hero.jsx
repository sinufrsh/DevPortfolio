import {
    FaGithub,
    FaLinkedin,
    FaLaptopCode
} from "react-icons/fa";

function Hero({ portfolio, isDark }) {

    return (

        <section
            id="home"
            className={`min-h-screen flex items-center py-20 sm:py-24 ${isDark ? "bg-[#0B1120]" : "bg-white"
                }`}
        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">


                    <div>

                        <p className={`text-base sm:text-lg font-medium ${isDark ? "text-indigo-400" : "text-indigo-600"
                            }`}>

                            Hello, I'm

                        </p>

                        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 leading-tight ${isDark ? "text-white" : "text-gray-900"
                            }`}>

                            {portfolio?.username}

                        </h1>

                        <h2 className={`text-2xl sm:text-3xl mt-5 ${isDark ? "text-cyan-400" : "text-indigo-600"
                            }`}>

                            {portfolio.headline}

                        </h2>

                        <p className={`mt-8 text-base sm:text-lg leading-8 max-w-xl ${isDark ? "text-slate-300" : "text-gray-600"
                            }`}>

                            {portfolio.bio}

                        </p>


                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-10">

                            {portfolio?.resumeUrl && (
                                <a
                                    href={`${import.meta.env.VITE_API_BASE_URL}${portfolio.resumeUrl}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-indigo-600 hover:bg-indigo-700 transition px-6 sm:px-7 py-3 rounded-xl text-white text-center"
                                >
                                    Download Resume
                                </a>
                            )}

                            <button
                                className={`border transition px-6 sm:px-7 py-3 rounded-xl text-center ${isDark
                                    ? "border-slate-600 text-white hover:border-indigo-500"
                                    : "border-gray-300 text-gray-800 hover:border-indigo-500"
                                    }`}  >
                                Contact Me
                            </button>

                        </div>

                        <div className={`flex gap-6 mt-10 text-2xl ${isDark ? "text-slate-300" : "text-gray-700"
                            }`}>
                            {portfolio?.socialLinks?.github && (
                                <a
                                    href={portfolio.socialLinks.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub />
                                </a>
                            )}

                            {portfolio?.socialLinks?.linkedin && (
                                <a
                                    href={portfolio.socialLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedin />
                                </a>
                            )}

                            {portfolio?.socialLinks?.leetcode && (
                                <a
                                    href={portfolio.socialLinks.leetcode}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLaptopCode />
                                </a>
                            )}

                        </div>

                    </div>


                    <div className="flex justify-center">

                        <img
                            src={`${import.meta.env.VITE_API_BASE_URL}${portfolio?.profileImageUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            alt="Profile"
                            className={`w-60 h-60 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full object-cover border-8 ${isDark ? "border-indigo-500" : "border-indigo-300"
                                }`} />

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Hero;