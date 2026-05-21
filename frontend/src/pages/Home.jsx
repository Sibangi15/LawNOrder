import { useNavigate } from "react-router-dom";
import LegalBackground from "../components/animation/LegalBackground";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen border-[#09b7b4]/20 text-slate-50">
            {/* Subtle background gradient */}
            <LegalBackground />

            {/* Minimal decorative line */}
            <div className="fixed top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-700 to-transparent opacity-30 pointer-events-none" />

            <div className="relative z-10">
                {/* Header Navigation */}
                <header className="border-b border-slate-800/50 backdrop-blur-sm">
                    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                        <h1 className="font-['Space_Grotesk'] text-3xl font-semibold tracking-[-0.02em] text-[#dabfba]">
                            Law&Order
                        </h1>
                        <button
                            onClick={() => navigate("/signup")}
                            className="text-sm px-4 py-2 text-slate-400 hover:text-slate-200 border border-slate-700/50 rounded hover:border-[#09b7b4] transition-all"
                        >
                            Sign Up
                        </button>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="min-h-[calc(100vh-80px)] flex items-center px-6 py-20">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-sm uppercase tracking-widest text-slate-300 mb-6">Your Legal Assistant</p>

                        <h2 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
                            AI-powered legal guidance for everyone
                        </h2>

                        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Understand your legal rights, and get instant AI-assisted support to file complaints through a simple and secure platform.
                        </p>

                        <button
                            onClick={() => navigate("/login")}
                            className="px-8 py-3 bg-[#bc9891] text-slate-950 font-medium rounded hover:bg-[#ac4b3e] transition-colors"
                        >
                            Log In to Explore
                        </button>
                    </div>
                </section>

                {/* Features Section */}
                <section className="px-6 py-24 border-t border-slate-800/50">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Feature 1 */}
                            <div>
                                <h3 className="text-sm font-medium tracking-widest text-slate-400 mb-3">ANONYMOUS</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Your identity stays protected with a privacy-first system designed to keep legal complaints secure and anonymous.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div>
                                <h3 className="text-sm font-medium tracking-widest text-slate-400 mb-3">AI-ASSISTED</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Describe your issue in simple language and receive AI-powered guidance on the type of legal case and possible next steps.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div>
                                <h3 className="text-sm font-medium tracking-widest text-slate-400 mb-3">TRACKABLE</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Access your complaint history anytime and keep track of previously submitted legal concerns from one dashboard.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-slate-800/50 px-6 py-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                            <div className="max-w-sm">
                                <p className="text-sm text-slate-400">
                                    An AI-powered legal assistance platform designed to provide secure, anonymous, and accessible guidance.
                                </p>
                            </div>
                            <button
                                onClick={() => navigate("/login")}
                                className="text-sm px-6 py-2 text-slate-100 border border-slate-600 rounded hover:border-[#09b7b4] hover:bg-slate-800/50 transition-all"
                            >
                                Get Legal Guidance
                            </button>
                        </div>
                        <div className="border-t border-slate-800/50 pt-8 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-center text-sm text-white/60">
                                © 2026 AI Legal Complaint Assistant. All Rights Reserved.
                                <i>
                                    {" "}Designed by{" "}
                                    <a href="https://sibangi-portfolio-website.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#ac4b3e] transition-colors">
                                        Sibangi Chakraborty
                                    </a>.
                                </i>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Home;