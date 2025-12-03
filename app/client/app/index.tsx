"use client"
import React from 'react'

import { useSearchParams } from 'next/navigation'
import {
    DashboardPage
} from '@components'

export default function ClientIndexPage() {
    
    const params = useSearchParams();
    const tab = params.get("tab");

    return tab == "dashboard" ? <DashboardPage /> : 
    tab == "transaction" ? <h1>Transaction</h1> :
    <h1>{tab}</h1>
}