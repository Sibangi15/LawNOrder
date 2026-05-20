const ChatMessage = ({ message }) => {
    const isUser = message.sender === "user";

    return (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
            <div
                className={`
                    max-w-[75%]
                    px-5 py-4
                    rounded-3xl
                    text-sm leading-relaxed
                    border shadow-xl
                    backdrop-blur-xl

                    ${isUser
                        ? `
                            bg-[#1A3D63]/80
                            border-[#4A7FA7]/30
                            text-white
                        `
                        : `
                            bg-black/30
                            border-white/10
                            text-white/90
                        `
                    }
                `}
            >
                {message.text}
            </div>
        </div>
    );
};

export default ChatMessage;