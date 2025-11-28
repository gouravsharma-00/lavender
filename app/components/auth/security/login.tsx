"use client"

import React, { useState } from 'react'
import { FingerprintPattern, ScanFace  } from 'lucide-react';
import {LoadingOverlay} from '@components';
import { useRouter } from "next/navigation";

import { startAuthentication } from '@simplewebauthn/browser';

export const PassKeyLogin = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        setLoading(true);
        e.preventDefault();

        
        const res = await fetch(`/api/auth/security/login/init`, {
            method: "POST",
            body: JSON.stringify({email})
        })
        const options = await res.json();

        if(options.status != 201) {
            setError(options.message)
        }
        else {
            
            const authJSON = await startAuthentication(options.options)

            const verifyResponse = await fetch(`/api/auth/security/login/verify`, {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(authJSON)
            })

            const verifyData = await verifyResponse.json()
            if(verifyData.status != 201) {
                setError(verifyData.message)
            }
            else {
                // login passkey success

                localStorage.setItem("user", JSON.stringify(verifyData.user));
                router.replace('/client')
            }
        }
        

        setLoading(false);

    }

    return(
        <>
            <LoadingOverlay show={loading} />

            <div className="min-h-screen flex items-center justify-center bg-white">
            <div className=" p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">Good decision</h1>
                    <p className="text-gray-600">Add a passkey to enchance security</p>
                </div>
                
                <form className="space-y-6" onSubmit={handleLogin}>
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
                            placeholder="your@email.com"
                            />
                    </div>

                    <div className="mt-6">
                        
                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                <FingerprintPattern />
                            </button>
                            
                            <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                <ScanFace  />
                            </button>
                        </div>
                        
                        
                    </div>

                </form>

                {/* error */}
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-red-500 mt-1">{error}</span>
                </div>
            </div>
            </div>
        </>
    )
}