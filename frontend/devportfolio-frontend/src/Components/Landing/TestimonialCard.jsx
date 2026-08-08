import { FaStar } from "react-icons/fa";

function TestimonialCard({ name, role, review }) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6 hover:shadow-xl transition duration-300">

            <div className="flex text-purple-500 mb-4 gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>

            <p className="text-gray-600 leading-7 italic text-sm sm:text-base">
                "{review}"
            </p>

            <div className="mt-6">

                <h3 className="font-semibold text-base sm:text-lg">
                    {name}
                </h3>

                <p className="text-gray-500 text-sm sm:text-base">
                    {role}
                </p>

            </div>

        </div>
    );
}

export default TestimonialCard;