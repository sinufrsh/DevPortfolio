import Skeleton from "react-loading-skeleton";

function DashboardSkeleton() {
    return (
        <div className="space-y-8">

            <Skeleton height={40} width={250} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                    <div
                        key={item}
                        className="bg-white rounded-xl shadow p-6"
                    >
                        <Skeleton height={25} width={120} />
                        <Skeleton
                            height={45}
                            width={70}
                            className="mt-4"
                        />
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-xl shadow p-6">
                <Skeleton height={30} width={180} />

                <Skeleton
                    height={20}
                    count={5}
                    className="mt-5"
                />
            </div>

        </div>
    );
}

export default DashboardSkeleton;