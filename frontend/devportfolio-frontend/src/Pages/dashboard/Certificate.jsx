import { useEffect, useState } from "react";

import CertificateForm from "../../Components/Dashboard/Certificate/CertificateForm";
import CertificateList from "../../Components/Dashboard/Certificate/CertificateList";

function Certificate() {

    const [certifications, setCertifications] = useState([]);
    const [editingCertification, setEditingCertification] = useState(null);

    const fetchCertifications = async () => {

        const token = localStorage.getItem("token");

        try {

            const response = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/api/certifications`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message);
            }

            setCertifications(result.data);

        } catch (err) {
            alert(err.message);
        }

    };

    useEffect(() => {
        fetchCertifications();
    }, []);

    return (

        <div className="p-8 space-y-8">

            <h1 className="text-3xl font-bold">
                Certifications
            </h1>

            <CertificateForm
                fetchCertifications={fetchCertifications}
                editingCertification={editingCertification}
                setEditingCertification={setEditingCertification}
            />

            <CertificateList
                certifications={certifications}
                fetchCertifications={fetchCertifications}
                setEditingCertification={setEditingCertification}
            />

        </div>

    );
}

export default Certificate;