import express from "express";
import {
  addVideo,
  updateVideo,
  deleteVideo,
  addView,
  getByTag,
  getVideo,
  randomVideos,
  search,
  subscribed,
  trend,
} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//create a video
router.post("/", verifyToken, addVideo);
router.get("/random", randomVideos);
router.get("/trend", trend);
router.get("/subscribed", verifyToken, subscribed);
router.get("/search", search);
router.put("/:id", verifyToken, updateVideo);
router.delete("/:id", verifyToken, deleteVideo);
router.get("/:id", getVideo);
router.put("/view/:id", addView);
router.get("/tags", getByTag);

export default router;
