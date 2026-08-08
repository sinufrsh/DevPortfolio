import { useEffect, useState, } from "react";

function ProjectForm({ fetchProjects, editingProject, setEditingProject }) {
    const [project, setProject] = useState({
        title: "",
        description: "",
        technologies: "",
        githubUrl: "",
        liveDemoUrl: "",
        imageUrl: ""
    })

    const [image, setImage] = useState(null);


    useEffect(() => {

        if (editingProject) {
            setProject(editingProject);
        }
    }, [editingProject]);


    const handleSubmit = async (e) => {

        e.preventDefault();

        const token = localStorage.getItem("token");
        const formData = new FormData();

        formData.append(
            "project",
            new Blob(
                [JSON.stringify(project)],
                { type: "application/json" }
            )
        );

        if (image) {
            formData.append("image", image);
        }


        try {

            const url = editingProject
                ? `http://localhost:8080/api/projects/${editingProject.id}`
                : "http://localhost:8080/api/projects";

            const method = editingProject ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message);
            }

            alert(
                editingProject
                    ? "Project Updated Successfully"
                    : "Project Added Successfully"
            );

            fetchProjects();

            setImage(null);

            setProject({
                title: "",
                description: "",
                technologies: "",
                githubUrl: "",
                liveDemoUrl: ""
            });

            setEditingProject(null);

        }
        catch (err) {
            alert(err.message);
        }

    };

    return (
        <div className="bg-white rounded-xl shadow p-6">

            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-md p-8 space-y-5" >

                <h2 className="text-2xl font-semibold">

                    {editingProject
                        ? "Update Project"
                        : "Add Project"}
                </h2>

                <div>
                    <label className="block mb-2">
                        Project Title
                    </label>

                    <input
                        type="text"
                        value={project.title}
                        onChange={(e) =>
                            setProject({
                                ...project,
                                title: e.target.value
                            })
                        }
                        className="w-full border rounded-lg px-4 py-3"
                    />
                </div>

                <div>
                    <label className="block mb-2">
                        Description
                    </label>
                    <textarea
                        rows={5}
                        value={project.description}
                        onChange={(e) =>
                            setProject({
                                ...project,
                                description: e.target.value
                            })
                        }
                        className="w-full border rounded-lg px-4 py-3"
                    />
                </div>

                <div>
                    <label className="block mb-2">
                        Technologies
                    </label>

                    <input
                        type="text"
                        placeholder="Spring Boot, React, MySQL"
                        value={project.technologies}
                        onChange={(e) =>
                            setProject({
                                ...project,
                                technologies: e.target.value
                            })
                        }
                        className="w-full border rounded-lg px-4 py-3"
                    />

                </div>

                <div>

                    <label className="block mb-2 font-medium">
                        GitHub URL
                    </label>

                    <input
                        type="text"
                        placeholder="https://github.com/username/project"
                        value={project.githubUrl}
                        onChange={(e) =>
                            setProject({
                                ...project,
                                githubUrl: e.target.value
                            })
                        }
                        className="w-full border rounded-lg px-4 py-3"
                    />

                </div>
                <div>

                    <label className="block mb-2 font-medium">
                        Live Demo URL
                    </label>

                    <input
                        type="text"
                        placeholder="https://your-project.vercel.app"
                        value={project.liveDemoUrl}
                        onChange={(e) =>
                            setProject({
                                ...project,
                                liveDemoUrl: e.target.value
                            })
                        }
                        className="w-full border rounded-lg px-4 py-3"
                    />

                </div>
                <div>
                    <label className="block mb-2 font-medium">
                        Project Image
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="w-full border rounded-lg px-4 py-3"
                    />
                    {image && (
                        <img
                            src={URL.createObjectURL(image)}
                            alt="Preview"
                            className="mt-4 h-40 rounded-lg object-cover"
                        />
                    )}
                </div>

                <button type="submit"
                    className=
                    "bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg">
                    {editingProject ? "Update Project" : "Add Project"}
                </button>
            </form>
        </div>
    );
}

export default ProjectForm;