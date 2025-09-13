// backend/routes/applicationRoutes.js
import express from "express";
import Application from "../models/Application.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Apply to job
router.post("/apply", protect, async (req, res) => {
  try {
    const { jobId } = req.body;
    const existing = await Application.findOne({ user: req.userId, job: jobId });
    if (existing) return res.status(400).json({ error: "Already applied" });

    const application = await Application.create({ user: req.userId, job: jobId });
    res.json({ message: "Applied", application });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// Get user's applications
router.get("/:userId", protect, async (req, res) => {
  try {
    const apps = await Application.find({ user: req.params.userId }).populate("job");
    res.json(apps);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

export default router;
