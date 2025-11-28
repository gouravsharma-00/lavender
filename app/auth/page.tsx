import React, { Suspense } from 'react'
import AuthIndex from '.'


export default function AuthPage() {
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <AuthIndex />
        </Suspense>
    )
}