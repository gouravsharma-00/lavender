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
        user ?  <p>Welcome {user.email}</p>: <LoadingOverlay show={true} />
    )
}