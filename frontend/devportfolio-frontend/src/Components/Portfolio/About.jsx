import {
    FaUser,
    FaEnvelope,
    FaMapMarkerAlt,
    FaCheckCircle,
    FaChevronRight
} from "react-icons/fa";

function About({ portfolio, isDark }) {

    return (

        <section
            id="about"
            className={`py-24 ${isDark ? "bg-[#0B1120]" : "bg-[#F5F5F5]"}`}
        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>

                        <h2 className={`text-3xl sm:text-4xl font-bold ${isDark ? "text-white" : "text-gray-800"}`}>
                            About Me
                        </h2>

                        <div className="w-16 h-1 bg-indigo-500 rounded-full mt-3"></div>

                        <p className={`mt-8 ${isDark ? "text-slate-300" : "text-gray-600"} leading-8 sm:leading-9 text-base sm:text-lg`}>

                            {portfolio.bio}

                        </p>

                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">


                        <div
                            className={`rounded-2xl p-6 border transition ${isDark
                                ? "bg-[#161E2E] border-slate-800 hover:border-indigo-500"
                                : "bg-white border-gray-200 hover:border-indigo-500 shadow-sm"
                                }`}
                        >
                            <div className="flex justify-between items-center">

                                <div className="flex items-center gap-3">
                                    <FaUser className="text-indigo-400" />

                                    <span className={isDark ? "text-slate-400" : "text-gray-500"}>
                                        Name
                                    </span>
                                </div>

                                <FaChevronRight
                                    className={isDark ? "text-slate-500" : "text-gray-400"}
                                />
                            </div>

                            <h3
                                className={`mt-4 text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"
                                    }`}
                            >
                                {portfolio.username}
                            </h3>
                        </div>

                        <div className={`rounded-2xl p-6 border transition ${isDark
                            ? "bg-[#161E2E] border-slate-800 hover:border-indigo-500"
                            : "bg-white border-gray-200 hover:border-indigo-500 shadow-sm"
                            }`}>

                            <div className="flex justify-between items-center">

                                <div className="flex items-center gap-3">

                                    <FaEnvelope className="text-purple-400" />

                                    <span className={isDark ? "text-slate-400" : "text-gray-500"}>

                                        Email

                                    </span>

                                </div>

                                <FaChevronRight className="text-slate-500" />

                            </div>

                            <h3 className={`mt-4 text-lg font-semibold break-all ${isDark ? "text-white" : "text-gray-900"
                                }`}>
                                {portfolio.email}

                            </h3>

                        </div>

                        <div className={`rounded-2xl p-6 border transition ${isDark
                            ? "bg-[#161E2E] border-slate-800 hover:border-indigo-500"
                            : "bg-white border-gray-200 hover:border-indigo-500 shadow-sm"
                            }`}>

                            <div className="flex justify-between items-center">

                                <div className="flex items-center gap-3">

                                    <FaMapMarkerAlt className="text-orange-400" />

                                    <span className={isDark ? "text-slate-400" : "text-gray-500"}>

                                        Location

                                    </span>

                                </div>

                                <FaChevronRight
                                    className={isDark ? "text-slate-500" : "text-gray-400"}
                                />
                            </div>

                            <h3
                                className={`mt-4 text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"
                                    }`}
                            >

                                {portfolio.location}

                            </h3>

                        </div>


                        <div className={`rounded-2xl p-6 border transition ${isDark
                            ? "bg-[#161E2E] border-slate-800 hover:border-green-500"
                            : "bg-white border-gray-200 hover:border-green-500 shadow-sm"
                            }`}>
                            <div className="flex justify-between items-center">

                                <div className="flex items-center gap-3">

                                    <FaCheckCircle className="text-green-400" />

                                    <span className={isDark ? "text-slate-400" : "text-gray-500"}>

                                        Availability

                                    </span>

                                </div>

                                <FaChevronRight
                                    className={isDark ? "text-slate-500" : "text-gray-400"}
                                />
                            </div>

                            <h3 className="text-green-400 mt-4 text-lg font-semibold">

                                Open To Work

                            </h3>

                        </div>

                    </div>

                </div>

            </div>

        </section >

    );

}

export default About;