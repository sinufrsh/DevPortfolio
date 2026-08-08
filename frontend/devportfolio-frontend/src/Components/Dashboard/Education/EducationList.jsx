import { useState } from "react";
import DeleteModal from "../../Common/DeleteModal";

function EducationList({
    educations,
    fetchEducations,
    setEditingEducation
}) {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    if (!educations || educations.length === 0) {
        return (
            <div className="bg-white rounded-2xl shadow-md p-8">
                <h2 className="text-xl font-semibold">
                    Your Education
                </h2>

                <p className="text-gray-500 mt-4">
                    No education added yet.
                </p>
            </div>
        );
    }

    const handleDelete = async () => {

        const token = localStorage.getItem("token");

        try {

            const response = await fetch(
                `http://localhost:8080/api/educations/${selectedId}`,
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

            alert("Education Deleted Successfully");

            fetchEducations();

        } catch (err) {

            alert(err.message);

        } finally {

            setShowDeleteModal(false);
            setSelectedId(null);

        }
    };

    const handleEdit = (education) => {

        setEditingEducation(education);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (

        <div className="space-y-6">

            <h2 className="text-2xl font-semibold">
                Your Education
            </h2>

            {/* Education Grid */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {educations.map((education) => (

                    <div
                        key={education.id}
                        className="
                            bg-white
                            rounded-2xl
                            shadow-md
                            border
                            border-gray-100
                            p-6
                            hover:shadow-lg
                            transition
                            duration-200
                            flex
                            flex-col
                            justify-between
                        "
                    >

                        {/* Degree */}

                        <div>

                            <h3 className="text-xl font-bold text-gray-900">
                                {education.degree}
                            </h3>

                            {/* Institution */}

                            <p className="text-indigo-600 font-semibold mt-1">
                                {education.institutionName}
                            </p>

                            {/* Field */}

                            {education.fieldOfStudy && (
                                <p className="text-gray-500 mt-3">
                                    {education.fieldOfStudy}
                                </p>
                            )}

                            {/* Duration */}

                            <div className="mt-4 inline-block bg-gray-100 px-3 py-1 rounded-full">

                                <span className="text-sm text-gray-600">
                                    {education.startYear} - {education.endYear}
                                </span>

                            </div>

                            {/* Grade */}

                            {education.grade && (
                                <p className="mt-4 text-gray-700">
                                    <span className="font-semibold">
                                        Grade:
                                    </span>{" "}
                                    {education.grade}
                                </p>
                            )}

                            {/* Description */}

                            {education.description && (
                                <p className="mt-4 text-gray-600 leading-relaxed">
                                    {education.description}
                                </p>
                            )}

                        </div>

                        {/* Buttons */}

                        <div className="flex gap-3 mt-6">

                            <button
                                onClick={() => handleEdit(education)}
                                className="
                                    bg-yellow-500
                                    hover:bg-yellow-600
                                    text-white
                                    px-5
                                    py-2
                                    rounded-lg
                                    transition
                                "
                            >
                                Edit
                            </button>

                            <button
                                onClick={() => {
                                    setSelectedId(education.id);
                                    setShowDeleteModal(true);
                                }}
                                className="
                                    bg-red-500
                                    hover:bg-red-600
                                    text-white
                                    px-5
                                    py-2
                                    rounded-lg
                                    transition
                                "
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                ))}

            </div>

            {/* Delete Confirmation */}

            <DeleteModal
                isOpen={showDeleteModal}
                title="Delete Education"
                message="Are you sure you want to delete this education?"
                onCancel={() => {
                    setShowDeleteModal(false);
                    setSelectedId(null);
                }}
                onConfirm={handleDelete}
            />

        </div>
    );
}

export default EducationList;