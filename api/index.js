import express from "express"
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from "./routes/user.routes.js"

dotenv.config()

mongoose.connect(process.env.MONGO_DB).then((msg)=>{
    console.log('mongo connected');
})




const app = express()

app.use('/api/user',router)

app.listen(3000,()=>{
    console.log('app is listening at 3000!')
})


