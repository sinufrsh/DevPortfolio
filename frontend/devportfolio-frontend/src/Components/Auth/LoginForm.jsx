import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

function LoginForm() {

    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth();
    const [errors, setErrors] = useState({});

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        const validationErrors = {};

        if (!email.trim()) {
            validationErrors.email = "Email is required";
        }

        if (!password.trim()) {
            validationErrors.password = "Password is required";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});

        if (loading) return;

        setLoading(true);

        try {

            const response = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/api/auth/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Invalid email or password."
                );
            }

            login(data.data);

            toast.success("Login successful!");

            navigate("/dashboard");

        } catch (err) {

            toast.error(
                err.message || "Something went wrong."
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">

            <div className="mb-7 sm:mb-8">

                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    Welcome Back 👋
                </h1>

                <p className="text-gray-500 mt-2 text-sm sm:text-base leading-6">
                    Sign in to continue building your professional portfolio.
                </p>

            </div>

            {error && (
                <div className="mb-6 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                    {error}
                </div>
            )}

            <form
                className="space-y-5 sm:space-y-6"
                onSubmit={handleSubmit}
            >

                <div>

                    <label className="block mb-2 font-medium text-gray-700">
                        Email Address
                    </label>

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);

                            if (errors.email) {
                                setErrors({
                                    ...errors,
                                    email: ""
                                });
                            }
                        }}
                        placeholder="Enter your email"
                        className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${errors.email
                            ? "border border-red-500 focus:ring-red-500"
                            : "border border-gray-300 focus:ring-indigo-500"
                            }`}
                    />

                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.email}
                        </p>
                    )}

                </div>

                <div>

                    <label className="block mb-2 font-medium text-gray-700">
                        Password
                    </label>

                    <div className="relative">

                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);

                                if (errors.password) {
                                    setErrors({
                                        ...errors,
                                        password: ""
                                    });
                                }
                            }}
                            placeholder="Enter your password"
                            className={`w-full rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 ${errors.password
                                ? "border border-red-500 focus:ring-red-500"
                                : "border border-gray-300 focus:ring-indigo-500"
                                }`}
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword(!showPassword)
                            }
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                            {showPassword
                                ? <FaEyeSlash />
                                : <FaEye />
                            }
                        </button>

                    </div>

                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.password}
                        </p>
                    )}

                </div>

                <div className="flex justify-end">

                    <button
                        type="button"
                        className="text-indigo-600 hover:underline text-sm sm:text-base"
                    >
                        Forgot Password?
                    </button>

                </div>

                <button
                    disabled={loading}
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading
                        ? "Signing In..."
                        : "Sign In"
                    }
                </button>

            </form>

            <p className="text-center text-gray-600 mt-6 text-sm sm:text-base">

                Don't have an account?

                <Link
                    to="/register"
                    className="text-indigo-600 font-semibold ml-1 hover:underline"
                >
                    Register
                </Link>

            </p>

        </div>
    );
}

export default LoginForm;