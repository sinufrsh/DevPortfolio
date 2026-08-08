import { FaBriefcase } from "react-icons/fa";

function Experiences({ portfolio, isDark }) {

    return (

        <section
            id="experience"
            className={`py-24 ${isDark ? "bg-[#0B1120]" : "bg-[#F5F5F5]"}`}
        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2
                    className={`text-3xl sm:text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"
                        }`}
                >
                    Experience
                </h2>

                <div className="w-16 h-1 bg-indigo-500 rounded-full mt-3 mb-16"></div>
                <div className="sm:ml-8">
                    <div className="grid grid-cols-1 gap-6 sm:gap-8">
                        {portfolio.experiences.length > 0 ? (

                            <div className="relative border-l-2 border-indigo-600 ml-4">

                                {portfolio.experiences.map((exp) => (

                                    <div
                                        key={exp.id}
                                        className="relative pl-8 sm:pl-12 pb-10 sm:pb-16"
                                    >

                                        {/* Timeline Circle */}

                                        <div
                                            className={`absolute -left-3.5 top-2 w-6 h-6 rounded-full bg-indigo-600 border-4 ${isDark
                                                ? "border-[#0B1120]"
                                                : "border-[#F5F5F5]"
                                                }`}
                                        ></div>

                                        {/* Experience Card */}

                                        <div
                                            className={`rounded-2xl p-5 sm:p-8 border transition ${isDark
                                                ? "bg-[#161E2E] border-slate-800 hover:border-indigo-500"
                                                : "bg-white border-gray-200 hover:border-indigo-500 shadow-sm"
                                                }`}
                                        >

                                            <div className="flex items-center gap-3">

                                                <FaBriefcase className="text-indigo-500 text-xl" />

                                                <h3
                                                    className={`text-xl sm:text-2xl font-semibold ${isDark
                                                        ? "text-white"
                                                        : "text-gray-900"
                                                        }`}
                                                >
                                                    {exp.jobTitle}
                                                </h3>

                                            </div>

                                            <p className="text-indigo-500 mt-3 font-medium">
                                                {exp.companyName}
                                            </p>

                                            <p
                                                className={`mt-2 ${isDark
                                                    ? "text-slate-400"
                                                    : "text-gray-500"
                                                    }`}
                                            >
                                                {exp.startDate} - {exp.endDate}
                                            </p>

                                            <p
                                                className={`${isDark
                                                    ? "text-slate-400"
                                                    : "text-gray-500"
                                                    }`}
                                            >
                                                {exp.location}
                                            </p>

                                            <p
                                                className={`mt-6 leading-7 sm:leading-8 ${isDark
                                                    ? "text-slate-300"
                                                    : "text-gray-600"
                                                    }`}
                                            >
                                                {exp.description}
                                            </p>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        ) : (

                            <div className="col-span-full flex flex-col items-center justify-center py-20">

                                <FaBriefcase
                                    className={`text-6xl mb-5 ${isDark ? "text-slate-600" : "text-gray-300"
                                        }`}
                                />

                                <h3
                                    className={`text-2xl font-semibold ${isDark ? "text-white" : "text-gray-800"
                                        }`}
                                >
                                    No Experience Yet
                                </h3>

                                <p
                                    className={`mt-3 ${isDark ? "text-slate-400" : "text-gray-500"
                                        }`}
                                >
                                    This portfolio doesn't have any work experience yet.
                                </p>

                            </div>

                        )}
                    </div>
                </div>
            </div>

        </section>

    );

}

export default Experiences;