import express from 'express'
import authRoutes from './routes/auth.routes.js'
import dotenv from "dotenv"
import connectDB from "./lib/db.js"

dotenv.config()
const app =express();
const port =  process.env.PORT 

app.use(express.json());

app.use('/api/auth',authRoutes)

app.get('/', (req, res) => {
    res.send("server is running");
})

app.listen(port, (req, res) => {
    console.log(`port is working properly on ` +port)
    connectDB();
    
})  



