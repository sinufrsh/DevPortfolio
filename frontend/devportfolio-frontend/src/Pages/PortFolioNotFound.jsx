import { Link } from "react-router-dom";
import { FaUserSlash } from "react-icons/fa";

function PortFolioNotFound() {

return (

<div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">

    <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-10 text-center">

        <div className="w-24 h-24 mx-auto rounded-full bg-red-100 flex items-center justify-center">

            <FaUserSlash className="text-5xl text-red-500" />

        </div>

        <h1 className="text-4xl font-bold text-gray-800 mt-8">
            Portfolio Not Found
        </h1>

        <p className="text-gray-500 mt-4 leading-7">
            The portfolio you're looking for doesn't exist or hasn't been published yet.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

            <button onClick={()=> window.history.back()}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                >
                Go Back
            </button>

            <Link to="/" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Go Home
            </Link>

        </div>

    </div>

</div>

);

}

export default PortFolioNotFound;