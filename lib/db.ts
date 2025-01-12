// db.ts is the file that handles database connection.
import mongoose from "mongoose";

const mongoUrl: string = process.env.MONGO_URL || "";

async function dbConnection(){
    const isAlreadyConnected = mongoose.connection.readyState;

    // below if the number is 1 meaning that there is an existing connection to our database. number 0 means that there was no established connection to the database.
    if(isAlreadyConnected === 1){
        console.log('Already connected to the database');
        return;
    }
    // if the number is 2 meaning the is being a connection being established and 3 means that the connection was established and now closing the connection.
    if(isAlreadyConnected === 2){
        console.log("Connecting.....");
        return;
    }

    try{
        //lets now connect to the database
        await mongoose.connect(mongoUrl, {bufferCommands: true});
        console.log("Connected to the database!");
    }catch(error: any){
        console.log("Error: ", error);
        throw new Error("Error: ", error);
    }
} 


export default dbConnection;
