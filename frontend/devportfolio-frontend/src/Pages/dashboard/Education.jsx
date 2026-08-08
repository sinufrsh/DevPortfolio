import { useEffect, useState } from "react";
import EducationForm from "../../Components/Dashboard/Education/EducationForm";
import EducationList from "../../Components/Dashboard/Education/EducationList";
function Education() {

    const [educations, setEducations] = useState([]);
    const [editingEducation, setEditingEducation] = useState(null);

    const fetchEducations = async () => {
        const token = localStorage.getItem("token");

        try {
            const response = await fetch(
                "http://localhost:8080/api/educations",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const result = await response.json();

            if (response.ok) {
                setEducations(result.data);
            }
        } catch (err) {
            alert(err.message);
        }
    };

    useEffect(() => {
        fetchEducations();
    }, []);

    return (
        <div className="p-8 space-y-8">

            <h1 className="text-3xl font-bold">
                Education
            </h1>

            <EducationForm
                fetchEducations={fetchEducations}
                editingEducation={editingEducation}
                setEditingEducation={setEditingEducation}
            />

            <EducationList
                educations={educations}
                fetchEducations={fetchEducations}
                setEditingEducation={setEditingEducation}
            />

        </div>
    );
}
export default Education;