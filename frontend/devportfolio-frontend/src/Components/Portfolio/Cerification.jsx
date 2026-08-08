import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

function Certification({ portfolio, isDark }) {

    return (

        <section
            id="certifications"
            className={`py-24 ${isDark ? "bg-[#0B1120]" : "bg-[#F8FAFC]"}`}
        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2
                    className={`text-3xl sm:text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"
                        }`}
                >
                    Certifications
                </h2>

                <div className="w-16 h-1 bg-indigo-500 rounded-full mt-3 mb-12"></div>
                <div className="sm:ml-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">

                        {portfolio.certifications.length > 0 ? (

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                                {portfolio.certifications.map((certificate) => (

                                    <div
                                        key={certificate.id}
                                        className={`rounded-2xl p-5 sm:p-7 border transition duration-300 hover:-translate-y-2 ${isDark
                                            ? "bg-[#161E2E] border-slate-800 hover:border-indigo-500"
                                            : "bg-white border-gray-200 hover:border-indigo-500 shadow-md"
                                            }`}
                                    >

                                        <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center">

                                            <FaAward className="text-white text-2xl" />

                                        </div>

                                        <h3
                                            className={`text-xl font-semibold mt-6 ${isDark ? "text-white" : "text-gray-900"
                                                }`}
                                        >
                                            {certificate.certificateName}
                                        </h3>

                                        <p className="text-indigo-500 mt-2">
                                            {certificate.organization}
                                        </p>

                                        <p
                                            className={`mt-4 ${isDark ? "text-slate-400" : "text-gray-600"
                                                }`}
                                        >
                                            Issued : {certificate.issueDate}
                                        </p>

                                        {certificate.credentialUrl && (

                                            <a
                                                href={certificate.credentialUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`inline-flex items-center gap-2 mt-6 transition ${isDark
                                                    ? "text-cyan-400 hover:text-cyan-300"
                                                    : "text-blue-600 hover:text-blue-700"
                                                    }`}
                                            >
                                                View Credential
                                                <FaExternalLinkAlt />
                                            </a>

                                        )}

                                    </div>

                                ))}

                            </div>

                        ) : (

                            <div className="col-span-full flex flex-col items-center justify-center py-20">

                                <FaAward
                                    className={`text-6xl mb-5 ${isDark ? "text-slate-600" : "text-gray-300"
                                        }`}
                                />

                                <h3
                                    className={`text-2xl font-semibold ${isDark ? "text-white" : "text-gray-800"
                                        }`}
                                >
                                    No Certifications Yet
                                </h3>

                                <p
                                    className={`mt-3 ${isDark ? "text-slate-400" : "text-gray-500"
                                        }`}
                                >
                                    This portfolio doesn't have any certifications yet.
                                </p>

                            </div>

                        )}

                    </div>
                </div>
            </div>

        </section>

    );

}

export default Certification;