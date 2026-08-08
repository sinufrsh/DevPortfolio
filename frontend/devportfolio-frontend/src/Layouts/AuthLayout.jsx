import { Outlet } from "react-router-dom";
import { FaRocket } from "react-icons/fa";
import preview from "../assets/preview.png";

function AuthLayout() {
    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            <div className="flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700 text-white p-6 sm:p-8 lg:p-12">

                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                    <FaRocket className="text-4xl" />

                    <h1 className="text-2xl sm:text-3xl font-bold">
                        DevPortfolio
                    </h1>

                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center leading-tight">
                    Build Your
                    <br />
                    Developer Portfolio
                </h2>
                <p className="text-center text-base sm:text-lg text-purple-100 mt-4 sm:mt-6 max-w-md leading-7 sm:leading-8">
                    Showcase your skills, projects and achievements with a
                    beautiful portfolio that recruiters will love.
                </p>
                <img
                    src={preview}
                    alt="Portfolio Preview"
                    className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] mt-8 sm:mt-10 lg:mt-12 rounded-2xl shadow-2xl"
                />

            </div>
            <div className="flex justify-center items-center bg-gray-50 p-4 sm:p-6 lg:p-8">

                <div className="w-full max-w-md">

                    <Outlet />

                </div>

            </div>

        </div>
    );
}

export default AuthLayout;