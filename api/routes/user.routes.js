import { test } from "../controllers/user.controllers.js";
import User from "../models/user.models.js";
import express from "express"


const userRouter = express.Router()


userRouter.get("/test",test)

export default userRouter