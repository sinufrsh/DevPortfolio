import { useState } from "react";
import DeleteModal from "../../Common/DeleteModal";

function ProjectList({ projects,
    fetchProjects,
    setEditingProject }) {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState(null);

    if (!projects || projects.length === 0) {
        return (
            <div className="bg-white rounded-2xl shadow-md p-8">
                <h2 className="text-xl font-semibold">
                    Your Projects
                </h2>

                <p className="text-gray-500 mt-4">
                    No projects added yet.
                </p>
            </div>
        );
    }

    const handleDelete = async () => {

        const token = localStorage.getItem("token");

        try {

            const response = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/api/projects/${selectedProjectId}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message);
            }

            alert("Project Deleted Successfully");

            fetchProjects();

        } catch (err) {

            alert(err.message);

        } finally {

            setShowDeleteModal(false);
            setSelectedProjectId(null);

        }

    };

    const handleEdit = (project) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setEditingProject(project);

    };
    return (

        <div className="space-y-6">

            <h2 className="text-2xl font-semibold">

                Your Projects

            </h2>

            {projects.map((project) => (

                <div
                    key={project.id}
                    className="bg-white rounded-2xl shadow-md overflow-hidden"
                >
                    <img
                        src={
                            project.imageUrl
                                ? `${import.meta.env.VITE_API_BASE_URL}${project.imageUrl}`
                                : "https://via.placeholder.com/600x250?text=No+Image"
                        }
                        alt={project.title}
                        className="w-full h-52 object-cover rounded-lg"
                    />

                    <div className="p-6">

                        <h3 className="text-xl font-bold">

                            {project.title}

                        </h3>

                        <p className="text-gray-600 mt-3">

                            {project.description}

                        </p>

                        <p className="mt-3">

                            <strong>Technologies :</strong>

                            {project.technologies}

                        </p>
                        <div className="flex gap-4 mt-5">

                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-900 text-white px-4 py-2 rounded-lg"
                            >
                                GitHub

                            </a>

                            <a
                                href={project.liveDemoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
                            >
                                Live Demo
                            </a>

                        </div>
                        <div className="flex gap-4 mt-5">

                            <button
                                onClick={() => handleEdit(project)}
                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                            >

                                Edit

                            </button>

                            <button
                                onClick={() => {
                                    setSelectedProjectId(project.id);
                                    setShowDeleteModal(true);
                                }}
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                            >

                                Delete

                            </button>

                        </div>

                    </div>

                </div>

            ))}

            <DeleteModal
                isOpen={showDeleteModal}
                title="Delete Project"
                message="Are you sure you want to delete this project? This action cannot be undone."
                onCancel={() => {
                    setShowDeleteModal(false);
                    setSelectedProjectId(null);
                }}
                onConfirm={handleDelete}
            />

        </div>

    );
}

export default ProjectList;

