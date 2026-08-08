import {
    FaCode,
    FaProjectDiagram,
    FaCertificate,
    FaUserEdit,
    FaBriefcase,
    FaGraduationCap,
    FaLink
} from "react-icons/fa";

function RecentActivity({ activities = [] }) {

    const getIcon = (message) => {

        const text = message.toLowerCase();

        if (text.includes("skill"))
            return {
                icon: <FaCode />,
                color: "bg-blue-100 text-blue-600"
            };

        if (text.includes("project"))
            return {
                icon: <FaProjectDiagram />,
                color: "bg-green-100 text-green-600"
            };

        if (text.includes("certification"))
            return {
                icon: <FaCertificate />,
                color: "bg-purple-100 text-purple-600"
            };

        if (text.includes("experience"))
            return {
                icon: <FaBriefcase />,
                color: "bg-orange-100 text-orange-600"
            };

        if (text.includes("education"))
            return {
                icon: <FaGraduationCap />,
                color: "bg-pink-100 text-pink-600"
            };

        if (text.includes("social"))
            return {
                icon: <FaLink />,
                color: "bg-cyan-100 text-cyan-600"
            };

        return {
            icon: <FaUserEdit />,
            color: "bg-gray-100 text-gray-600"
        };
    };

    return (
        <section className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">

            <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Recent Activity
            </h2>

            {activities.length === 0 ? (

                <p className="text-gray-500">
                    No recent activity yet.
                </p>

            ) : (

                <div className="space-y-4">

                    {activities.map((activity, index) => {

                        const { icon, color } = getIcon(activity.message);

                        return (

                            <div
                                key={index}
                                className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-none"
                            >

                                <div className="flex items-center gap-3 sm:gap-4">

                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}
                                    >
                                        {icon}
                                    </div>

                                    <div>

                                        <h3 className="font-medium text-gray-800 text-sm sm:text-base">
                                            {activity.message}
                                        </h3>

                                        <p className="text-xs sm:text-sm text-gray-500">
                                            {new Date(activity.createdAt).toLocaleString()}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        );

                    })}

                </div>

            )}

        </section>
    );
}

export default RecentActivity;