import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API from '../api/axios'
import { useAuth } from '../context/AuthContext'
import AnimatedBackground from '../components/animation/AnimatedBackground'

const LoginPage = () => {
    const navigate = useNavigate()

    const { login } = useAuth()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const res = await API.post('/auth/login', {
                username,
                password,
            })

            login(res.data)

            navigate('/chat')
        } catch (err) {
            alert(err.response?.data?.message || 'Login failed')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4 overflow-hidden">

            <AnimatedBackground />

            <div className="relative z-10 w-full max-w-md">

                {/* Card */}
                <div
                    className="
                    bg-black/30
                    backdrop-blur-2xl
                    border border-white/10
                    rounded-3xl p-8
                    shadow-[0_0_60px_rgba(0,0,0,0.45)]
                    relative overflow-hidden
                "
                >

                    {/* subtle glow */}
                    <div
                        className="
                        absolute inset-0
                        bg-linear-to-br
                        from-[#1A3D63]/20
                        via-transparent
                        to-[#068177]/10
                        pointer-events-none
                    "
                    />

                    {/* Header */}
                    <div className="relative text-center mb-8">
                        <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-3">
                            Secure Access
                        </p>

                        <h1 className="text-4xl font-semibold text-[#e5dec2] tracking-tight">
                            Welcome Back
                        </h1>

                        <p className="text-sm text-white/40 mt-3 leading-relaxed">
                            Login to continue accessing your legal assistance dashboard
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="relative space-y-5">

                        {/* Username */}
                        <div>
                            <label className="text-sm text-white/50">
                                Anonymous Username
                            </label>

                            <input
                                type="text"
                                placeholder="Generated Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="
                                    w-full mt-2 px-4 py-3

                                    rounded-2xl

                                    bg-white/5
                                    border border-white/10

                                    text-white
                                    placeholder:text-white/25

                                    backdrop-blur-xl

                                    focus:outline-none
                                    focus:border-[#4A7FA7]
                                    focus:ring-2 focus:ring-[#4A7FA7]/20

                                    transition-all
                                "
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="text-sm text-white/50">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="
                                    w-full mt-2 px-4 py-3

                                    rounded-2xl

                                    bg-white/5
                                    border border-white/10

                                    text-white
                                    placeholder:text-white/25

                                    backdrop-blur-xl

                                    focus:outline-none
                                    focus:border-[#068177]
                                    focus:ring-2 focus:ring-[#068177]/20

                                    transition-all
                                "
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="
                                w-full py-3 rounded-2xl

                                bg-[#1A3D63]
                                hover:bg-[#244d79]

                                text-white font-medium

                                border border-white/10

                                shadow-xl

                                transition-all duration-300
                            "
                        >
                            Login
                        </button>

                        {/* Footer */}
                        <div className="pt-3 space-y-2 text-center">

                            <p className="text-sm text-white/40">
                                No account?{" "}
                                <Link
                                    to="/signup"
                                    className="text-[#e5dec2] hover:text-white transition"
                                >
                                    Sign Up
                                </Link>
                            </p>

                            <p className="text-sm text-white/40">
                                Return to{" "}
                                <Link
                                    to="/home"
                                    className="text-[#e5dec2] hover:text-white transition"
                                >
                                    Home
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage