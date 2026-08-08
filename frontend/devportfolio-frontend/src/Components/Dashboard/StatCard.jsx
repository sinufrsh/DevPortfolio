function StatCard({ title, value, icon, color }) {
    return (
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-5 flex items-center justify-between gap-3">

            <div>

                <p className="text-gray-500 text-sm">
                    {title}
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                    {value}
                </h2>

            </div>

            <div className={`${color} p-4 rounded-xl text-white text-2xl`}>
                {icon}
            </div>

        </div>
    );
}

export default StatCard;