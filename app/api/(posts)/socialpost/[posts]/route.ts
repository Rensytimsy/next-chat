import dbConnection from "@/lib/db";
import Post from "@/lib/modals/posts";;
import Users from "@/lib/modals/user";
import { NextResponse } from "next/server";
import { Types, ObjectId } from "mongoose";


//This route will be used for updating the post that has been created and needs to be changed
export const PATCH = async(request: Request, context: {params: any}) => {
    try{
        //Since is updating a specific post this will need to take in the post id as a parameter
        const {content} = await request.json();
        const postId = context.params.posts;

        const {searchParams} = new URL(request.url);
        const userId =  searchParams.get('userId') || "";
        //Checks if the user id is a valid mongodb document id
        if(!Types.ObjectId.isValid(userId)){
            return new NextResponse(JSON.stringify({message: "Invalid post id"}), {status: 400});
        }
        //Checks if the postid is a valid mongodb document id
        if(!Types.ObjectId.isValid(postId)){
            return new NextResponse(JSON.stringify({message: "Invalid post id"}), {status: 400});
        }
        // if the ids are valid then we can connect to the database
        await dbConnection();
        const findUser = await Users.findById(new Types.ObjectId(userId));
        if(!findUser){
            return new NextResponse(JSON.stringify({message: "No user found!"}), {status : 400});
        }

        const findPost = await Post.findByIdAndUpdate({_id: postId,  user: userId}, {
            postId,
            content,
            userId
        }, {new: true});
        if(!findPost){
            return new NextResponse(JSON.stringify({message: "No post found!"}), {status: 400})
        }

        return new NextResponse(JSON.stringify({foundPost: findPost, message: "post updated successfully"}), {status: 200})
    }catch(error:any){
        throw new NextResponse(JSON.stringify({Error: error}), {status: 500});
    }
}