import { NextResponse } from "next/server";
import { verifyAuthenticationResponse } from "@simplewebauthn/server";

import { cookies } from "next/headers";

import { connectDB } from "@libs/db";
import {User} from "@libs/models";

export async function POST(req: Request) {
    const authJSON = await req.json();
    if(!authJSON) {
        return NextResponse.json({
            message: "Registration field empty",
            status: 401
        }, {status: 401})
    }

    const cookie = await cookies();
    const authInfo = JSON.parse(cookie.get("authInfo")?.value)
    if(!authInfo) {
        return NextResponse.json({
            message: "authInfo field empty",
            status: 401
        }, {status: 401})
    }

    try {
        await connectDB();

        // @ts-ignore
        const user = await User.findOne({email: authInfo.email})

        if(!user || user.credentialID.toString("base64url") !== authJSON.id) {
            return NextResponse.json({
                message: "Invalid User",
                status: 401
            }, {status: 401})
        }

        const verification = await verifyAuthenticationResponse({
            response: authJSON,
            expectedChallenge: authInfo.challenge,
            expectedOrigin: "http://localhost:3000",
            expectedRPID: "localhost",
            // @ts-ignore
            authenticator: {
                credentialID: user.credentialID.toString("base64url"),
                credentialPublicKey: user.credentialPublicKey.toString("base64url"),
                counter: user.counter,
                transports: user.transports
            }
        })

        if(verification.verified) {
            // @ts-ignore
            const updatedUser = await User.findOneAndUpdate({email: user.email}, {
                counter : verification.authenticationInfo.newCounter
            }, { new: true })

            const res = NextResponse.json({
                message: "verified",
                status: 201,
                verified: verification.verified,
                user: updatedUser
                
            }, {status: 201})

            res.cookies.delete("authInfo")

            return res;
        }else {
            throw new Error("login using passkey Failed")
        }

    }catch(err) {
        return NextResponse.json({
            message: err instanceof Error ? err.message : "Unexpected Error",
            status: 501
        }, {status: 501})
    }
}