import mongoose from "mongoose";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  //   console.log(req.body);

  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });

    await newUser.save();
    res.status(200).send("User has been created!");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));
    const passwordIsCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordIsCorrect)
      return next(createError(400, "Wrong Crendentials!"));

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    const { password, ...other } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res) => {
  try {
    //   const newUser = new User(req.body);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
