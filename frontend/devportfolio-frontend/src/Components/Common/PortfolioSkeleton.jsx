import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function PortfolioSkeleton() {
    return (
        <div className="bg-[#0B1120] min-h-screen">

            <div className="flex justify-between items-center px-8 py-6">
                <Skeleton width={150} height={35} />
                <Skeleton width={220} height={35} />
            </div>

            <div className="max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-10 items-center">

                <div>
                    <Skeleton width={250} height={50} />
                    <Skeleton width={400} height={25} className="mt-4" />
                    <Skeleton count={3} className="mt-6" />

                    <div className="flex gap-4 mt-8">
                        <Skeleton width={150} height={45} />
                        <Skeleton width={150} height={45} />
                    </div>
                </div>

                <div className="flex justify-center">
                    <Skeleton
                        circle
                        width={280}
                        height={280}
                    />
                </div>

            </div>


            <div className="max-w-6xl mx-auto px-8 py-10">
                <Skeleton width={180} height={40} />

                <div className="flex flex-wrap gap-4 mt-8">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <Skeleton
                            key={item}
                            width={120}
                            height={40}
                        />
                    ))}
                </div>
            </div>


            <div className="max-w-6xl mx-auto px-8 py-10">
                <Skeleton width={180} height={40} />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="rounded-xl overflow-hidden"
                        >
                            <Skeleton height={180} />
                            <Skeleton height={30} className="mt-4" />
                            <Skeleton count={3} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default PortfolioSkeleton;