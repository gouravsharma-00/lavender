import React, { Suspense } from 'react'
import AuthIndex from '.'
import { LoadingOverlay } from '@components'


export default function AuthPage() {
    <Suspense fallback={<LoadingOverlay show={true} />}>
        <AuthIndex />
    </Suspense>
}