// frontend/src/services/api.js
import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000/api" });

// attach token
API.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const registerUser = (data) => API.post("/auth/register", data).then(r=>r.data);
export const loginUser = (data) => API.post("/auth/login", data).then(r=>r.data);
export const getJobs = () => API.get("/jobs/all").then(r=>r.data);
export const getMatchedJobs = (userId) => API.get(`/jobs/match/${userId}`).then(r=>r.data);
export const addJob = (job) => API.post("/jobs/add", job).then(r=>r.data); // admin
export const applyJob = (jobId) => API.post("/applications/apply", { jobId }).then(r=>r.data);
export const getApplications = (userId) => API.get(`/applications/${userId}`).then(r=>r.data);
