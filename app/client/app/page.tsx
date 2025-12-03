import React, { Suspense } from 'react'
import ClientIndexPage from '.'
import {
    LoadingOverlay
} from '@components'

export default function ClientApp() {
    return(
        <Suspense fallback={<LoadingOverlay show={true} />} >
            <ClientIndexPage />
        </Suspense>
    )
}


