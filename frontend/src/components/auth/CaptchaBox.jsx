const CaptchaBox = ({ captcha }) => {
    return (
        <div className="
            bg-[#e5dec2] border border-gray-200
            px-4 py-3 rounded-xl
            text-lg tracking-[8px]
            font-semibold text-center
            text-[#1A3D63]
            select-none
            shadow-sm
        ">
            {captcha}
        </div>
    );
};

export default CaptchaBox;