import WelcomeBanner from "../../Components/Dashboard/WelcomeBanner";
import StatsGrid from "../../Components/Dashboard/StatsGrid";
import ProfileCompletion from "../../Components/Dashboard/ProfileCompletion";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import QuickActions from "../../Components/Dashboard/QuickActions";
import RecentActivity from "../../Components/Dashboard/RecentActivity";
import { useEffect, useState } from "react";
import PortfolioStatus from "../../Components/Dashboard/ProfileStatus";
import DashboardSkeleton from "../../Components/Common/DashboardSkeleton";

function DashboardHome() {

    const {
        portfolio,
        fetchPortfolio
    } = useOutletContext();
    const navigate = useNavigate();
    const [dashboard, setDashboard] = useState(null);


    const fetchDashboard = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await fetch(
                "http://localhost:8080/api/dashboard",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const result = await response.json();

            if (response.ok && result.success) {
                setDashboard(result.data);
            }

        } catch (error) {
            console.error(error);
        }

    };

    useEffect(() => {
        if (portfolio) {
            fetchDashboard();
        }
    }, [portfolio]);

    if (!dashboard) {
        return <DashboardSkeleton />;
    }
    if (!portfolio) {

        return (

            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10 text-center">

                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    Welcome 👋
                </h1>

                <p className="mt-4 text-gray-500">
                    You haven't created your portfolio yet.
                </p>

                <button
                    onClick={() => navigate("/dashboard/profile")}
                    className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
                >
                    Create Portfolio
                </button>

            </div>

        );

    }

    const handlePublish = async () => {

        const token = localStorage.getItem("token");

        const response = await fetch(
            "http://localhost:8080/api/portfolio/publish",
            {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const result = await response.json();

        if (result.success) {
            alert(result.message);

            fetchPortfolio();
            fetchDashboard();
        }
    };

    const handleUnpublish = async () => {

        const token = localStorage.getItem("token");

        const response = await fetch(
            "http://localhost:8080/api/portfolio/unpublish",
            {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const result = await response.json();

        if (result.success) {
            alert(result.message);

            fetchPortfolio();
            fetchDashboard();
        }
    };

    return (

        <div className="space-y-6">

            <WelcomeBanner portfolio={portfolio} />

            <StatsGrid dashboard={dashboard} />
            <div className="grid xl:grid-cols-3 gap-6">

                <div className="lg:col-span-2">
                    <ProfileCompletion dashboard={dashboard} />
                </div>

                <PortfolioStatus
                    portfolio={portfolio}
                    completion={dashboard.profileCompletion}
                    onPublish={handlePublish}
                    onUnpublish={handleUnpublish}
                />

            </div>

            <div className="mt-6">
                <QuickActions portfolio={portfolio} />
            </div>

            <RecentActivity
                activities={dashboard?.recentActivities || []}
            />
        </div>

    );

}

export default DashboardHome;