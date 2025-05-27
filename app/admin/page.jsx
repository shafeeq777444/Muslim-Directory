"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Lock, User, Shield } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const AdminLoginPage = () => {
    const roter=useRouter()
    const [form, setForm] = useState({ name: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setForm((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulate loading for better UX
        await new Promise(resolve => setTimeout(resolve, 800));
        
        if (form.name.toLowerCase() === "adminisd" && form.password === "100200300") {
            const expTime = Date.now() + 1 * 24 * 60 * 60 * 1000;
            const isAuth = { status: true, expTime };
            const loginStatus = JSON.stringify(isAuth);
            localStorage.setItem("isAuth",loginStatus)
            roter.push('/admin/business')
            toast.success("Admin logged in successfully");
        } else {
            toast.error("Wrong credentials, please enter correct details");
        }
        
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-foreground to-foregroundBold flex items-center justify-center p-5">
            <div className="bg-white rounded-2xl shadow-2xl p-12 w-full max-w-md border border-blue-200">
                
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
                        <img src="/logos/whiteLogo.svg" className="w-10 h-10" alt="muslim directory logo" />
                    </div>
                    <h1 className="text-3xl font-bold text-blue-900 mb-2">Admin Portal</h1>
                    <p className="text-blue-700">Sign in to Muslim directory  dashboard</p>
                </div>

                {/* Form */}
                <div className="flex flex-col gap-6">
                    
                    {/* Admin Name Field */}
                    <div>
                        <label className="block text-blue-900 text-sm font-semibold mb-2">
                            Admin Name
                        </label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-700 w-5 h-5" />
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter admin username"
                                required
                                className="w-full pl-12 pr-4 py-4 border-2 border-blue-200 rounded-xl text-blue-900 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 outline-none"
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-blue-900 text-sm font-semibold mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-700 w-5 h-5" />
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Enter password"
                                required
                                className="w-full pl-12 pr-12 py-4 border-2 border-blue-200 rounded-xl text-blue-900 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 outline-none"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-700 hover:text-blue-500 transition-colors"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={handleSubmit}
                        disabled={isLoading || !form.name || !form.password}
                        className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                            isLoading || !form.name || !form.password
                                ? 'bg-blue-200 cursor-not-allowed'
                                : 'bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 hover:-translate-y-1 hover:shadow-lg active:translate-y-0'
                        }`}
                    >
                        {isLoading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Signing in...
                            </>
                        ) : (
                            'Sign In'
                        )}
                    </button>
                </div>

                {/* Footer */}
                <div className="text-center mt-8 pt-6 border-t border-blue-100">
                    <p className="text-blue-700 text-sm">
                        Secure admin access 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminLoginPage;