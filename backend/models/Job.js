// backend/models/Job.js
import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: String,
  location: String,
  description: String,
  skills_required: [String],
  posted_date: { type: Date, default: Date.now },
  deadline: Date,
  type: String, // Full-time, Internship, etc.
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" } // optional
}, { timestamps: true });

export default mongoose.model("Job", jobSchema);
