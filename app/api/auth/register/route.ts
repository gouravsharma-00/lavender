import { NextResponse } from "next/server";
import { connectDB } from "@libs/db";
import User from "@libs/models/User";

export async function POST(req: Request) {
    const {email, password} = await req.json();

    if(!email || !password) {
        return NextResponse.json({
                message: "All Fields are required", 
                status: 401
        }, {status: 401});
    }

    try {
        await connectDB();

        // @ts-ignore
        const exist = await User.findOne({email});

        if(exist) {
            return NextResponse.json({
                message: "Email Already in Use",
                status : 401
            }, {status: 401});
        }

        const user = await User.create({email, password});
        return NextResponse.json({
            message: "User Created Successfully",
            status: 201,
            user: user
        }, {status: 201});
        

    } catch(err) {
        return NextResponse.json({
            message: err instanceof Error ? err.message : "Unexpected Error", 
            status: 501
        }, {status: 501});
    }
}