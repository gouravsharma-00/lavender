"use client"

import React from 'react'
import { useRouter } from "next/navigation";
import {FingerPrint} from '@components'

export default function ClientIndex({user}) {
    const router = useRouter();

    return(
        <>

            <div className="min-h-screen flex items-center justify-center bg-white">
            <div className=" p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">Lavender</h1>
                    <p className="text-gray-600">An AI based Finance Management software for "People Who Want to Win"</p>
                </div>
                
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            value={user.email}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-300"
                            placeholder="your@email.com" 
                            disabled/>
                    </div>
                    
                
                    
                    <div>
                        <button 
                            type="button" 
                            onClick={() => router.push(`/client/app?tab=dashboard`)}
                            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150">
                            Dashboard
                        </button>
                    </div>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">
                                {
                                    user.credentialID ? "Update Your PassKey" : "Add a PassKey" 
                                }
                            </span>
                        </div>
                    </div>
                    
                    <FingerPrint type={"register"} />
                    
                </div>
            </div>
            </div>
        </>
    )
}