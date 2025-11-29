"use client"

import React from 'react'
import { FingerprintPattern, ScanFace  } from 'lucide-react';
import { useRouter } from "next/navigation";

type Props = {
    type: "login" | "register",
}

export function FingerPrint({type} : Props) {

    const router = useRouter();

    return(
        <div className="mt-6 grid grid-cols-2 gap-3">
            <button 
            onClick={() => router.push(`/auth?action=passkey${type}`)} type="button" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-300" disabled>
                <FingerprintPattern />
            </button>
            
            <button onClick={() => router.push(`/auth?action=passkey${type}`)} type="button" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500  disabled:bg-gray-300" disabled>
                <ScanFace  />
            </button>
        </div>
    )
}