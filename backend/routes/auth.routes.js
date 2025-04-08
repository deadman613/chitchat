import express from 'express'
import { signup,login,logout } from '../controllers/auth.controler.js'
import { protectedRoute } from '../middleware/auth.middleware.js'
import {updateProfile} from '../controllers/auth.controler.js'
import {checkAuth} from '../controllers/auth.controler.js'

const router = express.Router()

router.post('/signup',signup)

router.post('/login',login )


router.post('/logout',logout)

router.put("/update-profile",protectedRoute,updateProfile)

router.get('/check',protectedRoute,checkAuth)

export default router


