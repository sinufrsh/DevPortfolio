import { useEffect, useState } from "react";

function CertificateForm({
    fetchCertifications,
    editingCertification,
    setEditingCertification
}) {

    const initialCertification = {
        certificateName: "",
        organization: "",
        issueDate: "",
        credentialUrl: ""
    };

    const [certification, setCertification] = useState(initialCertification);

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (editingCertification) {
            setCertification(editingCertification);
        }

    }, [editingCertification]);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setCertification(previous => ({
            ...previous,
            [name]: value
        }));

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const token = localStorage.getItem("token");

        setLoading(true);

        try {

            const url = editingCertification
                ? `http://localhost:8080/api/certifications/${editingCertification.id}`
                : "http://localhost:8080/api/certifications";

            const method = editingCertification ? "PUT" : "POST";

            const response = await fetch(url, {

                method,

                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },

                body: JSON.stringify(certification)

            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message);
            }

            alert(
                editingCertification
                    ? "Certification Updated Successfully"
                    : "Certification Added Successfully"
            );

            setCertification(initialCertification);

            setEditingCertification(null);

            fetchCertifications();

        }

        catch (err) {
            alert(err.message);
        }

        finally {
            setLoading(false);
        }

    };

    return (

        <div className="bg-white rounded-2xl shadow-md p-8">

            <h2 className="text-2xl font-semibold mb-6">

                Certification Information

            </h2>

            <form
                onSubmit={handleSubmit}
                className="space-y-5"
            >

                <div>

                    <label className="block mb-2 font-medium">

                        Certificate Name

                    </label>

                    <input
                        type="text"
                        name="certificateName"
                        value={certification.certificateName}
                        onChange={handleChange}
                        placeholder="Java Programming"
                        className="w-full border rounded-lg px-4 py-3"
                    />

                </div>

                <div>

                    <label className="block mb-2 font-medium">

                        Organization

                    </label>

                    <input
                        type="text"
                        name="organization"
                        value={certification.organization}
                        onChange={handleChange}
                        placeholder="Infosys"
                        className="w-full border rounded-lg px-4 py-3"
                    />

                </div>

                <div>

                    <label className="block mb-2 font-medium">

                        Issue Date

                    </label>

                    <input
                        type="date"
                        name="issueDate"
                        value={certification.issueDate}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3"
                    />

                </div>

                <div>

                    <label className="block mb-2 font-medium">

                        Credential URL

                    </label>

                    <input
                        type="text"
                        name="credentialUrl"
                        value={certification.credentialUrl}
                        onChange={handleChange}
                        placeholder="https://..."
                        className="w-full border rounded-lg px-4 py-3"
                    />

                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
                >

                    {
                        loading
                            ? "Saving..."
                            : editingCertification
                                ? "Update Certification"
                                : "Add Certification"
                    }

                </button>

            </form>

        </div>

    );

}

export default CertificateForm;