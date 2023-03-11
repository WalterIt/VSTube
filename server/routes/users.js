import express from "express";
import {
  update,
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// UPDATE A USER
router.put("/:id", verifyToken, update);
// DELETE A USER
router.delete("/:id", verifyToken, deleteUser);

// GET A USER
router.get("/:id", verifyToken, getUser);

// SUBSCRIBE A USER
router.put("/subscribe/:id", verifyToken, subscribe);

// UNSUBSCRIBE A USER
router.put("/unsubscribe/:id", verifyToken, unsubscribe);

// LIKE A VIDE0
router.put("/like/:videoId", verifyToken, like);

// DISLIKE A VIDEO
router.put("/dislike/:videoId", verifyToken, dislike);

export default router;
