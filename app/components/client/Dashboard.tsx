import React from 'react'
import { useUser } from '@libs/hooks/useContext'
import TransactionData from '@libs/utility/utils'

export function DashboardPage() {
    const { email } = useUser();

    return(
        <main>
            <h1>Dashboard</h1>
            <button onClick={() => TransactionData({email})}>
                Add Transaction
            </button>
        </main>
    )
}