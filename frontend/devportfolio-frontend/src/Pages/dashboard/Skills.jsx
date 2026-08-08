import { useEffect, useState } from "react";
import SkillForm from "../../Components/Dashboard/Skills/SkillForm";
import SkillList from "../../Components/Dashboard/Skills/SkillList";


function Skills() {
    const [skills, setSkills] = useState([]);
    const [editingSkill, setEdditing] = useState(null);



    const fetchSkills = async () => {
        const token = localStorage.getItem("token");

        const response = await fetch("http://localhost:8080/api/skills", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const result = await response.json();

        if (response.ok) {
            setSkills(result.data);
        }
    }

    useEffect(() => {
        fetchSkills();
    }, [])
    return (
        <div className="p-8 space-y-8">

            <h1 className="text-3xl font-bold">
                Skills
            </h1>

            <SkillForm
                fetchSkills={fetchSkills}
                editingSkill={editingSkill}
                setEdditing={setEdditing}
            />

            <SkillList
                skills={skills}
                fetchSkills={fetchSkills}
                setEdditing={setEdditing}
            />
        </div>
    )
}

export default Skills