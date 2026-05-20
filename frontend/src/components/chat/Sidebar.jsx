import HistoryItem from "./HistoryItem";

const Sidebar = ({ conversations, onSelect }) => {
    return (
        <div
            className="
            w-80
            border-r border-white/10

            bg-black/25
            backdrop-blur-2xl

            flex flex-col
            relative z-10
        "
        >
            <div className="p-6 border-b border-white/10">
                <h2 className="text-xl font-semibold text-[#e5dec2]">
                    History
                </h2>

                <p className="text-sm text-white/40 mt-1">
                    Previous legal complaints
                </p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {Array.isArray(conversations) &&
                    conversations.map((conv) => (
                        <HistoryItem
                            key={conv.id}
                            conversation={conv}
                            onClick={() => onSelect?.(conv)}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Sidebar;