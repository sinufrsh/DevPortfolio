import TestimonialCard from "./TestimonialCard";

function Testimonials() {

    const testimonials = [
        {
            id: 1,
            name: "Rahul Sharma",
            role: "Software Engineer",
            review: "DevPortfolio helped me create a professional portfolio in just minutes. I received more interview calls after sharing my portfolio."
        },
        {
            id: 2,
            name: "Priya Verma",
            role: "Frontend Developer",
            review: "The live preview and customization options are amazing. The interface is clean and easy to use."
        },
        {
            id: 3,
            name: "Ankit Patel",
            role: "Java Developer",
            review: "Beautiful templates and a simple setup process. Highly recommended for every developer."
        }
    ];

    return (
        <section className="py-16 md:py-20">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-10 md:mb-12">

                    <h3 className="text-indigo-600 uppercase font-semibold tracking-wider">
                        Testimonials
                    </h3>

                    <h2 className="text-3xl sm:text-4xl font-bold mt-3">
                        What Developers Say
                    </h2>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                    {testimonials.map((testimonial) => (

                        <TestimonialCard
                            key={testimonial.id}
                            name={testimonial.name}
                            role={testimonial.role}
                            review={testimonial.review}
                        />

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Testimonials;