import { useOutletContext } from "react-router-dom";
import ProfileForm from "../../Components/dashboard/profile/ProfileForm";

function Profile() {

    // const { portfolio, fetchPortfolio } = useOutletContext();

    // const handlePublish = async () => {

    //     const token = localStorage.getItem("token");

    //     const response = await fetch(
    //         "http://localhost:8080/api/portfolio/publish",
    //         {
    //             method: "PUT",
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         }
    //     );

    //     const result = await response.json();

    //     if (result.success) {
    //         alert("Portfolio Published Successfully");
    //         fetchPortfolio();
    //     }
    // };

    // const handleUnpublish = async () => {

    //     const token = localStorage.getItem("token");

    //     const response = await fetch(
    //         "http://localhost:8080/api/portfolio/unpublish",
    //         {
    //             method: "PUT",
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         }
    //     );

    //     const result = await response.json();

    //     if (result.success) {
    //         alert("Portfolio Unpublished");
    //         fetchPortfolio();
    //     }
    // };

    return (
        <div className="p-4 sm:p-8">

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
                Profile
            </h1>

            <ProfileForm />

            {/* <div className="mt-6">

                {portfolio?.published ? (

                    <button
                        onClick={handleUnpublish}
                        className="bg-red-600 text-white px-5 py-2 rounded-lg"
                    >
                        Unpublish Portfolio
                    </button>

                ) : (

                    <button
                        onClick={handlePublish}
                        className="bg-green-600 text-white px-5 py-2 rounded-lg"
                    >
                        Publish Portfolio
                    </button>

                )}

            </div> */}

        </div>
    );
}

export default Profile;