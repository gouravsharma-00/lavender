'use client'
import { LoadingOverlay } from '@components'
import React, {
    useEffect, useState
} from 'react'

export default function ClientPage() {
    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        const userData = localStorage.getItem("user")
        if(userData) {
            setUser(JSON.parse(userData))
        }
    }, [])

    return(
        user ?  
        <>
            <p>Welcome {user.email}</p>
            <a href='/auth?action=passkeyregister' className='text-green-400'>Add a passkey to enhance security</a>
        </>
        
        : <LoadingOverlay show={true} />
    )
}