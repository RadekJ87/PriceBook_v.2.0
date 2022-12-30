import express from "express";
import {User} from "../models/User.js";
import bcrypt from "bcrypt";
import * as dotenv from "dotenv";

const authRouter = express.Router();
dotenv.config();

authRouter

.post('/register', async(req, res) => {
   try{
       const salt = bcrypt.genSaltSync(10);
       const hash = bcrypt.hashSync(req.body.password, salt);

       const user = new User({
           username: req.body.username,
           email: req.body.email,
           password: String(hash),
       })

       const newUser = await user.save();
       res.status(200).json(newUser);

   } catch (error) {
       res.status(500).json(error)
   }
})

export default authRouter;