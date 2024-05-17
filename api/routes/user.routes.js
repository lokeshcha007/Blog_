import { test } from "../controllers/user.controllers.js";
import User from "../models/user.models.js";
import express from "express"


const router = express.Router()


router.get("/test",test)

export default router