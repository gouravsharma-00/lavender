'use client'
import { LoadingOverlay } from '@components'
import React, {
    useEffect, useState
} from 'react'
import ClientIndex from '.'

export default function ClientPage() {
    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        const userData = localStorage.getItem("user")
        if(userData) {
            setUser(JSON.parse(userData))
        }
    }, [])

    return(
        user ? <ClientIndex user={user}/>
        
        : <LoadingOverlay show={true} />
    )
}