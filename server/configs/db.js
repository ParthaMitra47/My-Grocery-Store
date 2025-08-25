import mongoose from "mongoose";
 
const connectDB = async ()=>{
    try {
        // 'connected' is the name of the event 
        mongoose.connection.on('connected', ()=> console.log("Database Connected")
        );
        await mongoose.connect(`${process.env.MONGODB_URI}/mygrocery`)
    } catch (error) {
        console.error(error.message);
        
    }
}
export default connectDB;