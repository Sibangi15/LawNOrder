import { useEffect, useState } from 'react'
import API from '../api/axios'
import CaptchaBox from '../components/auth/CaptchaBox'
import PasswordInput from '../components/auth/PasswordInput'
import AnimatedBackground from '../components/animation/AnimatedBackground'
import { generateCaptcha } from '../utils/captchaGenerator'
import { Link } from 'react-router-dom'

const SignupPage = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [captcha, setCaptcha] = useState('')
    const [captchaInput, setCaptchaInput] = useState('')
    const [generatedUsername, setGeneratedUsername] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setCaptcha(generateCaptcha())
    }, [])

    const handleSignup = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return
        }

        if (captcha !== captchaInput) {
            alert('Captcha incorrect')
            return
        }

        try {
            setLoading(true)

            const res = await API.post('/auth/signup', {
                password,
                confirmPassword,
            })

            setGeneratedUsername(res.data.anonymousId)
        } catch (err) {
            alert(err.response?.data?.message || 'Signup failed')
        } finally {
            setLoading(false)
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

                    {/* Glow Overlay */}
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
                            Identity Protection System
                        </p>

                        <h1 className="text-3xl font-semibold text-[#e5dec2] tracking-tight">
                            Create Account
                        </h1>

                        <p className="text-sm text-white/40 mt-3">
                            Secure and anonymous legal assistance access
                        </p>
                    </div>

                    {!generatedUsername ? (
                        <form onSubmit={handleSignup} className="relative space-y-5">

                            <PasswordInput
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />

                            <PasswordInput
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm Password"
                            />

                            <div className="space-y-3">
                                <CaptchaBox captcha={captcha} />

                                <input
                                    type="text"
                                    placeholder="Enter Captcha"
                                    value={captchaInput}
                                    onChange={(e) => setCaptchaInput(e.target.value)}
                                    className="
                                        w-full px-4 py-3
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
                                {loading ? 'Creating Account...' : 'Create Account'}
                            </button>

                            <div className="pt-2 space-y-2 text-center">

                                <p className="text-sm text-white/40">
                                    Already have an account?{" "}
                                    <Link
                                        to="/login"
                                        className="text-[#e5dec2] hover:text-white transition"
                                    >
                                        Login
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
                    ) : (
                        <div className="relative text-center space-y-6">

                            <div
                                className="
                                w-16 h-16 mx-auto rounded-full
                                bg-[#068177]/20
                                border border-[#068177]/30
                                flex items-center justify-center
                            "
                            >
                                <span className="text-2xl text-[#e5dec2]">
                                    ✓
                                </span>
                            </div>

                            <h2 className="text-2xl font-semibold text-[#e5dec2]">
                                Account Created
                            </h2>

                            <div
                                className="
                                p-5 rounded-2xl
                                bg-white/5
                                border border-white/10
                            "
                            >
                                <p className="text-sm text-white/40 mb-3">
                                    Your Anonymous Username
                                </p>

                                <h1 className="text-3xl font-bold tracking-wider text-[#79864b]">
                                    {generatedUsername}
                                </h1>
                            </div>

                            <p className="text-sm text-red-300/80 leading-relaxed">
                                Save this username carefully. It is required for future login access.
                            </p>

                            <Link
                                to="/login"
                                className="
                                    block w-full py-3 rounded-2xl
                                    bg-[#79864b]
                                    hover:bg-[#8b9958]
                                    text-white font-medium
                                    border border-white/10
                                    transition-all duration-300
                                "
                            >
                                Proceed to Login
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SignupPage