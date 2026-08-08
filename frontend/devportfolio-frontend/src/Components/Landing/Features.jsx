import FeatureCard from "./FeatureCard";

import {
    FaEye,
    FaPalette,
    FaLink,
    FaMobileAlt,
    FaLock,
    FaRocket
} from "react-icons/fa";


function Features() {

    const features = [
        {
            icon: <FaEye />,
            title: "Live Preview",
            description: "See your portfolio update instantly while editing."
        },
        {
            icon: <FaPalette />,
            title: "Modern Themes",
            description: "Choose beautiful light and dark portfolio themes."
        },
        {
            icon: <FaLink />,
            title: "Custom Portfolio URL",
            description: "Share your portfolio with a unique public username."
        },
        {
            icon: <FaMobileAlt />,
            title: "Responsive Design",
            description: "Looks perfect on desktop, tablet and mobile devices."
        },
        {
            icon: <FaLock />,
            title: "Secure Authentication",
            description: "JWT-based login keeps your portfolio secure."
        },
        {
            icon: <FaRocket />,
            title: "Easy Management",
            description: "Update projects, skills and experience anytime."
        }
    ];


    return (

        <section
            id="features"
            className="py-16 md:py-20 bg-gray-50"
        >

            {/* Heading */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">

                    <h3 className="text-indigo-600 font-semibold uppercase tracking-wider">
                        Features
                    </h3>

                    <h2 className="text-3xl sm:text-4xl font-bold mt-3 leading-tight">

                        Everything You Need to Build
                        <br className="hidden sm:block" />

                        a Professional Portfolio

                    </h2>

                </div>


                {/* Feature Cards */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                    {features.map((feature) => (

                        <FeatureCard
                            key={feature.title}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />

                    ))}

                </div>

            </div>

        </section>

    );
}

export default Features;