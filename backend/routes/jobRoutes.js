// backend/routes/uploadRoutes.js
import express from "express";
import multer from "multer";
import { protect } from "../middleware/authMiddleware.js";
import User from "../models/User.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/resume", protect, upload.single("resume"), async (req, res) => {
  try {
    // in production upload to S3 / GridFS. Here we save filename path to user.
    const user = await User.findById(req.userId);
    user.resumeUrl = req.file.path;
    await user.save();
    res.json({ message: "Resume uploaded", path: req.file.path });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

export default router;
