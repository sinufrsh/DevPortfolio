import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaRocket
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

                    <div className="sm:col-span-2 lg:col-span-1">

                        <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600 flex items-center gap-2">
                            <FaRocket />
                            DevPortfolio
                        </h2>

                        <p className="mt-4 sm:mt-5 text-gray-600 leading-7">
                            Build. Publish. Impress.
                            <br />
                            Your portfolio, your way.
                        </p>

                    </div>

                    <div>

                        <h3 className="font-semibold text-lg mb-4">
                            Product
                        </h3>

                        <ul className="space-y-3 text-gray-600">

                            <li className="hover:text-indigo-600 cursor-pointer transition">
                                Features
                            </li>

                            <li className="hover:text-indigo-600 cursor-pointer transition">
                                Templates
                            </li>

                            <li className="hover:text-indigo-600 cursor-pointer transition">
                                Pricing
                            </li>

                        </ul>

                    </div>

                    <div>

                        <h3 className="font-semibold text-lg mb-4">
                            Company
                        </h3>

                        <ul className="space-y-3 text-gray-600">

                            <li className="hover:text-indigo-600 cursor-pointer transition">
                                About
                            </li>

                            <li className="hover:text-indigo-600 cursor-pointer transition">
                                Contact
                            </li>

                            <li className="hover:text-indigo-600 cursor-pointer transition">
                                Privacy Policy
                            </li>

                        </ul>

                    </div>

                    <div>

                        <h3 className="font-semibold text-lg mb-4">
                            Resources
                        </h3>

                        <ul className="space-y-3 text-gray-600">

                            <li className="hover:text-indigo-600 cursor-pointer transition">
                                Documentation
                            </li>

                            <li className="hover:text-indigo-600 cursor-pointer transition">
                                Blog
                            </li>

                            <li className="hover:text-indigo-600 cursor-pointer transition">
                                Help Center
                            </li>

                        </ul>

                    </div>

                    <div>

                        <h3 className="font-semibold text-lg mb-4">
                            Follow Us
                        </h3>

                        <div className="flex gap-5 text-2xl text-gray-600">

                            <FaGithub className="hover:text-indigo-600 cursor-pointer transition" />

                            <FaLinkedin className="hover:text-indigo-600 cursor-pointer transition" />

                            <FaTwitter className="hover:text-indigo-600 cursor-pointer transition" />

                            <FaInstagram className="hover:text-indigo-600 cursor-pointer transition" />

                        </div>

                    </div>

                </div>

                <div className="border-t mt-10 md:mt-12 pt-6 md:pt-8 text-center text-sm sm:text-base text-gray-500">

                    © 2026 DevPortfolio. All rights reserved.

                </div>

            </div>

        </footer>
    );
}

export default Footer;