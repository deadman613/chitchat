import express from "express";
import {protectedRoute}  from "../middleware/auth.middleware.js";
import {getUserForsidebar,getMessages,sendMessages} from '../controllers/message.controler.js'
// import getMessages from '../controllers/message.controler.js'
// import sendMessages from '../controllers/message.controler.js'



const router = express.Router();

router.get('/user',protectedRoute,getUserForsidebar);
router.get('/:id',protectedRoute,getMessages);
router.get('/send/:id',protectedRoute,sendMessages);




export default router   