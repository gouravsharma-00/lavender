import React, { Suspense } from 'react'
import { Sidebar } from '@components'

import {
    LoadingOverlay
} from '@components'

export default function ClientLayout({children} : {children: React.ReactNode}) {
    return(
        <Suspense fallback={<LoadingOverlay show={true} />} >
            <div className="min-h-screen bg-background">
                <Sidebar />
                <main className="ml-64 min-h-screen">
                    <div className="container max-w-6xl p-8">
                    {children}
                    </div>
                </main>
            </div>
        </Suspense>
    )
}