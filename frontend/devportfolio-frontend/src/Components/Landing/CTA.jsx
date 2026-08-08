import { FaRocket, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function CTA() {
    return (
        <section className="py-16 md:py-20">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl md:rounded-3xl px-5 sm:px-8 lg:px-12 py-8 md:py-10 flex flex-col lg:flex-row justify-between items-center gap-8">

                    <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-5 sm:gap-6">

                        <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full bg-white flex justify-center items-center">

                            <FaRocket className="text-purple-600 text-3xl sm:text-4xl" />

                        </div>

                        <div>

                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                                Ready to Build Your Portfolio?
                            </h2>

                            <p className="text-purple-100 mt-2 text-sm sm:text-base lg:text-lg">
                                Join thousands of developers who are building
                                their online presence.
                            </p>

                        </div>

                    </div>

                    <Link
                        to="/register"
                        className="bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center gap-3 hover:scale-105 transition whitespace-nowrap"
                    >
                        Get Started Free
                        <FaArrowRight />
                    </Link>

                </div>

            </div>

        </section>
    );
}

export default CTA;