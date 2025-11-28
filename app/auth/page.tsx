import React, { Suspense } from 'react'
import AuthIndex from '.'
import {
    LoadingOverlay
} from '@components'

export default function AuthPage() {
    return(
        <Suspense fallback={<LoadingOverlay show={true}/>}>
            <AuthIndex />
        </Suspense>
    )
}