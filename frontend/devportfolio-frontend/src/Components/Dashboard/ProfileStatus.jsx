
import { toast } from "react-hot-toast";
function PortfolioStatus({
    portfolio,
    completion,
    onPublish,
    onUnpublish
}) {

    const canPublish = completion === 100;
    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(
                `${import.meta.env.VITE_FRONTEND_URL}/portfolio/${portfolio.username}`
            );
            toast.success("Portfolio link copied!");
        } catch (error) {
            toast.error("Failed to copy link.");
        }
    };

    return (

        <section className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">

            <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Portfolio Status
            </h2>

            <div className="flex flex-col gap-5">

                {portfolio?.published ? (

                    <>
                        <div className="flex items-center gap-3">

                            <span className="w-3 h-3 rounded-full bg-green-500"></span>

                            <span className="font-medium text-green-600">
                                Published
                            </span>

                        </div>

                        <button
                            onClick={onUnpublish}
                            className="bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
                        >
                            Unpublish Portfolio
                        </button>

                        <button
                            onClick={handleCopyLink}
                            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
                        >
                            Copy Portfolio Link
                        </button>
                    </>

                ) : (

                    <>
                        <div className="flex items-center gap-3">

                            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>

                            <span className="font-medium text-yellow-600">
                                Draft
                            </span>

                        </div>

                        {!canPublish && (

                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">

                                <p className="text-sm text-yellow-700">
                                    Complete your profile to publish your portfolio.
                                </p>

                                <p className="text-xs text-gray-500 mt-1">
                                    Current Completion: {completion}%
                                </p>

                            </div>

                        )}

                        <button
                            onClick={onPublish}
                            disabled={!canPublish}
                            className={`py-3 rounded-lg text-white transition
            ${canPublish
                                    ? "bg-green-600 hover:bg-green-700"
                                    : "bg-gray-400 cursor-not-allowed opacity-60"
                                }`}
                        >
                            Publish Portfolio
                        </button>
                    </>

                )}

            </div>


        </section>

    );

}

export default PortfolioStatus;