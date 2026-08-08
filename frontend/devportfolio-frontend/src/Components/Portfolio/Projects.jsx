import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";

function Projects({ portfolio, isDark }) {

    return (

        <section
            id="projects"
            className={`py-24 ${isDark ? "bg-[#0B1120]" : "bg-[#F5F5F5]"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2
                    className={`text-3xl sm:text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"
                        }`}
                >
                    Projects
                </h2>

                <div className="w-16 h-1 bg-indigo-500 rounded-full mt-3 mb-12"></div>
                <div className="sm:ml-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">

                        {portfolio.projects.length > 0 ? (

                            portfolio.projects.map((project) => (

                                <div
                                    key={project.id}
                                    className={`rounded-2xl overflow-hidden border transition duration-300 hover:-translate-y-2 ${isDark
                                        ? "bg-[#161E2E] border-slate-800 hover:border-indigo-500"
                                        : "bg-white border-gray-200 hover:border-indigo-500 shadow-sm"
                                        }`}
                                >

                                    <img
                                        src={
                                            project.imageUrl
                                                ? `http://localhost:8080${project.imageUrl}`
                                                : "https://via.placeholder.com/600x250?text=No+Image"
                                        }
                                        alt={project.title}
                                        className="w-full h-52 sm:h-56 object-cover"
                                    />

                                    <div className="p-5 sm:p-6">

                                        <h3
                                            className={`text-xl sm:text-2xl font-semibold ${isDark
                                                ? "text-white"
                                                : "text-gray-900"
                                                }`}
                                        >
                                            {project.title}
                                        </h3>

                                        <p
                                            className={`mt-4 leading-7 text-sm sm:text-base ${isDark
                                                ? "text-slate-400"
                                                : "text-gray-600"
                                                }`}
                                        >
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-5">

                                            {project.technologies
                                                .split(",")
                                                .map((tech) => (

                                                    <span
                                                        key={tech}
                                                        className={`px-3 py-1 rounded-full text-sm ${isDark
                                                            ? "bg-slate-800 text-slate-200"
                                                            : "bg-indigo-100 text-indigo-700"
                                                            }`}
                                                    >
                                                        {tech.trim()}
                                                    </span>

                                                ))}

                                        </div>

                                        <div className="flex flex-wrap gap-4 sm:gap-6 mt-7">

                                            {project.liveDemoUrl && (
                                                <a
                                                    href={project.liveDemoUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="flex items-center gap-2 text-indigo-500 hover:text-indigo-600"
                                                >
                                                    <FaExternalLinkAlt />
                                                    Live Demo
                                                </a>
                                            )}

                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className={`flex items-center gap-2 ${isDark
                                                        ? "text-slate-300 hover:text-white"
                                                        : "text-gray-700 hover:text-black"
                                                        }`}
                                                >
                                                    <FaGithub />
                                                    GitHub
                                                </a>
                                            )}

                                        </div>

                                    </div>

                                </div>

                            ))

                        ) : (

                            <div className="col-span-full flex flex-col items-center justify-center py-20">

                                <FaFolderOpen
                                    className={`text-6xl mb-5 ${isDark
                                        ? "text-slate-600"
                                        : "text-gray-300"
                                        }`}
                                />

                                <h3
                                    className={`text-2xl font-semibold ${isDark
                                        ? "text-white"
                                        : "text-gray-800"
                                        }`}
                                >
                                    No Projects Yet
                                </h3>

                                <p
                                    className={`mt-3 ${isDark
                                        ? "text-slate-400"
                                        : "text-gray-500"
                                        }`}
                                >
                                    This portfolio doesn't have any projects yet.
                                </p>

                            </div>

                        )}

                    </div>
                </div>
            </div>
        </section>

    );

}

export default Projects;