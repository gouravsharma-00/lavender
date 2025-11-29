import { NextResponse } from "next/server";
import { generateRegistrationOptions } from "@simplewebauthn/server";

export async function POST(req: Request) {
    const { email } = await req.json();
    if(!email) {
        return NextResponse.json({
            message: "Email is required",
            status: 401
        }, {status: 401})
    }

    try {
        const options = await generateRegistrationOptions({
            rpID:   "localhost",
            rpName: "lavender",
            userName: email
        })
        
        const res =  NextResponse.json({
            message: "init success",
            options: options,
            status: 201
        }, {status: 201})
        console.log(options)
        res.cookies.set({
            name: "regInfo",
            value: JSON.stringify({
                userId: options.user.id,
                email,
                challenge: options.challenge
            }),
            httpOnly: true,
            maxAge: 60 * 60 * 24, // 1 day
            secure: true,
            path: "/"
        })

        return res

    }catch (err) {
        return NextResponse.json({
            message: err instanceof Error ? err.message : "Unexpected Error",
            status: 501
        }, {status: 501})
    }

}