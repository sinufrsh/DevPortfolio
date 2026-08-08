function FeatureCard({ icon, title, description }) {

    return (

        <div className="
            bg-white
            rounded-2xl
            shadow-md
            p-6 sm:p-8
            hover:shadow-xl
            transition
            duration-300
            h-full
        ">

            <div className="text-3xl sm:text-4xl text-indigo-600 mb-5">
                {icon}
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">
                {title}
            </h3>

            <p className="text-gray-600 leading-7 text-sm sm:text-base">
                {description}
            </p>

        </div>

    );
}

export default FeatureCard;