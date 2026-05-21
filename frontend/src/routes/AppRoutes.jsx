import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import ChatPage from '../pages/ChatPage'
import ProtectedRoute from '../components/auth/ProtectedRoute'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<SignupPage />} />

            <Route path="/login" element={<LoginPage />} />

            <Route
                path="/chat"
                element={
                    <ProtectedRoute>
                        <ChatPage />
                    </ProtectedRoute>
                }
            />
        </Routes>
    )
}

export default AppRoutes