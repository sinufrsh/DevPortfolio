import { FaGraduationCap } from "react-icons/fa";

function Educations({ portfolio, isDark }) {

    return (

        <section
            id="education"
            className={`py-24 ${isDark ? "bg-[#0B1120]" : "bg-[#F8FAFC]"}`}
        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2
                    className={`text-3xl sm:text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"
                        }`}
                >
                    Education
                </h2>

                <div className="w-16 h-1 bg-indigo-500 rounded-full mt-3 mb-12"></div>
                <div className="sm:ml-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

                        {portfolio.educations.length > 0 ? (

                            <div className="grid md:grid-cols-2 gap-8">

                                {portfolio.educations.map((education) => (

                                    <div
                                        key={education.id}
                                        className={`rounded-2xl p-5 sm:p-8 border transition duration-300 hover:-translate-y-1 ${isDark
                                            ? "bg-[#161E2E] border-slate-800 hover:border-indigo-500"
                                            : "bg-white border-gray-200 hover:border-indigo-500 shadow-md"
                                            }`}
                                    >

                                        <div className="flex items-center gap-4">

                                            <div className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center">

                                                <FaGraduationCap className="text-white text-2xl" />

                                            </div>

                                            <div>

                                                <h3
                                                    className={`text-2xl font-semibold ${isDark ? "text-white" : "text-gray-900"
                                                        }`}
                                                >
                                                    {education.degree}
                                                </h3>

                                                <p className="text-indigo-500">
                                                    {education.institutionName}
                                                </p>

                                            </div>

                                        </div>

                                        <div className="mt-8 space-y-3">

                                            <p className={isDark ? "text-slate-300" : "text-gray-700"}>
                                                <span className="font-semibold">Field :</span>{" "}
                                                {education.fieldOfStudy}
                                            </p>

                                            <p className={isDark ? "text-slate-300" : "text-gray-700"}>
                                                <span className="font-semibold">Duration :</span>{" "}
                                                {education.startYear} - {education.endYear}
                                            </p>

                                            <p className={isDark ? "text-slate-300" : "text-gray-700"}>
                                                <span className="font-semibold">Grade :</span>{" "}
                                                {education.grade}
                                            </p>

                                        </div>

                                        <p
                                            className={`mt-6 leading-7 ${isDark ? "text-slate-400" : "text-gray-600"
                                                }`}
                                        >
                                            {education.description}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        ) : (

                            <div className="col-span-full flex flex-col items-center justify-center py-20">

                                <FaGraduationCap
                                    className={`text-6xl mb-5 ${isDark ? "text-slate-600" : "text-gray-300"
                                        }`}
                                />

                                <h3
                                    className={`text-2xl font-semibold ${isDark ? "text-white" : "text-gray-800 md:col-span-2 flex flex-col items-center justify-center py-16"
                                        }`}
                                >
                                    No Education Yet
                                </h3>

                                <p
                                    className={`mt-3 ${isDark ? "text-slate-400" : "text-gray-500"
                                        }`}
                                >
                                    This portfolio doesn't have any education details yet.
                                </p>

                            </div>

                        )}

                    </div>
                </div>

            </div>

        </section>

    );

}

export default Educations;