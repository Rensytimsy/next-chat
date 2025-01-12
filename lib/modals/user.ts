import mongoose, {Schema,model, models} from "mongoose";

interface Iuser extends Document {
    username: string,
    userPassword: string,
    userEmail: string
}


const userSchema = new Schema<Iuser>({
    username: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    }
}, {timestamps: true});


const Users = models.Users || model("Users", userSchema);
export default Users;