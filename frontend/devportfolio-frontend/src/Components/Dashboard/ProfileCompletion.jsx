

function ProfileCompletion({ dashboard }) {

    const percentage = dashboard?.profileCompletion || 0;

    const tasks = dashboard?.pendingTasks || [];

    return (

        <section className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">

            <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Profile Completion
            </h2>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">

                <div
                    className="w-32 h-32 rounded-full flex items-center justify-center"
                    style={{
                        background: `conic-gradient(
                            #4F46E5 ${percentage * 3.6}deg,
                            #E5E7EB 0deg
                        )`
                    }}
                >

                    <div className="w-24 h-24 bg-white rounded-full flex flex-col items-center justify-center">

                        <h3 className="text-3xl font-bold">
                            {percentage}%
                        </h3>

                        <p className="text-gray-500 text-sm">
                            Complete
                        </p>

                    </div>

                </div>

                <div className="flex-1">

                    <p className="text-gray-600 mb-4">
                        Keep going! Your portfolio is looking great.
                    </p>

                    <div className="space-y-3">

                        {tasks.length > 0 ? (
                            tasks.map((task) => (
                                <div key={task}>
                                    {task}
                                </div>
                            ))
                        ) : (
                            <p className="text-green-600 font-medium">
                                🎉 Your profile is complete!
                            </p>
                        )}

                    </div>

                </div>

            </div>

        </section>

    );
}

export default ProfileCompletion;