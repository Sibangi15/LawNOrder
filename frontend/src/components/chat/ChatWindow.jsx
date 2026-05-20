import ChatMessage from "./ChatMessage";

const ChatWindow = ({ messages }) => {
    return (
        <div
            className="
            flex-1 overflow-y-auto
            px-8 py-6
            space-y-5
            relative z-10
        "
        >
            {messages.map((msg, index) => (
                <ChatMessage key={index} message={msg} />
            ))}
        </div>
    );
};

export default ChatWindow;