import { useState } from "react";
import DeleteModal from "../../Common/DeleteModal";

function CertificateList({

    certifications,
    fetchCertifications,
    setEditingCertification

}) {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    if (!certifications || certifications.length === 0) {

        return (

            <div className="bg-white rounded-2xl shadow-md p-8">

                <h2 className="text-xl font-semibold">

                    Your Certifications

                </h2>

                <p className="text-gray-500 mt-4">

                    No certifications added yet.

                </p>

            </div>

        );

    }

    const handleDelete = async () => {

        const token = localStorage.getItem("token");

        try {

            const response = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/api/certifications/${selectedId}`,

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

            alert("Certification Deleted Successfully");

            fetchCertifications();

        }

        catch (err) {

            alert(err.message);

        } finally {
            setSelectedId(null);
            setShowDeleteModal(false);
        }

    };

    const handleEdit = (certification) => {

        setEditingCertification(certification);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };

    return (

        <div className="space-y-6">

            <h2 className="text-2xl font-semibold">

                Your Certifications

            </h2>

            {

                certifications.map((certification) => (

                    <div
                        key={certification.id}
                        className="bg-white rounded-2xl shadow-md p-6"
                    >

                        <h3 className="text-xl font-bold">

                            {certification.certificateName}

                        </h3>

                        <p className="text-indigo-600 mt-2">

                            {certification.organization}

                        </p>

                        <p className="mt-2 text-gray-600">

                            Issue Date :
                            {" "}
                            {certification.issueDate}

                        </p>

                        <a
                            href={certification.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                        >

                            View Credential

                        </a>

                        <div className="flex gap-4 mt-5">

                            <button
                                onClick={() => handleEdit(certification)}
                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                            >

                                Edit

                            </button>

                            <button
                                onClick={() => {
                                    setSelectedId(certification.id);
                                    setShowDeleteModal(true);
                                }}
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                            >

                                Delete

                            </button>

                        </div>

                    </div>

                ))

            }

            <DeleteModal
                isOpen={showDeleteModal}
                title="Delete Certification"
                message="Are you sure you want to delete this certification?"
                onCancel={() => {
                    setShowDeleteModal(false);
                    setSelectedId(null);
                }}
                onConfirm={handleDelete}
            />
        </div>

    );

}

export default CertificateList;