import { NextResponse, NextRequest } from "next/server";
import dbConnection from "@/lib/db";
import userSchema from "@/lib/modals/user";
import { json } from "stream/consumers";

import mongoose, { Types, ObjectId } from "mongoose";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    // The code below ensures that we are connected to the database.
    await dbConnection();
    const foundUsers: any = await userSchema.find();
    return NextResponse.json(foundUsers, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message);
  }
}

// Below we are creating or registering users
export async function POST(request: Request) {
  try {
    //the request body will consist any data that will be passed by the client
    const requestBody = await request.json();
    //we make sure that we are connected to the database if not we run the connectdb instance to establish a connection to the database if ther was no connection.
    await dbConnection();
    //below we create a new instance of our userSchema data.
    const newUser = new userSchema(requestBody);
    //the above will create the users document in our database and the code below makes sure that the document is saved at the database.
    await newUser.save();
    //after all that has taken place we return our response.
    return NextResponse.json(
      { user: newUser, message: "user created" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}



// The function below deletes user document using the id of the document  passed
export async function DELETE(request: Request) {
  try {
    await dbConnection();
    //below code is to help with the setting of the request params
   const { searchParams } = new URL(request.url);
   const userid: string = searchParams.get("userid") || "";

   //Make sure that the user id is a valid one in mongodb
   if(!Types.ObjectId.isValid(userid)){
    return new NextResponse(JSON.stringify({message: "invalid user id, please provide a valid one"}), {status: 400});
   }

    const foundUser = await userSchema.findByIdAndDelete(userid);
    //Below is the error that a user gets if no such user or user name in the database.
    if(!foundUser){
      return new NextResponse(JSON.stringify({message: "Invalid username or userid, please confirm the details you have provided."}), {status: 400})
    }
    return NextResponse.json({message: "user successfully deleted" }, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}



//Below is a function that is used to update a user document in the database
export const PATCH = async (request: Request) => {
  try {
    //we need to connect to our database first before performing any crud operations
    await dbConnection();

    const requestBody = await request.json();
    // const userId = mongoose.Schema.Types.ObjectId;
    const { username, userId } = requestBody;

    //For debbuging this route i will console.log the username to see whether we are getting a username from the request data passed.
    console.log(username, userId);

    if (!username || !userId) {
      return new NextResponse(
        JSON.stringify({
          message:
            "User id and name are required!",
        }),
        { status: 404 }
      );
    }
    //Checking if the userId is a valid document id in the database.
    if (!Types.ObjectId.isValid(userId)) {
      return new NextResponse(JSON.stringify("Invalid user id!"), {
        status: 403,
      });
    }

    //Object id only refers to a type;
    const findUser = await userSchema.findOneAndUpdate(
      { _id: userId },
      { username: username },
      { new: true }
    );
    return new NextResponse(JSON.stringify({ user: findUser, message: "User was successfully updated!" }), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ Error: error.message }), {
      status: 500,
    });
  }
};
