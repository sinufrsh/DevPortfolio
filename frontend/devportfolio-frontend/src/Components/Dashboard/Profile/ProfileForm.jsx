import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
function ProfileForm() {
    const [formData, setFormData] = useState({
        username: "",
        headline: "",
        bio: "",
        location: "",
        phone: "",
        profileImageUrl: "",
        resumeUrl: "",
        theme: "dark",
        published: false
    });
    const [profileImage, setProfileImage] = useState(null);
    const [resume, setResume] = useState(null);

    const [hasPortfolio, setHasPortfolio] = useState(true);
    const [isNewPortfolio, setIsNewPortfolio] = useState(false);
    const { fetchPortfolio } = useOutletContext();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            console.log("Method:", isNewPortfolio ? "POST" : "PUT");
            const response = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/api/portfolio`,
                {
                    method: isNewPortfolio ? "POST" : "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(formData)
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Update failed");
            }

            alert(
                isNewPortfolio
                    ? "Portfolio Created Successfully!"
                    : "Profile Updated Successfully!"
            );

            setIsNewPortfolio(false);
            setHasPortfolio(true);

            await fetchPortfolio();
            await fetchProfile();

        } catch (err) {

            alert(err.message);

        }

    };


    const fetchProfile = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/api/portfolio`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const result = await response.json();

            if (response.ok && result.success && result.data) {

                setFormData(result.data);
                setHasPortfolio(true);
                setIsNewPortfolio(false);

            } else {

                setHasPortfolio(false);
                setIsNewPortfolio(true);

            }

        } catch (err) {

            console.error(err);

        }

    };
    useEffect(() => {
        fetchProfile();
    }, [])



    const uploadProfileImage = async (file) => {

        if (!hasPortfolio) {
            alert("Please save your portfolio first.");
            return;
        }


        const uploadData = new FormData();

        uploadData.append("file", file);

        try {

            const token = localStorage.getItem("token");

            const response = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/api/portfolio/upload/profile-image`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    body: uploadData
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Upload failed");
            }

            setFormData(prev => ({
                ...prev,
                profileImageUrl: result.data
            }));

            alert("Profile image uploaded successfully");

        } catch (err) {

            alert(err.message);

        }
    };

    const uploadResume = async (file) => {

        if (!hasPortfolio) {
            alert("Please save your portfolio first.");
            return;
        }


        const uploadData = new FormData();

        uploadData.append("file", file);

        try {

            const token = localStorage.getItem("token");

            const response = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/api/portfolio/upload/resume`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    body: uploadData
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Upload failed");
            }

            setFormData(prev => ({
                ...prev,
                resumeUrl: result.data
            }));

            alert("Resume uploaded successfully");

        } catch (err) {

            alert(err.message);

        }
    };
    return (
        <>

            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-md p-8 space-y-6"
            >

                <h2 className="text-2xl font-bold text-gray-800">
                    Portfolio Information
                </h2>

                <div>
                    <label className="block mb-2 font-medium text-gray-700">
                        Username
                    </label>

                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="name"
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium text-gray-700">
                        Headline
                    </label>

                    <input
                        type="text"
                        name="headline"
                        value={formData.headline}
                        onChange={handleChange}
                        placeholder="Java Full Stack Developer"
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>


                <div>
                    <label className="block mb-2 font-medium text-gray-700">
                        Bio
                    </label>

                    <textarea
                        rows="5"
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        placeholder="Tell recruiters about yourself..."
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium text-gray-700">
                        Phone Number
                    </label>

                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9876543210"
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>

                    <label className="block mb-2 font-medium">
                        Profile Image
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                        disabled={!hasPortfolio}
                        onChange={async (e) => {

                            const file = e.target.files[0];

                            if (!file) return;

                            setProfileImage(file);

                            await uploadProfileImage(file);

                        }}
                    />

                </div>

                <div>

                    <label className="block mb-2 font-medium">
                        Resume
                    </label>

                    <input
                        type="file"
                        accept=".pdf"
                        disabled={!hasPortfolio}
                        onChange={async (e) => {

                            const file = e.target.files[0];

                            setResume(file);

                            await uploadResume(file);

                        }}
                    />

                </div>

                {!hasPortfolio && (
                    <p className="text-sm text-orange-600 mt-2">
                        Save your portfolio first, then you can upload a profile image and resume.
                    </p>
                )}

                <div>
                    <label className="block mb-2 font-medium text-gray-700">
                        Location
                    </label>

                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Bhubaneswar, Odisha"
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>



                {/* <div>
                    <label className="block mb-2 font-medium text-gray-700">
                        Theme
                    </label>

                    <select
                        name="theme"
                        value={formData.theme}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="dark">Dark</option>
                        <option value="light">Light</option>
                    </select>
                </div> */}


                {/* <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        name="published"
                        checked={formData.published}
                        onChange={handleChange}
                        className="h-5 w-5"
                    />

                    <label className="font-medium text-gray-700">
                        Publish Portfolio
                    </label>
                </div> */}


                <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                >
                    Save Profile
                </button>

            </form>
        </>
    );
}

export default ProfileForm;