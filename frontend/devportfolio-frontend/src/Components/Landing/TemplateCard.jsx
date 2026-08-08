function TemplateCard({ image, title, description }) {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

            <img
                src={image}
                alt={title}
                className="w-full h-52 sm:h-56 object-cover"
            />

            <div className="p-5 sm:p-6">

                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-6">
                    {description}
                </p>

            </div>

        </div>
    );
}

export default TemplateCard;