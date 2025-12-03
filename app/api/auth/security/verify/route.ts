import { NextResponse } from "next/server";
import { verifyRegistrationResponse } from "@simplewebauthn/server";

import { cookies } from "next/headers";

import { connectDB } from "@libs/db";
import {User} from "@libs/models";

export async function POST(req: Request) {
    const registrationJSON = await req.json();
    if(!registrationJSON) {
        return NextResponse.json({
            message: "Registration field empty",
            status: 401
        }, {status: 401})
    }

    const cookie = await cookies();
    const regInfo = JSON.parse(cookie.get("regInfo")?.value)
    if(!regInfo) {
        return NextResponse.json({
            message: "regInfo field empty",
            status: 401
        }, {status: 401})
    }

    try {
        const verification = await verifyRegistrationResponse({
            response: registrationJSON,
            expectedChallenge: regInfo.challenge,
            expectedOrigin: "http://localhost:3000",
            expectedRPID: "localhost"
        })
        
        if(verification.verified) {
            await connectDB();
            // @ts-ignore
            const updatedUser = await User.findOneAndUpdate({ email:  regInfo.email },
                {
                    credentialID: Buffer.from(verification.registrationInfo.credential.id),
                    credentialPublicKey: Buffer.from(verification.registrationInfo.credential.publicKey),
                    counter: verification.registrationInfo.credential.counter,
                    deviceType: verification.registrationInfo.credentialDeviceType,
                    backedUp: verification.registrationInfo.credentialBackedUp,
                    transports: registrationJSON.response.transports
                },
                { new: true }
            );

            const res = NextResponse.json({
                message: "verified",
                status: 201,
                verified: verification.verified,
                user: updatedUser

            }, {status: 201})

            res.cookies.delete("regInfo")

            return res;
        }else {
            throw new Error("Verification Failed")
        }

    }catch(err) {
        return NextResponse.json({
            message: err instanceof Error ? err.message : "Unexpected Error",
            status: 501
        }, {status: 501})
    }
}