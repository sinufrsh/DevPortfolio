import { FaArrowUp } from "react-icons/fa";

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (

        <footer className="bg-[#080D17] border-t border-slate-800 py-10">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    <p className="text-slate-400">

                        © {new Date().getFullYear()} Om Prakash Sharma.
                        All Rights Reserved.

                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-slate-300 hover:text-indigo-400 transition"
                    >

                        <FaArrowUp />

                        Back To Top

                    </button>

                </div>

            </div>

        </footer>

    );

}

export default Footer;