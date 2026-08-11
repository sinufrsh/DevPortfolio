import { useEffect, useState } from "react";
import SocialLinksForm from "../../Components/Dashboard/SocialLink/SocialLinksForm";

const emptySocialLinks = {
    id: null,
    github: "",
    linkedin: "",
    leetcode: "",
    hackerrank: "",
    portfolioWebsite: "",
    twitter: ""
};

function SocialLinks() {

    const [socialLinks, setSocialLinks] = useState(emptySocialLinks);

    const fetchSocialLinks = async () => {

        const token = localStorage.getItem("token");

        try {

            const response = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/api/social-links`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const result = await response.json();

            if (response.ok) {
                setSocialLinks(result?.data || emptySocialLinks);
            } else {
                setSocialLinks(emptySocialLinks);
            }

        } catch (err) {
            alert(err.message);
        }
    };

    useEffect(() => {
        fetchSocialLinks();
    }, []);

    return (
        <div className="p-8">

            <h1 className="text-3xl font-bold mb-8">
                Social Links
            </h1>

            <SocialLinksForm
                socialLinks={socialLinks}
                setSocialLinks={setSocialLinks}
                fetchSocialLinks={fetchSocialLinks}
            />

        </div>
    );
}

export default SocialLinks;