const PasswordInput = ({ value, onChange, placeholder }) => {
    return (
        <input
            type="password"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="
                w-full px-4 py-3 rounded-2xl bg-white/5
                border border-white/10 text-white placeholder:text-white/25
                backdrop-blur-xl focus:outline-none
                focus:border-[#068177]
                focus:ring-2 focus:ring-[#068177]/20 transition-all"
        />
    );
};

export default PasswordInput;