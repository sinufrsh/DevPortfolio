import { useState } from "react";
import DeleteModal from "../../Common/DeleteModal";

function SkillList({ skills, fetchSkills, setEdditing }) {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    if (!skills || skills.length === 0) {
        return (
            <div className="bg-white rounded-2xl shadow-md p-8">
                <h2 className="text-xl font-semibold">Your Skills</h2>
                <p className="text-gray-500 mt-4">No skills added yet.</p>
            </div>
        );
    }



    const handleDelete = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/skills/${selectedId}`,
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

            alert("Skill Deleted Successfully");

            fetchSkills();

        } catch (err) {
            alert(err.message);

        } finally {
            setShowDeleteModal(false);
            setSelectedId(null);
        }

    }

    const handleEdit = (skill) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setEdditing(skill);
    }

    return (
        <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-xl font-semibold mb-6">Your Skills</h2>

            {skills.map((skill) => (

                <div
                    key={skill.id}
                    className="border rounded-lg p-4 mb-3 flex justify-between items-center"
                >

                    <div>
                        <h3 className="font-semibold">{skill.name}</h3>

                    </div>
                    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                        {skill.level}
                    </span>

                    <button
                        onClick={() => {
                            setSelectedId(skill.id)
                            setShowDeleteModal(true);
                        }
                        }
                        className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600"
                    >
                        Delete
                    </button>

                    <button
                        onClick={() => handleEdit(skill)}
                        className="bg-yellow-500 text-white px-3 py-2 rounded-lg hover:bg-yellow-600"
                    >
                        Edit
                    </button>

                </div>

            ))}
            <DeleteModal
                isOpen={showDeleteModal}
                title="Delete Skill"
                message="Are you sure you want to delete this skill?"
                onCancel={() => {
                    setShowDeleteModal(false);
                    setSelectedId(null);
                }}
                onConfirm={handleDelete}
            />
        </div>
    );
}

export default SkillList;