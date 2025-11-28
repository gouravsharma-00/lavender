import mongoose from "mongoose";

const URI = process.env.MONGODB_URI as string

if(!URI) {
    throw new Error("URI not found")
}

let cached = (global as any).mongoose || {conn: null, promise: null}

export async function connectDB() {
    
    if(cached.conn) {
        return cached.conn
    }

    if(!cached.promise) {
        cached.promise = mongoose.connect(URI, {
            bufferCommands: false
        }).then((mongoose) => mongoose);
    }

    cached.conn = await cached.promise;

    return cached.conn;
}