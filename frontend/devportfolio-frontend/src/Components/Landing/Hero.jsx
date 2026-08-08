import PortfolioPreview from "./PortfolioPreview";

function Hero() {

    return (

        <section className="bg-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">


                    {/* LEFT SIDE */}

                    <div>

                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">

                            Build Your Developer
                            <br />

                            Portfolio in Minutes,
                            <br />

                            <span className="text-indigo-600">
                                Not Hours.
                            </span>

                        </h1>


                        <p className="text-base sm:text-lg text-gray-600 max-w-xl mt-6 leading-7">

                            Create a stunning portfolio with live preview,
                            modern templates, and one-click publishing.

                            Stand out. Get noticed. Grow your career.

                        </p>


                        {/* Buttons */}

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">

                            <button
                                className="
                                    bg-indigo-600
                                    text-white
                                    px-6
                                    py-3
                                    rounded-lg
                                    hover:bg-indigo-700
                                    transition
                                    w-full sm:w-auto
                                "
                            >
                                Get Started Free
                            </button>

                            <button
                                className="
                                    border
                                    border-gray-300
                                    px-6
                                    py-3
                                    rounded-lg
                                    hover:bg-gray-100
                                    transition
                                    w-full sm:w-auto
                                "
                            >
                                View Live Demo
                            </button>

                        </div>


                        {/* Features */}

                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 text-sm sm:text-base text-gray-600 mt-7">

                            <span>
                                ✔ No Coding Required
                            </span>

                            <span>
                                ✔ Live Preview
                            </span>

                            <span>
                                ✔ Public Portfolio Link
                            </span>

                        </div>

                    </div>


                    {/* RIGHT SIDE */}

                    <div className="w-full">

                        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6">

                            <div className="bg-gray-900 min-h-[300px] sm:min-h-[400px] rounded-xl flex items-center justify-center text-white overflow-hidden">

                                <PortfolioPreview />

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
}

export default Hero;