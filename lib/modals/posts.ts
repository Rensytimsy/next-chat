import {Schema, models, model} from "mongoose";

//Below is an interface of how our data schema for post is gonna look like
interface PostSchema extends Document {
    ratings: number,
    user : string,
    contenet: string
}


const newPost = new Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    ratings: {
        type: Number,
        default: 0
    }
});


const Post = models.SocialPosts || model("SocialPosts", newPost);

export default Post;