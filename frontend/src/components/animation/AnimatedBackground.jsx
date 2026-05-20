const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">

            {/* Base gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f172a_0%,#050816_70%)]" />

            {/* Noise mesh layer */}
            <div className="noise-layer" />

            {/* Glow overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-[#1A3D63]/30 via-transparent to-[#068177]/20" />

            {/* Vignette */}
            <div className="absolute inset-0 bg-black/30" />
        </div>
    );
};

export default AnimatedBackground;