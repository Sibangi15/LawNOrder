const HistoryItem = ({ conversation, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="
                p-4 rounded-2xl
                cursor-pointer

                bg-white/5
                border border-white/10

                hover:bg-white/10
                hover:border-[#4A7FA7]/40

                transition-all duration-300
            "
        >
            <p className="font-medium text-[#e5dec2] truncate">
                {conversation.title}
            </p>

            <p className="text-xs text-white/30 mt-2">
                View conversation
            </p>
        </div>
    );
};

export default HistoryItem;