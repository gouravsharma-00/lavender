"use client"
import React from 'react'

import { useSearchParams } from 'next/navigation'

export default function ClientIndexPage() {
    
    const params = useSearchParams();
    const tab = params.get("tab");

    return tab == "dashboard" ? <h1>Dashboard</h1> : 
    tab == "transaction" ? <h1>Transaction</h1> :
    <h1>{tab}</h1>
}