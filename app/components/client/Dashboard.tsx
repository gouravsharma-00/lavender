import React from 'react'
import { useUser } from '@libs/hooks/useContext'

export function DashboardPage() {
    const { email } = useUser();

    return(
        <h1>Hello {email}</h1>
    )
}