import {
    FaBriefcase,
    FaCertificate,
    FaCode,
    FaEye,
    FaGraduationCap,
    FaHome,
    FaLink,
    FaProjectDiagram,
    FaRocket,
    FaSadCry,
    FaUser,
    FaTimes
} from "react-icons/fa";

import SidebarItem from "./SidebarItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

function Sidebar({ portfolio, isOpen, onClose }) {

    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const mainMenu = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: <FaHome />
        },
        {
            name: "Profile",
            path: "/dashboard/profile",
            icon: <FaUser />
        }
    ];

    const portfolioMenu = [
        {
            name: "Skills",
            path: "/dashboard/skills",
            icon: <FaCode />
        },
        {
            name: "Projects",
            path: "/dashboard/projects",
            icon: <FaProjectDiagram />
        },
        {
            name: "Experience",
            path: "/dashboard/experience",
            icon: <FaBriefcase />
        },
        {
            name: "Education",
            path: "/dashboard/education",
            icon: <FaGraduationCap />
        },
        {
            name: "Certificates",
            path: "/dashboard/certificates",
            icon: <FaCertificate />
        },
        {
            name: "Social Links",
            path: "/dashboard/social-links",
            icon: <FaLink />
        },
        {
            name: "Preview",
            path: "/preview",
            icon: <FaEye />
        },
        {
            name: "Logout",
            action: "logout",
            icon: <FaSadCry />
        }
    ];

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("token");

        toast.success("Logged out successfully");

        navigate("/login", { replace: true });

        onClose();
    };

    return (
        <>
            {isOpen && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                />
            )}

            <aside
                className={`
                    fixed lg:static
                    top-0 left-0
                    z-50
                    h-screen
                    w-72 max-w-[85vw]
                    sm:w-80
                    bg-slate-900
                    text-white
                    flex flex-col
                    overflow-hidden
                    transform transition-transform duration-300
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                    lg:translate-x-0
                `}
            >

                <div className="flex items-center justify-between gap-3 px-6 py-6 border-b border-slate-700">

                    <div className="flex items-center gap-3">

                        <div className="bg-indigo-600 p-3 rounded-xl">
                            <FaRocket className="text-xl" />
                        </div>

                        <div>
                            <h2 className="text-xl font-bold">
                                DevPortfolio
                            </h2>

                            <p className="text-sm text-slate-400">
                                Portfolio Builder
                            </p>
                        </div>

                    </div>

                    <button
                        onClick={onClose}
                        className="lg:hidden text-slate-400 hover:text-white text-xl"
                    >
                        <FaTimes />
                    </button>

                </div>

                <div className="flex-1 overflow-y-auto hide-scrollbar">

                    <div className="mt-6 px-4 space-y-2">

                        {mainMenu.map((item) => (
                            <SidebarItem
                                key={item.name}
                                name={item.name}
                                path={item.path}
                                icon={item.icon}
                                onClick={onClose}
                            />
                        ))}

                    </div>

                    <div className="mt-8 px-4">

                        <p className="text-xs uppercase tracking-widest text-slate-500 mb-4 px-2">
                            Portfolio Sections
                        </p>

                        <div className="space-y-2">

                            {portfolioMenu.map((item) => (

                                item.action === "logout" ? (

                                    <button
                                        key={item.name}
                                        onClick={() => setShowLogoutModal(true)}
                                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-slate-300 hover:bg-slate-800 hover:text-white transition"
                                    >
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </button>

                                ) : (

                                    <SidebarItem
                                        key={item.name}
                                        name={item.name}
                                        path={item.path}
                                        icon={item.icon}
                                        disabled={!portfolio}
                                        onClick={onClose}
                                    />

                                )

                            ))}

                        </div>

                    </div>

                </div>

                {showLogoutModal && (

                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60] px-4">

                        <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-[420px] shadow-2xl">

                            <h2 className="text-2xl font-bold text-gray-800">
                                Logout
                            </h2>

                            <p className="text-gray-600 mt-3">
                                Are you sure you want to logout?
                            </p>

                            <div className="flex justify-end gap-3 sm:gap-4 mt-8">

                                <button
                                    onClick={() => setShowLogoutModal(false)}
                                    className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 text-black"
                                >
                                    Cancel
                                </button>

                                <button
                                    onClick={handleLogout}
                                    className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                                >
                                    Logout
                                </button>

                            </div>

                        </div>

                    </div>

                )}

            </aside>
        </>
    );
}

export default Sidebar;