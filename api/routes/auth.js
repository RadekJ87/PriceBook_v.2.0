import express from "express";
import {User} from "../models/User.js";
import bcrypt from "bcrypt";

const authRouter = express.Router();

authRouter
    .post('/register', async (req, res) => {
        try {
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
            // moze zwracać
            // const err = error.keyValue?.username ?? error.keyValue?.email;
            // console.log(err);
            res.status(500).json(error)
        }
    })

    .post('/login', async (req, res) => {
        try {
            const user = await User.findOne({username: req.body.username});
            if (!user) return res.status(400).json('Wrong credentials');

            const {password, ...others} = user._doc;

            const isPasswordCorrect = await bcrypt.compare(req.body.password, password);
            if (!isPasswordCorrect) return res.status(400).json('Wrong credentials');

            return res.status(200).json(others);

        } catch (error) {
            res.status(500).json(error)
        }

    })

export default authRouter;