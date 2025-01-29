import { NextResponse, NextRequest } from "next/server";
import { dbConnection } from "@/lib/dbConnection";
import userSchema from "@/modal/userModel";
import { Types, ObjectId } from "mongoose";
import bcrypt from "bcryptjs";

export const GET = async (response: Response) => {
  try {
    await dbConnection();

    const availableUsers = await userSchema.find();
    return new NextResponse(
      JSON.stringify({
        users: availableUsers, success: true
      }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ Error: error.message }), {
      status: 500,
    });
  }
};

//creating a user works the same as signup
export const POST = async (request: NextRequest) => {
  try {
    const { name, email, password, phoneNumber, secondName } =
      await request.json();
    //Connect to the database
    await dbConnection();
    const createdNewUser = new userSchema({
      name,
      email,
      password,
      phoneNumber,
      secondName,
    });
    await createdNewUser.save();
    return new NextResponse(
      JSON.stringify({ user: createdNewUser, success: true }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ Error: error.message }), {
      status: 500,
    });
  }
};


//Update user details
export const PATCH = async (request: NextRequest, response: NextResponse) => {
  try {
    const body = await request.json();
    const { searchParams } = new URL(request.url);
    const userId: string = searchParams.get("userId") || "";
    //Below we check if the actuall passed userid exists in the database an its actually valid
    if (!Types.ObjectId.isValid(userId)) {
      return new NextResponse(JSON.stringify({ message: "Invalid user id" }), {
        status: 401,
      });
    }
    if (!userId) {
      return new NextResponse(
        JSON.stringify({ message: "Please provide user id!" }),
        { status: 401 }
      );
    }

    let {password} = body;
    //await for database connection
    await dbConnection();

    if(password){
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        body.password = hash;
    }

    const foundUser = await userSchema.findByIdAndUpdate(userId, body,  {new: true});

    if (!foundUser)
      return new NextResponse(JSON.stringify({ message: "user not found" }), {
        status: 401,
      });

    return new NextResponse(JSON.stringify({updatedUser: foundUser, success: true}), {status: 200});
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ Error: error.message }), {
      status: 500,
    });
  }
};
