"use client"
import React from 'react'

import { useSearchParams } from 'next/navigation'
import {
    DashboardPage,
    TransactionPage
} from '@components'
import { useEffect } from 'react'
import { useFinance } from '@libs/hooks/useFinance'
import { useUser } from '@libs/hooks/useContext'

export default function ClientIndexPage() {
    
    const params = useSearchParams();
    const tab = params.get("tab");
    const { email } = useUser();
    const {
            setTransactions,
            setTotalBalance,
            setAccountHealth
        } = useFinance();

    useEffect(() => {
        async function run() {
                
                const res = await fetch(`/api/client?email=${email}`, {
                    method: "GET",
                    headers: {"Content-Type" : "application/json"},
                })
            
                const data = await res.json();
            
                console.log(data)
            
                setTransactions(data.user.transactions)
                setTotalBalance(data.user.totalBalance)
                setAccountHealth(data.user.accountHealth)
        }

        run()
    }, [])

    return tab == "dashboard" ? <DashboardPage /> : 
    tab == "transactions" ? <TransactionPage /> :
    <h1>{tab}</h1>
}