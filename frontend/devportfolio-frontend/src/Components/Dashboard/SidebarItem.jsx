import { NavLink } from "react-router-dom";

function SidebarItem({
    path,
    icon,
    name,
    disabled = false,
    onClick
}) {

    if (disabled) {

        return (
            <div
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 cursor-not-allowed"
                title="Create your portfolio first"
            >
                <span className="text-lg">
                    {icon}
                </span>

                <span className="font-medium">
                    {name}
                </span>
            </div>
        );
    }

    return (
        <NavLink
            to={path}
            onClick={onClick}
            className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                    ? "bg-indigo-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
            }
        >
            <span className="text-lg">
                {icon}
            </span>

            <span className="font-medium">
                {name}
            </span>

        </NavLink>
    );
}

export default SidebarItem;