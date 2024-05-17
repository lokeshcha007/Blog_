import express from "express"
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.MONGO_DB).then((msg)=>{
    console.log('mongo connected');
})

const app = express()

app.listen(3000,()=>{
    console.log('app is listening at 3000!')
})