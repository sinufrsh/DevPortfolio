import Navbar from "../Components/Landing/Navbar";
import Hero from "../Components/Landing/Hero";
import Features from "../Components/Landing/Features";
import HowItWorks from "../Components/Landing/HowItWorks";
import Templates from "../Components/Landing/Templates";
import Testimonials from "../Components/Landing/Testimonials";
import CTA from "../Components/Landing/CTA";
import Footer from "../Components/Landing/Footer";

function LandingPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />
            <Templates />
            <Testimonials />
            <CTA />
            <Footer />


        </>
    )
}

export default LandingPage;