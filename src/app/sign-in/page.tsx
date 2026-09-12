import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Lock, Mail } from "lucide-react";

export default function SignInPage() {
    return (
        <div className="min-h-screen flex bg-[#f8fafc]">
            {/* Left panel */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-sky-500 via-violet-500 to-purple-600 flex-col justify-between p-12 text-white">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <GraduationCap size={22} />
                    </div>
                    <span className="text-xl font-bold">SchooLama</span>
                </div>
                <div>
                    <h1 className="text-4xl font-bold leading-tight mb-4">
                        Manage your school <br />with confidence
                    </h1>
                    <p className="text-white/70 text-lg">
                        Streamline operations, track performance, and connect with your school community — all in one place.
                    </p>
                </div>
                <div className="flex gap-6 text-sm text-white/60">
                    <span>1,234 Students</span>
                    <span>124 Teachers</span>
                    <span>10 Grades</span>
                </div>
            </div>

            {/* Right panel */}
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    {/* Mobile logo */}
                    <div className="flex items-center gap-3 mb-8 lg:hidden">
                        <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-violet-600 rounded-xl flex items-center justify-center">
                            <GraduationCap size={22} className="text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900">SchooLama</span>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-1">Welcome back</h2>
                    <p className="text-gray-400 mb-8 text-sm">Sign in to your account to continue</p>

                    <form className="flex flex-col gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email address</label>
                            <div className="relative">
                                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="you@school.edu"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-violet-300 focus:border-violet-400 outline-none bg-white transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-1.5">
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <a href="#" className="text-xs text-violet-600 hover:underline">Forgot password?</a>
                            </div>
                            <div className="relative">
                                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-violet-300 focus:border-violet-400 outline-none bg-white transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mt-1">
                            <input id="remember" type="checkbox" className="w-4 h-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500" />
                            <label htmlFor="remember" className="text-sm text-gray-600">Keep me signed in</label>
                        </div>

                        <Link
                            href="/admin"
                            className="mt-2 w-full bg-gradient-to-r from-sky-500 to-violet-600 text-white py-3 rounded-xl text-sm font-semibold text-center hover:opacity-90 transition-opacity shadow-md shadow-violet-200"
                        >
                            Sign In
                        </Link>
                    </form>

                    <p className="text-center text-sm text-gray-400 mt-6">
                        Need access?{" "}
                        <a href="#" className="text-violet-600 font-medium hover:underline">Contact your administrator</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
