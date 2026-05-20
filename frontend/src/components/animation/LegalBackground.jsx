const LegalBackground = () => {
    return (
        <div className="fixed inset-0 overflow-hidden -z-10 bg-[#050816]">

            {/* Base gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#12355b_0%,#050816_60%)]" />

            {/* Moving grid */}
            <div className="legal-grid" />

            {/* Blueprint circles */}
            <div className="legal-circles" />

            {/* Scanning beam */}
            <div className="scan-line" />

            {/* Noise texture */}
            <div className="noise-overlay" />

            {/* vignette */}
            <div className="absolute inset-0 bg-black/30" />
        </div>
    );
};

export default LegalBackground;