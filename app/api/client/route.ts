import { NextResponse } from "next/server";
import { connectDB } from "@libs/db";
import { User } from '@libs/model'

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if(!email) {
        return NextResponse.json({
            message: "Email required",
            status: 401
        }, { status: 401 })
    }
    try {
        await connectDB()

        // @ts-ignore
        const user = await User.findOne({email})
        if(!user) {
            throw new Error("User does not Exist")
        }

        return NextResponse.json({
            message: "User found",
            status: 201,
            user: {
                transactions: user.transactions, 
                totalBalance: user.totalBalance,
                accountHealth: user.accountHealth
            },
        }, { status: 201 })

    }catch(err) {
        return NextResponse.json({
            message: err instanceof Error ? err.message : "Unexpected Error",
            status : 501 
        }, { status: 501 })
    }

}

export async function POST(req: Request) {
    const { email, transaction } = await req.json();
    if(!email || !transaction) {
        return NextResponse.json({
            message: "Required fields",
            status: 401
        }, { status: 401 })
    }

    try {
        await connectDB()

        // @ts-ignore
        const user = await User.findOne({email})
        if(!user) {
            throw new Error("User does not Exist")
        }

        user.transactions.push(transaction);
        user.totalBalance += transaction.type == "income" ? transaction.amount : -transaction.amount

        await user.save();

        return NextResponse.json({
            message: "Transaction added Successful",
            status: 201
        }, { status: 201 })

    }catch(err) {
        return NextResponse.json({
            message: err instanceof Error ? err.message : "Unexpected Error",
            status: 501
        }, { status: 501 })
    }

}

export async function DELETE(req: Request) {
    const {email, id} = await req.json();
    if(!email || !id) {
        return NextResponse.json({
            message: "All fields required",
            status: 401
        }, { status: 401 })
    }

    try {
        await connectDB()

        // @ts-ignore
        const user = await User.findOne({email})
        if(!user) {
            throw new Error("User does not exist")
        }

        const transactionIndex = user.transactions.findIndex((transaction) => transaction._id.toString() == id)
        const deleteTransaction = user.transactions.splice(transactionIndex, 1)[0];
        
        user.totalBalance += deleteTransaction.type == "income" ? -deleteTransaction.amount : deleteTransaction.amount
        await user.save();

        return NextResponse.json({
            message: "User Updated",
            status: 201,
            user: {
                transactions: user.transactions, 
                totalBalance: user.totalBalance,
                accountHealth: user.accountHealth
            },
        }, { status: 201 })


    }catch(err) {
        return NextResponse.json({
            message: err instanceof Error ? err.message : "Unexpected Error",
            status: 501
        }, { status: 501 })
    }
}