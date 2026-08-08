import {
    FaCode,
    FaProjectDiagram,
    FaBriefcase,
    FaCertificate
} from "react-icons/fa";

import StatCard from "./StatCard";

function StatsGrid({ dashboard }) {

    const stats = [

        {
            title: "Skills",
            value: dashboard?.skills || 0,
            icon: <FaCode />,
            color: "bg-indigo-600"
        },

        {
            title: "Projects",
            value: dashboard?.projects || 0,
            icon: <FaProjectDiagram />,
            color: "bg-green-500"
        },

        {
            title: "Experience",
            value: dashboard?.experiences || 0,
            icon: <FaBriefcase />,
            color: "bg-orange-500"
        },

        {
            title: "Certificates",
            value: dashboard?.certifications || 0,
            icon: <FaCertificate />,
            color: "bg-purple-600"
        }

    ];

    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">

            {stats.map((item) => (

                <StatCard
                    key={item.title}
                    title={item.title}
                    value={item.value}
                    icon={item.icon}
                    color={item.color}
                />

            ))}

        </div>

    );
}

export default StatsGrid;