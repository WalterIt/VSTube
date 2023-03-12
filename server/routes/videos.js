import express from "express";
import {
  addVideo,
  updateVideo,
  deleteVideo,
  addView,
  getByTag,
  getVideo,
  random,
  search,
  subscribed,
  trend,
} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//create a video
router.post("/", verifyToken, addVideo);
router.put("/:id", verifyToken, updateVideo);
router.delete("/:id", verifyToken, deleteVideo);
router.get("/find/:id", getVideo);
router.put("/view/:id", addView);
router.get("/trend", trend);
router.get("/random", random);
router.get("/subscribed", verifyToken, subscribed);
router.get("/tags", getByTag);
router.get("/search", search);

export default router;
