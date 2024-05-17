import express from "express"
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from "./routes/user.routes.js"
import authRouter from "./routes/auth.routes.js"

dotenv.config()

mongoose.connect(process.env.MONGO_DB).then((msg)=>{
    console.log('mongo connected');
})




const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(3000,()=>{
    console.log('app is listening at 3000!')
})

app.use('/api/user',userRouter)
app.use('/api/auth', authRouter )



app.use((err,req,res,next)=>{
    const statuscode = err.statuscode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statuscode).json({
        success:false,
        statuscode,
        message
    })
})