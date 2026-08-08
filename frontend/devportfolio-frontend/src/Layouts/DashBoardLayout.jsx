import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Dashboard/Sidebar";
import TopNavbar from "../Components/Dashboard/TopNavbar";
import { useEffect, useState } from "react";

function DashboardLayout() {

    const [portfolio, setPortfolio] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const fetchPortfolio = async () => {

        const token = localStorage.getItem("token");

        try {

            const response = await fetch(
                "http://localhost:8080/api/portfolio",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const result = await response.json();

            if (response.ok && result.success) {
                setPortfolio(result.data);
            }

        } catch (err) {

            console.log(err);

        }

    };

    useEffect(() => {
        fetchPortfolio();
    }, []);

    return (

        <div className="flex h-screen bg-gray-100">

            <Sidebar
                portfolio={portfolio}
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <div className="flex flex-1 flex-col">

                <TopNavbar
                    portfolio={portfolio}
                    onMenuClick={() => setIsSidebarOpen(true)}
                />

                <main className="flex-1 overflow-y-auto p-4 sm:p-6">
                    <Outlet
                        context={{
                            portfolio,
                            fetchPortfolio
                        }}
                    />
                </main>

            </div>

        </div>

    );
}

export default DashboardLayout;