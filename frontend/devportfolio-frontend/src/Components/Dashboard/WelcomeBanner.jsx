
function WelcomeBanner({ portfolio }) {



    return (
        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Welcome back, {portfolio?.username || "Developer"}! 👋
            </h1>

            <p className="text-gray-500 mt-2">
                Let's build something amazing today.
            </p>

        </div>
    );
}

export default WelcomeBanner;