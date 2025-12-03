import { NextResponse } from "next/server";
import { connectDB } from "@libs/db";
import { User } from "@libs/model";

export async function POST(req: Request) {
    const {email, password} = await req.json()

    if(!email || !password) {
        return NextResponse.json({
                message: "All Fields are required", 
                status: 401
        }, {status: 401})
    }

    try {
        await connectDB()

        // @ts-ignore
        const exist = await User.findOne({email})

        if(!exist) {
            return NextResponse.json({
                message: "Email Does not Exist! Try Sign up",
                status : 401
            }, {status: 401})
        }

        if(exist.password !== password) {
            return NextResponse.json({
                message: "Invalid Credentials",
                status: 401
            }, {status: 401})
        }

        return NextResponse.json({
            message: "Credentials Verified Succusseful",
            status: 201,
            user: exist
        }, {status: 201})


    } catch(err) {
        return NextResponse.json({
                message: err instanceof Error ? err.message : "Unexpected Error", 
                status: 501
        }, {status: 501})
    }
}