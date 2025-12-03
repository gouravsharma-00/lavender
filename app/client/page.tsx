"use client"

import { LoadingOverlay } from '@components'

import ClientIndex from '.'
import { useUser } from '@libs/hooks/useContext'

export default function ClientPage() {
    const { userId, email  } = useUser();

    return(
        userId ? <ClientIndex user={{userId, email}}/>
        
        : <LoadingOverlay show={true} />
    )
}