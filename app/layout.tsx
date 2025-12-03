import React from 'react'
import "./globals.css";
import { UserProvider } from '@libs/hooks/useContext';

export default function RootLayout({children} : {children: React.ReactNode}) {
    return(
        <html lang='en'>
            <head>
                <link rel='icon' href='/icons/lavender.png' />
                <title>Lavender | Those who want to win</title>
            </head>
            <body>
                <UserProvider>
                    {children}
                </UserProvider>
            </body>
        </html>
    )
}