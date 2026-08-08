
import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";

function TopNavbar({ portfolio, onMenuClick }) {


    return (
        <header className="sticky top-0 z-30 h-16 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-sm flex items-center justify-between px-4 sm:px-6">

            <div className="flex items-center gap-3">
                <button
                    onClick={onMenuClick}
                    className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
                >
                    <FaBars className="text-lg" />
                </button>

                <h1 className="text-lg sm:text-xl font-semibold truncate">
                    Dashboard
                </h1>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">

                <FaBell className="text-lg sm:text-xl text-gray-600 cursor-pointer" />

                <div className="flex items-center gap-2 cursor-pointer">

                    <FaUserCircle className="text-2xl sm:text-3xl text-indigo-600" />

                    <span className="hidden sm:inline font-medium">
                        {portfolio?.username || "Developer"}
                    </span>

                </div>

            </div>

        </header>
    );
}

export default TopNavbar;