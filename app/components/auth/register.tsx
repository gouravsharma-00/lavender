"use client"
import React, { useState } from 'react'
import { FingerprintPattern, ScanFace  } from 'lucide-react';
import { LoadingOverlay } from '@components';
import { useRouter } from 'next/navigation';

export const RegisterScreen = () => {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        setLoading(true)
        e.preventDefault()

        const res = await fetch("/api/auth/register", {
            method: "POST",
            body: JSON.stringify({email, password})
        })

        const data = await res.json();

        setLoading(false);

        if(data.status != 201) {
            setError(data.message)
        }
        else  {
            localStorage.setItem("user", JSON.stringify(data.user));
            router.replace('/client')
        }
    }

    return(
        <>
            <LoadingOverlay show={loading} />
            <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">Welcome Winner</h1>
                    <p className="text-gray-600">Please enter your credentials to login</p>
                </div>
                
                <form className="space-y-6" onSubmit={handleRegister}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="your@email.com" />
                    </div>
                    
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            required 
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="••••••••" />
                    </div>
                    
                    
                    
                    <div>
                        <button 
                            type="submit" 
                            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150">
                            Sign up
                        </button>
                    </div>
                </form>

                {/* error */}
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-red-500 mt-1">{error}</span>
                </div>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or register with</span>
                        </div>
                    </div>
                    
                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <button type="button" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <FingerprintPattern />
                        </button>
                        
                        <button type="button" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <ScanFace  />
                        </button>
                    </div>
                    
                    <p className="mt-6 text-center text-sm text-gray-600">
                        Already have an account? 
                        <a href="/auth?action=login" className="font-medium text-blue-600 hover:text-blue-500">Sign in</a>
                    </p>
                </div>
            </div>
            </div>
        </>
    )
}