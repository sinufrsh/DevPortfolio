import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

function Register() {

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        setErrors({
            ...errors,
            [name]: ""
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {

            setErrors({
                confirmPassword: "Passwords do not match"
            });

            return;
        }

        setLoading(true);

        try {

            const response = await fetch(
                "http://localhost:8080/api/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        fullName: formData.fullName,
                        email: formData.email,
                        password: formData.password
                    })
                }
            );

            const result = await response.json();

            if (!response.ok) {

                if (result.data) {
                    setErrors(result.data);
                } else {
                    toast.error(result.message);
                }

                return;
            }

            toast.success("Registration successful!");

            navigate("/login");

        } catch (err) {

            toast.error(err.message);

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8 sm:px-6">

            <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-lg">

                <div className="mb-6 sm:mb-8">

                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                        Create Account
                    </h1>

                    <p className="text-gray-500 mt-2 text-sm sm:text-base">
                        Create your account and start building your portfolio.
                    </p>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <div>

                        <label className="block mb-2 font-medium text-gray-700">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className={`w-full rounded-lg px-4 py-3 border focus:outline-none focus:ring-2 ${errors.fullName
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-indigo-500"
                                }`}
                        />

                        {errors.fullName && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.fullName}
                            </p>
                        )}

                    </div>

                    <div>

                        <label className="block mb-2 font-medium text-gray-700">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className={`w-full rounded-lg px-4 py-3 border focus:outline-none focus:ring-2 ${errors.email
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-indigo-500"
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
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className={`w-full rounded-lg px-4 py-3 pr-12 border focus:outline-none focus:ring-2 ${errors.password
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-300 focus:ring-indigo-500"
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

                    <div>

                        <label className="block mb-2 font-medium text-gray-700">
                            Confirm Password
                        </label>

                        <div className="relative">

                            <input
                                type={
                                    showConfirmPassword
                                        ? "text"
                                        : "password"
                                }
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm your password"
                                className={`w-full rounded-lg px-4 py-3 pr-12 border focus:outline-none focus:ring-2 ${errors.confirmPassword
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-300 focus:ring-indigo-500"
                                    }`}
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowConfirmPassword(
                                        !showConfirmPassword
                                    )
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                {showConfirmPassword
                                    ? <FaEyeSlash />
                                    : <FaEye />
                                }
                            </button>

                        </div>

                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.confirmPassword}
                            </p>
                        )}

                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {loading
                            ? "Creating..."
                            : "Create Account"
                        }
                    </button>

                </form>

                <p className="mt-6 text-center text-sm sm:text-base text-gray-600">

                    Already have an account?{" "}

                    <Link
                        to="/login"
                        className="text-indigo-600 font-medium hover:underline"
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>

    );
}

export default Register;