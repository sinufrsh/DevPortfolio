import { useState, useEffect } from "react";

const emptySocialLinks = {
    id: null,
    github: "",
    linkedin: "",
    leetcode: "",
    hackerrank: "",
    portfolioWebsite: "",
    twitter: ""
};

function SocialLinksForm({

    socialLinks,
    setSocialLinks,
    fetchSocialLinks

}) {

    const [loading, setLoading] = useState(false);
    const currentSocialLinks = socialLinks || emptySocialLinks;

    useEffect(() => {
        setSocialLinks(currentSocialLinks);
    }, [currentSocialLinks, setSocialLinks]);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setSocialLinks(previous => ({
            ...(previous || emptySocialLinks),
            [name]: value
        }));

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");
        console.log(token);
        setLoading(true);

        try {

            const url = "http://localhost:8080/api/social-links";

            const method =
                currentSocialLinks.id ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(currentSocialLinks)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message);
            }

            alert(
                currentSocialLinks.id
                    ? "Social Links Updated Successfully"
                    : "Social Links Added Successfully"
            );

            fetchSocialLinks();

        } catch (err) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (

        <div className="bg-white rounded-2xl shadow-md p-8">

            <h2 className="text-2xl font-semibold mb-6">
                Social Links
            </h2>

            <form
                onSubmit={handleSubmit}
                className="space-y-5"
            >

                <div>

                    <label className="block mb-2 font-medium">
                        GitHub
                    </label>

                    <input
                        type="text"
                        name="github"
                        value={currentSocialLinks.github}
                        onChange={handleChange}
                        placeholder="https://github.com/username"
                        className="w-full border rounded-lg px-4 py-3"
                    />

                </div>

                <div>

                    <label className="block mb-2 font-medium">
                        LinkedIn
                    </label>

                    <input
                        type="text"
                        name="linkedin"
                        value={currentSocialLinks.linkedin}
                        onChange={handleChange}
                        placeholder="https://linkedin.com/in/username"
                        className="w-full border rounded-lg px-4 py-3"
                    />

                </div>

                <div>

                    <label className="block mb-2 font-medium">
                        LeetCode
                    </label>

                    <input
                        type="text"
                        name="leetcode"
                        value={currentSocialLinks.leetcode}
                        onChange={handleChange}
                        placeholder="https://leetcode.com/u/username"
                        className="w-full border rounded-lg px-4 py-3"
                    />

                </div>

                <div>

                    <label className="block mb-2 font-medium">
                        HackerRank
                    </label>

                    <input
                        type="text"
                        name="hackerrank"
                        value={currentSocialLinks.hackerrank}
                        onChange={handleChange}
                        placeholder="https://hackerrank.com/profile"
                        className="w-full border rounded-lg px-4 py-3"
                    />

                </div>

                <div>

                    <label className="block mb-2 font-medium">
                        Portfolio Website
                    </label>

                    <input
                        type="text"
                        name="portfolioWebsite"
                        value={currentSocialLinks.portfolioWebsite}
                        onChange={handleChange}
                        placeholder="https://yourportfolio.com"
                        className="w-full border rounded-lg px-4 py-3"
                    />

                </div>

                <div>

                    <label className="block mb-2 font-medium">
                        Twitter
                    </label>

                    <input
                        type="text"
                        name="twitter"
                        value={currentSocialLinks.twitter}
                        onChange={handleChange}
                        placeholder="https://x.com/username"
                        className="w-full border rounded-lg px-4 py-3"
                    />

                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg"
                >

                    {loading ? "Saving..." : "Save Social Links"}

                </button>

            </form>

        </div>

    );
}

export default SocialLinksForm;