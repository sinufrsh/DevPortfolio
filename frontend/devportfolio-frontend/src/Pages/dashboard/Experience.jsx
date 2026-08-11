import { useEffect, useState } from "react";
import ExperienceForm from "../../Components/Dashboard/Experience/ExperienceForm";
import ExperienceList from "../../Components/Dashboard/Experience/ExperienceList";

function Experience() {

    const [experiences, setExperiences] = useState([]);
    const [editingExperience, setEditingExperience] = useState(null);

    const fetchExperience = async () => {

        const token = localStorage.getItem("token");

        try {

            const response = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/api/experiences`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const result = await response.json();

            if (response.ok) {
                setExperiences(result.data);
            }

        } catch (err) {
            alert(err.message);
        }
    };

    useEffect(() => {
        fetchExperience();
    }, []);

    return (
        <div className="p-8 space-y-8">

            <h1 className="text-3xl font-bold">
                Experience
            </h1>

            <ExperienceForm
                fetchExperiences={fetchExperience}
                editingExperience={editingExperience}
                setEditingExperience={setEditingExperience}
            />

            <ExperienceList
                experiences={experiences}
                fetchExperiences={fetchExperience}
                editingExperience={editingExperience}
                setEditingExperience={setEditingExperience}
            />

        </div>
    );
}

export default Experience;