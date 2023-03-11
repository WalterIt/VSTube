import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token)
    return next(createError(401, "You are not authenticated! Please, log in."));

  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error)
      return next(createError(403, "Token is not valid! Please, log in."));

    req.user = user;
    next();
  });
};
