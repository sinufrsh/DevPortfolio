import { useEffect, useState } from "react";
import About from "../Components/Portfolio/About";
import Certification from "../Components/Portfolio/Cerification";
import Contact from "../Components/Portfolio/Contact";
import Educations from "../Components/Portfolio/Educations";
import Experiences from "../Components/Portfolio/Experiences";
import Footer from "../Components/Portfolio/Footer";
import Hero from "../Components/Portfolio/Hero";
import Navbar from "../Components/Portfolio/Navbar";
import Projects from "../Components/Portfolio/Projects";
import Skills from "../Components/Portfolio/Skills";
import { useParams } from "react-router-dom";
import PortFolioNotFound from "./PortFolioNotFound";
import PortfolioSkeleton from "../Components/Common/PortfolioSkeleton";

function PublicPortfolio() {

    const { username } = useParams();

    const [portfolio, setPortfolio] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isDark, setIsDark] = useState(true);
    const [notFound, setNotFound] = useState(false);

    const fetchPreview = async () => {


        try {

            const response = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/api/public/${username}`,

            );

            const result = await response.json();

            if (!result.success) {
                setNotFound(true);
                return;
            }

            setPortfolio(result.data);

            setPortfolio(result.data);

        } catch (err) {

            alert(err.message);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {
        fetchPreview();
    }, []);

    if (loading) {
        return <PortfolioSkeleton />;
    }

    if (notFound) {
        return <PortFolioNotFound />;
    }


    console.log("Portfolio:", portfolio);
    console.log("Loading:", loading);



    return (
        <div className={isDark ? "bg-[#0B1120]" : "bg-white"}>
            <Navbar portfolio={portfolio}
                isDark={isDark}
                setIsDark={setIsDark} />
            <Hero portfolio={portfolio} isDark={isDark} />
            <About portfolio={portfolio} isDark={isDark} />
            <Skills portfolio={portfolio} isDark={isDark} />
            <Projects portfolio={portfolio} isDark={isDark} />
            <Experiences portfolio={portfolio} isDark={isDark} />
            <Educations portfolio={portfolio} isDark={isDark} />
            <Certification portfolio={portfolio} isDark={isDark} />
            <Contact portfolio={portfolio} isDark={isDark} />
            <Footer portfolio={portfolio} isDark={isDark} />
        </div>
    );

}

export default PublicPortfolio;