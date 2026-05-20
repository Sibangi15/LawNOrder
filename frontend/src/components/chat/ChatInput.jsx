import { useState } from "react";

const ChatInput = ({ onSend }) => {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (!message.trim()) return;

        onSend(message);
        setMessage("");
    };

    return (
        <div
            className="
            p-5
            border-t border-white/10
            bg-black/20 backdrop-blur-xl
            flex gap-4
        "
        >
            <input
                type="text"
                placeholder="Describe your legal issue..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="
                    flex-1 px-5 py-4
                    rounded-2xl
                    bg-white/5
                    border border-white/10
                    text-white
                    placeholder:text-white/30
                    backdrop-blur-xl

                    focus:outline-none
                    focus:border-[#4A7FA7]
                    focus:ring-2 focus:ring-[#4A7FA7]/20

                    transition-all
                "
            />

            <button
                onClick={handleSend}
                className="
                    px-8 rounded-2xl
                    bg-[#068177]
                    hover:bg-[#079685]
                    text-white font-medium

                    border border-white/10
                    shadow-xl

                    transition-all duration-300
                "
            >
                Send
            </button>
        </div>
    );
};

export default ChatInput;