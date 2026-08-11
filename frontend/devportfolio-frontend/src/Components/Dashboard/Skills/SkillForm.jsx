import { useState, useEffect } from "react";

function SkillForm({ fetchSkills, editingSkill, setEdditing }) {

    const [skill, setSkill] = useState({
        name: "",
        level: "Beginner"
    });

    useEffect(() => {

        if (editingSkill) {
            setSkill(editingSkill);
        }

    }, [editingSkill]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        console.log(skill);
        try {

            const url = editingSkill
                ? `${import.meta.env.VITE_API_BASE_URL}/api/skills/${editingSkill.id}`
                : `${import.meta.env.VITE_API_BASE_URL}/api/skills`;

            const method = editingSkill ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(skill)
            });

            const result = await response.json();

            console.log(response.status);
            console.log(result);

            if (!response.ok) {
                throw new Error(result.message);
            }
            alert(editingSkill ? "Skill Updated" : "Skill Added");

            setSkill({
                name: "",
                level: "Beginner"
            });
            setEdditing(null);
            fetchSkills();

        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div className="bg-white rounded-2xl shadow-md p-8">

            <h2 className="text-2xl font-semibold mb-6">
                Add Skill
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>

                <div>

                    <label className="block mb-2 font-medium">
                        Skill Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        placeholder="Java"
                        value={skill.name}
                        onChange={(e) =>
                            setSkill({
                                ...skill,
                                name: e.target.value
                            })
                        }
                        className="w-full border rounded-lg px-4 py-3"
                    />

                </div>

                <div>

                    <label className="block mb-2 font-medium">
                        Skill Level
                    </label>

                    <select
                        name="level"
                        value={skill.level}
                        onChange={(e) =>
                            setSkill({
                                ...skill,
                                level: e.target.value
                            })
                        }
                        className="w-full border rounded-lg px-4 py-3"
                    >
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert</option>
                    </select>

                </div>

                <button
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
                >
                    {editingSkill ? "Update Skill" : "Add Skill"}
                </button>

            </form>

        </div>
    );
}

export default SkillForm;