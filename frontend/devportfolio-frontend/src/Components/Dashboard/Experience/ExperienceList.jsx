import { useState } from "react";
import DeleteModal from "../../Common/DeleteModal";

function ExperienceList({
    experiences,
    fetchExperiences,
    setEditingExperience
}) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    if (!experiences || experiences.length === 0) {
        return (
            <div className="bg-white rounded-2xl shadow-md p-8">
                <h2 className="text-xl font-semibold">
                    Your Experiences
                </h2>

                <p className="text-gray-500 mt-4">
                    No experience added yet.
                </p>
            </div>
        );
    }

    const handleDelete = async () => {

        const token = localStorage.getItem("token");

        try {

            const response = await fetch(
                `http://localhost:8080/api/experiences/${selectedId}`,
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

            alert("Experience Deleted Successfully");

            fetchExperiences();

        } catch (err) {
            alert(err.message);
        } finally {

            setShowDeleteModal(false);
            setSelectedId(null);

        }
    };

    const handleEdit = (experience) => {
        setEditingExperience(experience);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="space-y-6">

            <h2 className="text-2xl font-semibold">
                Your Experiences
            </h2>

            {experiences.map((experience) => (

                <div
                    key={experience.id}
                    className="bg-white rounded-2xl shadow-md p-6"
                >

                    <h3 className="text-xl font-bold">
                        {experience.jobTitle}
                    </h3>

                    <p className="text-indigo-600 font-medium">
                        {experience.companyName}
                    </p>

                    <p className="text-gray-500 mt-1">
                        {experience.location}
                    </p>

                    <p className="text-gray-500">
                        {experience.startDate} -{" "}
                        {experience.endDate || "Present"}
                    </p>

                    <p className="mt-4 text-gray-700">
                        {experience.description}
                    </p>

                    <div className="flex gap-4 mt-6">

                        <button
                            onClick={() => handleEdit(experience)}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                        >
                            Edit
                        </button>

                        <button
                            onClick={() => {
                                setSelectedId(experience.id);
                                setShowDeleteModal(true)

                            }}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                        >
                            Delete
                        </button>

                    </div>

                </div>

            ))}

            <DeleteModal
                isOpen={showDeleteModal}
                title="Delete Experience"
                message="Are you sure you want to delete this experience?"
                onCancel={() => {
                    setShowDeleteModal(false);
                    setSelectedId(null);
                }}
                onConfirm={handleDelete}
            />

        </div>
    );
}

export default ExperienceList;