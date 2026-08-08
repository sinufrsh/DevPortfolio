import {
    FaUserPlus,
    FaEdit,
    FaRocket,
    FaShareAlt,
    FaArrowRight,
    FaArrowDown
} from "react-icons/fa";

import StepCard from "./StepCard";


function HowItWorks() {

    const steps = [
        {
            number: "01",
            icon: <FaUserPlus />,
            title: "Create Account",
            description: "Sign up securely and create your account in seconds."
        },
        {
            number: "02",
            icon: <FaEdit />,
            title: "Build Portfolio",
            description: "Add your skills, projects, education and experience."
        },
        {
            number: "03",
            icon: <FaRocket />,
            title: "Publish",
            description: "Generate your portfolio instantly with one click."
        },
        {
            number: "04",
            icon: <FaShareAlt />,
            title: "Share",
            description: "Share your portfolio URL with recruiters and companies."
        }
    ];

    return (

        <section
            id="how-it-works"
            className="py-16 md:py-20 bg-gray-50"
        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}

                <div className="text-center mb-12">

                    <h3 className="text-indigo-600 font-semibold uppercase tracking-wider">
                        How It Works
                    </h3>

                    <h2 className="
                        text-3xl
                        sm:text-4xl
                        font-bold
                        mt-3
                        leading-tight
                    ">
                        Build, Publish, and Share
                        <br className="hidden sm:block" />
                        in 4 Easy Steps
                    </h2>

                </div>


                {/* Steps */}

                <div className="
                    flex
                    flex-col
                    lg:flex-row
                    lg:items-start
                    lg:justify-between
                    gap-8
                    lg:gap-4
                    mt-12
                ">

                    {steps.map((step, index) => (

                        <div
                            key={step.number}
                            className="
                                flex
                                flex-col
                                lg:flex-row
                                items-center
                                flex-1
                            "
                        >

                            <StepCard
                                number={step.number}
                                title={step.title}
                                description={step.description}
                                icon={step.icon}
                            />


                            {/* Desktop Arrow */}

                            {index !== steps.length - 1 && (

                                <FaArrowRight
                                    className="
                                        hidden
                                        lg:block
                                        text-purple-400
                                        text-2xl
                                        mx-4
                                        xl:mx-8
                                        shrink-0
                                    "
                                />

                            )}


                            {/* Mobile Arrow */}

                            {index !== steps.length - 1 && (

                                <FaArrowDown
                                    className="
                                        lg:hidden
                                        text-purple-400
                                        text-2xl
                                        my-2
                                    "
                                />

                            )}

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default HowItWorks;