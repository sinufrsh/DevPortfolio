import {
    FaJava,
    FaReact,
    FaGitAlt,
    FaDocker,
    FaCode,
    FaAws
} from "react-icons/fa";

import {
    SiSpringboot,
    SiMysql,
    SiPostman,
    SiHibernate,
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiAngular,
    SiPython
} from "react-icons/si";

function Skills({ portfolio, isDark }) {
    const iconMap = {
        java: <FaJava className="text-orange-500 text-xl" />,
        react: <FaReact className="text-cyan-400 text-xl" />,
        "spring boot": <SiSpringboot className="text-green-500 text-xl" />,
        mysql: <SiMysql className="text-blue-500 text-xl" />,
        git: <FaGitAlt className="text-red-500 text-xl" />,
        docker: <FaDocker className="text-blue-400 text-xl" />,
        hibernate: <SiHibernate className="text-yellow-400 text-xl" />,
        "rest api": <SiPostman className="text-orange-400 text-xl" />,
        javascript: <SiJavascript className="text-yellow-400 text-xl" />,
        typescript: <SiTypescript className="text-blue-500 text-xl" />,
        nodejs: <SiNodedotjs className="text-green-600 text-xl" />,
        angular: <SiAngular className="text-red-600 text-xl" />,
        python: <SiPython className="text-blue-500 text-xl" />,
        aws: <FaAws className="text-orange-500 text-xl" />
    };

    return (

        <section
            id="skills"
            className={isDark ? "bg-[#0B1120] py-20" : "bg-[#F5F5F5] py-20"}
        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2 className={isDark ? "text-3xl sm:text-4xl font-bold text-white" : "text-3xl sm:text-4xl font-bold text-gray-900"}>

                    Skills

                </h2>

                <div className="w-16 h-1 bg-indigo-500 rounded-full mt-3 mb-10"></div>
                <div className="sm:ml-8">
                    <div className="flex flex-wrap gap-4 sm:gap-5">

                        <div className="flex flex-wrap gap-4 sm:gap-5">

                            {portfolio.skills.length > 0 ? (

                                portfolio.skills.map((skill) => (

                                    <div
                                        key={skill.id}
                                        className={`flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl border transition duration-300 ${isDark
                                            ? "bg-[#161E2E] border-slate-800 hover:border-indigo-500"
                                            : "bg-white border-gray-200 hover:border-indigo-500 shadow-sm"
                                            }`}
                                    >

                                        {
                                            iconMap[skill.name.trim().toLowerCase()] || (
                                                <FaCode
                                                    className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"
                                                        }`}
                                                />
                                            )
                                        }

                                        <span
                                            className={`font-medium ${isDark ? "text-white" : "text-gray-900"
                                                }`}
                                        >
                                            {skill.name}
                                        </span>

                                    </div>

                                ))

                            ) : (

                                <div className="w-full flex flex-col items-center justify-center py-20">

                                    <FaCode
                                        className={`text-6xl mb-5 ${isDark ? "text-slate-600" : "text-gray-300"
                                            }`}
                                    />

                                    <h3
                                        className={`text-2xl font-semibold ${isDark ? "text-white" : "text-gray-800"
                                            }`}
                                    >
                                        No Skills Yet
                                    </h3>

                                    <p
                                        className={`mt-3 ${isDark ? "text-slate-400" : "text-gray-500"
                                            }`}
                                    >
                                        This portfolio doesn't have any skills yet.
                                    </p>

                                </div>

                            )}

                        </div>

                    </div>
                </div>
            </div>

        </section>

    );

}

export default Skills;