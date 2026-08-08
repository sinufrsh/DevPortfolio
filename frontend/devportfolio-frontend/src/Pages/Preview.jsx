import { useEffect, useState } from "react";
import About from "../Components/Portfolio/About";
import Certification from "../Components/Portfolio/Cerification";
import Contact from "../Components/Portfolio/Contact";
import Educations from "../Components/Portfolio/Educations";
import Experiences from "../Components/Portfolio/Experiences";
import Footer from "../Components/Portfolio/Footer";
import Hero from "../Components/Portfolio/Hero";
import Navbar from "../Components/Portfolio/NavBar";
import Projects from "../Components/Portfolio/Projects";
import Skills from "../Components/Portfolio/Skills";


function Preview() {

    const [portfolio, setPortfolio] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isDark, setIsDark] = useState(true);

    const fetchPreview = async () => {

        const token = localStorage.getItem("token");

        try {

            const response = await fetch(
                "http://localhost:8080/api/portfolio/preview",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message);
            }

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

        return (

            <div className="min-h-screen flex justify-center items-center">

                Loading Portfolio...

            </div>

        );

    }

    if (!portfolio) {

        return (

            <div>

                <h2>No portfolio found</h2>

                <p>Create your portfolio first.</p>

            </div>

        );

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

export default Preview;