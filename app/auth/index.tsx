"use client"

import React from 'react'
import {
    RegisterScreen,
    LoginScreen,
    PassKeyRegister,
    PassKeyLogin

} from '@components'

import { useSearchParams } from 'next/navigation';

export default function AuthIndex() {
    const searchParams = useSearchParams();
    const action = searchParams.get('action');

    return(
        action == "register" ? <RegisterScreen />  : 
        action === "passkeyregister" ? <PassKeyRegister /> : 
        action === "passkeylogin" ? <PassKeyLogin /> :
        <LoginScreen />
    )
}