import { createError } from "../error.js";
import User from "../models/user.js";

// UPDATE A USER
export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (error) {
      next(error);
    }
  } else {
    return next(createError(403, "You can update only your account!"));
  }
};
// DELETE A USER
export const deleteUser = async (req, res, next) => {
  //   console.log(req.body);

  try {
    res.status(200).send("User has been created!");
  } catch (error) {
    next(error);
  }
};
// GET A USER
export const getUser = async (req, res, next) => {
  //   console.log(req.body);

  try {
    res.status(200).send("User has been created!");
  } catch (error) {
    next(error);
  }
};
// SUBSCRIBE A USER
export const subscribe = async (req, res, next) => {
  //   console.log(req.body);

  try {
    res.status(200).send("User has been created!");
  } catch (error) {
    next(error);
  }
};
// UNSUBSCRIBE A USER
export const unsubscribe = async (req, res, next) => {
  //   console.log(req.body);

  try {
    res.status(200).send("User has been created!");
  } catch (error) {
    next(error);
  }
};
// LIKE A VIDE0
export const like = async (req, res, next) => {
  //   console.log(req.body);

  try {
    res.status(200).send("User has been created!");
  } catch (error) {
    next(error);
  }
};
// DISLIKE A VIDEO
export const dislike = async (req, res, next) => {
  //   console.log(req.body);

  try {
    res.status(200).send("User has been created!");
  } catch (error) {
    next(error);
  }
};
