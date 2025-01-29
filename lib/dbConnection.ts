import mongoose from "mongoose";

const MongoUrl: string = process.env.MONGO_URL || "";

export const dbConnection = async() => {
    try{
        const isAlreadyConnected:Number = mongoose.connection.readyState;

        if(isAlreadyConnected === 1){
            console.log("Already connected to  the database!");
        }

        if(isAlreadyConnected === 2){
            console.log("Establishing a connection to the database.....");
        }

        await mongoose.connect(MongoUrl, {
            bufferCommands: true
        });

        console.log("Successfully connected to the database!");
    }catch(error: any){
        console.log(error.message);
    }
}