import { useEffect, useState } from "react";
import Sidebar from "../components/chat/Sidebar";
import ChatWindow from "../components/chat/ChatWindow";
import ChatInput from "../components/chat/ChatInput";
import LegalBackground from "../components/animation/LegalBackground";
import API from "../api/axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ChatPage = () => {
    const navigate = useNavigate();

    const { logout } = useAuth();

    const [messages, setMessages] = useState([]);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        fetchHistory();
    }, []);

    const fetchHistory = async () => {
        try {
            const res = await API.get("/complaints/history");
            setConversations(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleSend = async (text) => {
        const userMessage = {
            sender: 'user',
            text,
        }

        setMessages((prev) => [...prev, userMessage])

        try {
            const res = await API.post('/complaints', {
                complaintText: text,
            })

            const aiMessage = {
                sender: 'ai',
                text: `
Category: ${res.data.category}

Department: ${res.data.department}

Urgency: ${res.data.urgency}

Confidence Score: ${res.data.score}
`,
            }

            setMessages((prev) => [...prev, aiMessage])

            fetchHistory()
        } catch (err) {
            console.log(err)
        }
    }

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="h-screen flex text-white overflow-hidden relative">

            {/* Animated Background */}
            <LegalBackground />

            {/* Sidebar */}
            <Sidebar conversations={conversations} />

            {/* Main Content */}
            <div className="flex-1 flex flex-col relative z-10">

                {/* Header */}
                <div
                    className="
                    h-20 px-6
                    border-b border-white/10
                    bg-black/20 backdrop-blur-xl
                    flex items-center justify-between
                "
                >
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight text-[#e5dec2]">
                            AI Legal Complaint Assistant
                        </h1>

                        <p className="text-xs text-white/40 mt-1">
                            Secure legal assistance system
                        </p>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="
                            px-5 py-2 rounded-xl
                            bg-[#1A3D63]
                            hover:bg-[#244d79]
                            border border-white/10
                            transition-all duration-300
                            shadow-lg
                        "
                    >
                        Logout
                    </button>
                </div>

                {/* Chat Window */}
                <ChatWindow messages={messages} />

                {/* Chat Input */}
                <ChatInput onSend={handleSend} />
            </div>
        </div>
    );
};

export default ChatPage;