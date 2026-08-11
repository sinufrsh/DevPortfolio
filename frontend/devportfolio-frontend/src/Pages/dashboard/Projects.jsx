import { useState, useEffect } from "react";
import ProjectForm from "../../Components/Dashboard/Projects/ProjectForm";
import ProjectList from "../../Components/Dashboard/Projects/ProjectList";

function Projects() {

    const [projects, setProjects] = useState([]);
    const [editingProject, setEditingProject] = useState(null);

    const fetchProjects = async () => {
        const token = localStorage.getItem("token");
        const response = await fetch(
            `${import.meta.env.VITE_API_BASE_URL}/api/projects`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const result = await response.json();

        if (response.ok) {
            setProjects(result.data);
        }

    }
    useEffect(() => {
        fetchProjects();
    }, []);
    return (
        <div className="p-8 space-y-8">

            <h1 className="text-3xl font-bold">
                Projects
            </h1>

            <ProjectForm
                fetchProjects={fetchProjects}
                editingProject={editingProject}
                setEditingProject={setEditingProject}
            />

            <ProjectList
                projects={projects}
                fetchProjects={fetchProjects}
                setEditingProject={setEditingProject}
            />

        </div>
    );
}

export default Projects;