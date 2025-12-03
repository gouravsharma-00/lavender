import { NextResponse } from "next/server";
import { connectDB } from "@libs/db";
import {User} from '@libs/models'

import { generateAuthenticationOptions } from "@simplewebauthn/server";

export async function POST(req: Request) {
    const {email} = await req.json();
    if(!email) {
        return NextResponse.json({
            message: "Email Field required",
            status: 401
        }, {status: 401})
    }

    try {
        await connectDB();
        
        // @ts-ignore
        const user = await User.findOne({email})
        if(!user) {
            throw new Error("User not found")
        }
        // console.log("DB stored credential:", user.credentialID);
        // console.log("Sending allowCredentials ID:", user.credentialID.toString("base64url"));

        const options = await generateAuthenticationOptions({
            rpID:   "localhost",
            allowCredentials: [
                {
                    id: user.credentialID.toString("base64url"),
                    // @ts-ignore
                    type: "public-key",
                    transports: user.transports ?? []
                }
            ]
        })

        const res =  NextResponse.json({
            message: "init success",
            options: options,
            status: 201
        }, {status: 201})

        res.cookies.set({
            name: "authInfo",
            value: JSON.stringify({
                userId: user.credentialID.toString("base64url"),
                email,
                challenge: options.challenge
            }),
            httpOnly: true,
            maxAge: 60 * 60 * 24, // 1 day
            secure: true,
            path: "/"
        })

        return res

    }catch(err) {
        return NextResponse.json({
            message: err instanceof Error? err.message : "Unexpected Error",
            status: 501
        }, {status: 501})
    }

}