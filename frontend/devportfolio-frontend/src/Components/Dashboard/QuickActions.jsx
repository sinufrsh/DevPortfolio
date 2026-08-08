import { Link } from "react-router-dom";
import {
    FaUserEdit,
    FaPlus,
    FaEye
} from "react-icons/fa";

function QuickActions({ portfolio }) {

    const buttons = [
        {
            title: "Edit Profile",
            path: "/dashboard/profile",
            icon: <FaUserEdit />
        },
        {
            title: "Add New Project",
            path: "/dashboard/projects",
            icon: <FaPlus />
        },
        {
            title: "Preview Portfolio",
            path: "/preview",
            icon: <FaEye />
        }
    ];

    return (
        <section className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">

            <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Quick Actions
            </h2>

            <div className="space-y-4">

                {buttons.map((button) => (

                    <Link
                        key={button.title}
                        to={
                            button.title === "Preview Portfolio"
                                ? (portfolio ? button.path : "#")
                                : button.path
                        }
                        onClick={(e) => {
                            if (button.title === "Preview Portfolio" && !portfolio) {
                                e.preventDefault();
                                alert("Please create your portfolio first.");
                            }
                        }}
                        className={`flex items-center gap-3 p-3 border rounded-lg transition ${button.title === "Preview Portfolio" && !portfolio
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:bg-indigo-50 hover:border-indigo-500"
                            }`}
                    >
                        <span className="text-indigo-600">
                            {button.icon}
                        </span>

                        <span className="font-medium text-gray-700">
                            {button.title}
                        </span>
                    </Link>

                ))}

            </div>

        </section>
    );
}

export default QuickActions;