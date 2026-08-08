import { FaInbox } from "react-icons/fa";

function EmptyState({ title, description }) {
    return (
        <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-12 text-center">

            <FaInbox className="text-5xl text-gray-400 mx-auto mb-5" />

            <h2 className="text-2xl font-semibold text-gray-700">
                {title}
            </h2>

            <p className="text-gray-500 mt-3">
                {description}
            </p>

        </div>
    );
}

export default EmptyState;