import mongoose from "mongoose";

const userschema = mongoose.Schema({

    gmail:{
        type:String,
        required:true

    },
    Fullname:{
        type:String,
        required:true 
    },
    password:{
        type:String,
        required:true,
        minlength:6

    },
    profilepic:{
        type:String,
        default:""
    }
},{ timestamps:true})

 const user =mongoose.model("User",userschema)

export default user
