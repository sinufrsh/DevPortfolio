import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt
} from "react-icons/fa";

function Contact({ portfolio, isDark }) {

    return (

        <section
            id="contact"
            className={`py-24 ${isDark ? "bg-[#0B1120]" : "bg-[#F8FAFC]"}`}
        >

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}

                <div className="text-center mb-16">

                    <h2
                        className={`text-3xl sm:text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"
                            }`}
                    >
                        Get In Touch
                    </h2>

                    <div className="w-20 h-1 bg-indigo-500 rounded-full mx-auto mt-4"></div>

                    <p
                        className={`mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-8 ${isDark ? "text-slate-400" : "text-gray-600"
                            }`}
                    >
                        Interested in working together or have an opportunity?
                        Feel free to contact me anytime.
                    </p>

                </div>

                {/* Contact Cards */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

                    {/* Email */}

                    <div
                        className={`rounded-2xl p-8 border text-center transition duration-300 hover:-translate-y-1 ${isDark
                            ? "bg-[#161E2E] border-slate-800 hover:border-indigo-500"
                            : "bg-white border-gray-200 hover:border-indigo-500 shadow-md"
                            }`}
                    >

                        <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center mx-auto">

                            <FaEnvelope className="text-white text-2xl" />

                        </div>

                        <h3
                            className={`text-xl font-semibold mt-6 ${isDark ? "text-white" : "text-gray-900"
                                }`}
                        >
                            Email
                        </h3>

                        <p
                            className={`mt-3 break-all ${isDark ? "text-slate-400" : "text-gray-600"
                                }`}
                        >
                            {portfolio.email}
                        </p>

                    </div>

                    {/* Phone */}

                    <div
                        className={`rounded-2xl p-8 border text-center transition duration-300 hover:-translate-y-1 ${isDark
                            ? "bg-[#161E2E] border-slate-800 hover:border-indigo-500"
                            : "bg-white border-gray-200 hover:border-indigo-500 shadow-md"
                            }`}
                    >

                        <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center mx-auto">

                            <FaPhoneAlt className="text-white text-2xl" />

                        </div>

                        <h3
                            className={`text-xl font-semibold mt-6 ${isDark ? "text-white" : "text-gray-900"
                                }`}
                        >
                            Phone
                        </h3>

                        <p
                            className={`mt-3 ${isDark ? "text-slate-400" : "text-gray-600"
                                }`}
                        >
                            {portfolio.phone}
                        </p>

                    </div>

                    {/* Location */}

                    <div
                        className={`rounded-2xl p-8 border text-center transition duration-300 hover:-translate-y-1 ${isDark
                            ? "bg-[#161E2E] border-slate-800 hover:border-indigo-500"
                            : "bg-white border-gray-200 hover:border-indigo-500 shadow-md"
                            }`}
                    >

                        <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center mx-auto">

                            <FaMapMarkerAlt className="text-white text-2xl" />

                        </div>

                        <h3
                            className={`text-xl font-semibold mt-6 ${isDark ? "text-white" : "text-gray-900"
                                }`}
                        >
                            Location
                        </h3>

                        <p
                            className={`mt-3 ${isDark ? "text-slate-400" : "text-gray-600"
                                }`}
                        >
                            {portfolio.location}
                        </p>

                    </div>

                </div>

                {/* Contact Button */}

                <div className="flex justify-center mt-16">

                    <a
                        href={`mailto:${portfolio.email}`}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition duration-300"
                    >
                        Contact Me
                    </a>

                </div>

            </div>

        </section>

    );

}

export default Contact;