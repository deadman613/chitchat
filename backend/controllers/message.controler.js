import User from '../models/user.model.js'

export const getUserForsidebar = async (req,res)=>{

    try {
        const loggedInuserId = req.user._id;
        const filterUsers = await User.find({_id:{$ne:loggedInuserId}}).select("-password");
        
        res.status(200).json(filterUsers) 

    } catch (error) {
       console.log('Error in getUserForSidebar:',error.message)
       res.status(500).json({message:'Internal Error'})
        
        
    }


};

export const getMessages = async (req,res)=>
{
        try {
            const {id:userToChatId} = req.params
            const myId = req.user._id;
            const message =await MessageChannel.find({
                    $or:[
                        {senderId:myId ,receiverId:userToChatId},
                        {senderId:userToChatId,receiver:myId}
                    ]

            })


            res.status(200).json(message)
        } catch (error) {
            console.log('error in message.controler.js',error.message);
            res.status(500).json({message:"Internal server Error "});
            
            
        }
};

export const sendMessages =async (req,res)=>{
    try {
        const {text ,image} = req.body;
        const {id:receiverId}=req.params;
        const senderId = req.user._id;

        let imageUrl;

        if(image)
        {
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

     
         const newMessage = new message({
            senderId,
            receiverId,
            text,
           image:imageUrl

        })
    
  

        await newMessage.save();

        // socket .io hoga yaha for real time functionality
        
    } catch (error) {

        console.log('error in send message.controller.js ',error.message)
        res.status(500).json({message:'Internal Error'})
        
        
    }
};

