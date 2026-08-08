import TemplateCard from "./TemplateCard";
import preview from "../../assets/preview.png";

function Templates() {

    const templates = [
        {
            id: 1,
            image: preview,
            title: "Modern Dark",
            description: "Perfect for Full Stack Developers"
        },
        {
            id: 2,
            image: preview,
            title: "Minimal Light",
            description: "Clean and Professional"
        },
        {
            id: 3,
            image: preview,
            title: "Creative Purple",
            description: "Stand out from the crowd"
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-gray-50">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-10 md:mb-12">

                    <h3 className="text-indigo-600 font-semibold uppercase tracking-wider">
                        Templates
                    </h3>

                    <h2 className="text-3xl sm:text-4xl font-bold mt-3 leading-tight">
                        Beautiful Templates To Choose From
                    </h2>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                    {templates.map((template) => (

                        <TemplateCard
                            key={template.id}
                            image={template.image}
                            title={template.title}
                            description={template.description}
                        />

                    ))}

                </div>

                <div className="text-center mt-10 md:mt-12">

                    <button className="w-full sm:w-auto px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition">

                        Explore All Templates →

                    </button>

                </div>

            </div>

        </section>
    );
}

export default Templates;