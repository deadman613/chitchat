import mongoose from "mongoose" 
 const connectDB =async ()=>{
    try{

       const conn= await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Mongo_DB connected : ${conn.connection.host}`)
        
    }
    catch(e){
        console.log('Mongodb connnectino Error',e)
        

    }
}

export default connectDB