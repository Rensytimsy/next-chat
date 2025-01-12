import { NextResponse, NextRequest } from "next/server";
import userSchema from "../../lib/modals/user";
import dbConnection from "../../lib/db"

// this function gets all users that are created to the database
export async function GET(req:NextRequest, res:NextResponse){
    try{
        // await connection to the database to take place.
        await dbConnection();
        //once connected to the  database we can find the users documents that exists in that document model.
        const foundUsers = await userSchema.find();
        return  NextResponse.json(foundUsers, {status: 200});
    }catch(error: any){
        return new NextResponse(error.message, {status: 500});
    }
}