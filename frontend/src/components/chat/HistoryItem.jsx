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
                {conversation.complaintText}
            </p>

            <div className="text-xs text-slate-400 space-y-1">
                <p>
                    Category: {conversation.category}
                </p>

                <p>
                    Department: {conversation.department}
                </p>

                <p>
                    Urgency: {conversation.urgency}
                </p>
            </div>
        </div>
    );
};

export default HistoryItem;