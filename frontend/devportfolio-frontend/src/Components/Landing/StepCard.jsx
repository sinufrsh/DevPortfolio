function StepCard({ number, title, description, icon }) {
    return (
        <div className="flex flex-col sm:flex-row lg:flex-col items-center text-center sm:text-left lg:text-center gap-4 w-full">

            <div className="relative shrink-0">

                <div className="absolute -top-3 -left-3 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    {number}
                </div>

                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-3xl text-purple-600 border">
                    {icon}
                </div>

            </div>

            <div className="pt-1">

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {title}
                </h3>

                <p className="text-gray-600 leading-7 text-sm sm:text-base max-w-xs mx-auto sm:mx-0 lg:mx-auto">
                    {description}
                </p>

            </div>

        </div>
    );
}

export default StepCard;