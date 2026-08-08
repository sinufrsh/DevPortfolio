import { useEffect, useState } from "react";

function ExperienceForm({ fetchExperiences, editingExperience, setEditingExperience }) {
    const initialExperience = {
        companyName: "",
        jobTitle: "",
        location: "",
        startDate: "",
        endDate: "",
        description: ""
    };

    const [experience, setExperience] = useState(initialExperience);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (editingExperience) {
            setExperience(editingExperience);
        }
    }, [editingExperience]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setExperience((previousExperience) => ({
            ...previousExperience,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!experience.companyName.trim() || !experience.jobTitle.trim()) {
            alert("Company name and job title are required.");
            return;
        }

        const token = localStorage.getItem("token");
        setLoading(true);

        try {
            const url = editingExperience
                ? `http://localhost:8080/api/experiences/${editingExperience.id}`
                : "http://localhost:8080/api/experiences";

            const method = editingExperience ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(experience)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message || "Failed to add experience."
                );
            }

            alert(
                editingExperience
                    ? "Experience Updated Successfully"
                    : "Experience Added Successfully"
            );

            setExperience(initialExperience);

            setEditingExperience(null);

            fetchExperiences();

        } catch (error) {
            alert(error.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">
                Add Experience
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label
                        htmlFor="companyName"
                        className="block mb-2 font-medium"
                    >
                        Company Name
                    </label>

                    <input
                        id="companyName"
                        type="text"
                        name="companyName"
                        value={experience.companyName}
                        onChange={handleChange}
                        placeholder="Infosys"
                        className="w-full border rounded-lg px-4 py-3"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="jobTitle"
                        className="block mb-2 font-medium"
                    >
                        Job Title
                    </label>

                    <input
                        id="jobTitle"
                        type="text"
                        name="jobTitle"
                        value={experience.jobTitle}
                        onChange={handleChange}
                        placeholder="Java Developer Intern"
                        className="w-full border rounded-lg px-4 py-3"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="location"
                        className="block mb-2 font-medium"
                    >
                        Location
                    </label>

                    <input
                        id="location"
                        type="text"
                        name="location"
                        value={experience.location}
                        onChange={handleChange}
                        placeholder="Bhubaneswar, Odisha"
                        className="w-full border rounded-lg px-4 py-3"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label
                            htmlFor="startDate"
                            className="block mb-2 font-medium"
                        >
                            Start Date
                        </label>

                        <input
                            id="startDate"
                            type="date"
                            name="startDate"
                            value={experience.startDate}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-3"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="endDate"
                            className="block mb-2 font-medium"
                        >
                            End Date
                        </label>

                        <input
                            id="endDate"
                            type="date"
                            name="endDate"
                            value={experience.endDate}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-3"
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="description"
                        className="block mb-2 font-medium"
                    >
                        Description
                    </label>

                    <textarea
                        id="description"
                        name="description"
                        rows="5"
                        value={experience.description}
                        onChange={handleChange}
                        placeholder="Describe your responsibilities and achievements..."
                        className="w-full border rounded-lg px-4 py-3 resize-none"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading
                        ? "Saving..."
                        : editingExperience
                            ? "Update Experience"
                            : "Add Experience"}
                </button>
            </form>
        </div>
    );
}

export default ExperienceForm;