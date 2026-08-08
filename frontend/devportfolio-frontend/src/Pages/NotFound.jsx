import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

function NotFound() {

    return (

        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">

            <div className="text-center">

                <FaExclamationTriangle className="text-7xl text-indigo-600 mx-auto mb-6" />

                <h1 className="text-7xl font-bold text-gray-800">
                    404
                </h1>

                <h2 className="text-3xl font-semibold mt-4 text-gray-700">
                    Page Not Found
                </h2>

                <p className="text-gray-500 mt-4 max-w-md mx-auto">
                    The page you're looking for doesn't exist or may have been moved.
                </p>

                <div className="flex justify-center gap-4 mt-8">

                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-3 border rounded-lg hover:bg-gray-100"
                    >
                        Go Back
                    </button>

                    <Link
                        to="/"
                        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                        Go Home
                    </Link>

                </div>

            </div>

        </div>

    );

}

export default NotFound;