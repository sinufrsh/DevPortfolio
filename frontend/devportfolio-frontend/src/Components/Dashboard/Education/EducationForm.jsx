import { useEffect, useState } from "react";

function EducationForm({
    fetchEducations,
    editingEducation,
    setEditingEducation
}) {

    const initialEducation = {
        institutionName: "",
        degree: "",
        fieldOfStudy: "",
        startYear: "",
        endYear: "",
        grade: "",
        description: ""
    };

    const [education, setEducation] = useState(initialEducation);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (editingEducation) {
            setEducation(editingEducation);
        }
    }, [editingEducation]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setEducation((previousEducation) => ({
            ...previousEducation,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");
        setLoading(true);

        try {

            const url = editingEducation
                ? `${import.meta.env.VITE_API_BASE_URL}/api/educations/${editingEducation.id}`
                : `${import.meta.env.VITE_API_BASE_URL}/api/educations`;

            const method = editingEducation ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(education)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message);
            }

            alert(
                editingEducation
                    ? "Education Updated Successfully"
                    : "Education Added Successfully"
            );

            setEducation(initialEducation);
            setEditingEducation(null);
            fetchEducations();

        } catch (err) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-md p-8">

            <h2 className="text-2xl font-semibold mb-6">
                Educational Information
            </h2>

            <form
                onSubmit={handleSubmit}
                className="space-y-5"
            >

                <div>
                    <label className="block mb-2 font-medium">
                        Institution Name
                    </label>

                    <input
                        type="text"
                        name="institutionName"
                        value={education.institutionName}
                        onChange={handleChange}
                        placeholder="Gandhi Engineering College"
                        className="w-full border rounded-lg px-4 py-3"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium">
                        Degree
                    </label>

                    <input
                        type="text"
                        name="degree"
                        value={education.degree}
                        onChange={handleChange}
                        placeholder="MCA"
                        className="w-full border rounded-lg px-4 py-3"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium">
                        Field Of Study
                    </label>

                    <input
                        type="text"
                        name="fieldOfStudy"
                        value={education.fieldOfStudy}
                        onChange={handleChange}
                        placeholder="Computer Applications"
                        className="w-full border rounded-lg px-4 py-3"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">

                    <div>
                        <label className="block mb-2 font-medium">
                            Start Year
                        </label>

                        <input
                            type="text"
                            name="startYear"
                            value={education.startYear}
                            onChange={handleChange}
                            placeholder="2023"
                            className="w-full border rounded-lg px-4 py-3"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            End Year
                        </label>

                        <input
                            type="text"
                            name="endYear"
                            value={education.endYear}
                            onChange={handleChange}
                            placeholder="2025"
                            className="w-full border rounded-lg px-4 py-3"
                        />
                    </div>

                </div>

                <div>
                    <label className="block mb-2 font-medium">
                        Grade / CGPA
                    </label>

                    <input
                        type="text"
                        name="grade"
                        value={education.grade}
                        onChange={handleChange}
                        placeholder="8.9 CGPA"
                        className="w-full border rounded-lg px-4 py-3"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium">
                        Description
                    </label>

                    <textarea
                        rows="5"
                        name="description"
                        value={education.description}
                        onChange={handleChange}
                        placeholder="Write about your education..."
                        className="w-full border rounded-lg px-4 py-3 resize-none"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
                >
                    {loading
                        ? "Saving..."
                        : editingEducation
                            ? "Update Education"
                            : "Add Education"}
                </button>

            </form>

        </div>
    );
}

export default EducationForm;