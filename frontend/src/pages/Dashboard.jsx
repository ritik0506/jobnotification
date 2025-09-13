// frontend/src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { getMatchedJobs } from "../services/api";

export default function Dashboard(){
  const [recs, setRecs] = useState([]);
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    if (!user?._id) return;
    (async()=>{
      const data = await getMatchedJobs(user._id);
      setRecs(data);
    })();
  }, [user]);

  return (
    <div>
      <h2>Recommended Jobs for you</h2>
      {recs.map(item => (
        <div key={item.job._id} className="job-card">
          <h3>{item.job.title} — {item.job.company}</h3>
          <p>Score: {item.score}%</p>
          <p>Matched: {item.matchedSkills.join(", ") || "None"}</p>
          <p>Missing: {item.missingSkills.join(", ") || "None"}</p>
          <button>View & Apply</button>
        </div>
      ))}
    </div>
  );
}
