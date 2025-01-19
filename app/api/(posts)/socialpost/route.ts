import dbConnection from "@/lib/db";
import Post from "@/lib/modals/posts";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { Types, ObjectId } from "mongoose";


export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
      const { searchParams } = new URL(req.url);
      const userId: string = searchParams.get('userId') || '';
  
      // Check if the passed user ID is valid
      if (!Types.ObjectId.isValid(userId)) {
        return new NextResponse(
          JSON.stringify({ message: 'Invalid userId!' }),
          { status: 400 }
        );
      }
  
      // Establish a connection to the database
      await dbConnection();
  
      // Find posts associated with the userId
      const availablePosts = await Post.find({ user: userId });
  
      // If no posts are found, notify the client
      if (!availablePosts || availablePosts.length === 0) {
        return new NextResponse(
          JSON.stringify({ message: 'No posts found for this user' }),
          { status: 404 }
        );
      }
  
      // Return the found posts
      return new NextResponse(
        JSON.stringify({ foundPosts: availablePosts }),
        { status: 200 }
      );
    } catch (error: any) {
      return new NextResponse(
        JSON.stringify({ error: error.message || 'Server error' }),
        { status: 500 }
      );
    }
  };
    
export const POST = async (request: Request) => {
    try{
        // Establishing database connection below
        await dbConnection();
        const requestBody = await request.json();
        const newPost = new Post(requestBody);
        await newPost.save();

        return new NextResponse(JSON.stringify({createdpost: newPost, success: true}), {status: 200});
    }catch(error){
        return new NextResponse(JSON.stringify({message: "Opps something went wrong while posting please try again later"}),{status: 500});
    }
}


export const DELETE = async(request: Request) => {
    try{
        const {searchParams} = new URL(request.url);
        const postId: string = searchParams.get("postid") ||  "";
        if(!Types.ObjectId.isValid(postId)){
            return new NextResponse(JSON.stringify({message: "Post id is not valid"}), {status: 400});
        }

        const postDelete = await Post.findByIdAndDelete(new Types.ObjectId(postId));
        if(!postDelete){
            return new NextResponse(JSON.stringify({message: "Post does not exist"}), {status: 404});
        }
        return new NextResponse(JSON.stringify({message: "Post has been deleted"}), {status: 200});
    }catch(error){
        return new NextResponse(JSON.stringify({message: "Something went wrong"}))
    }
}