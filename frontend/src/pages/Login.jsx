// frontend/src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";

export default function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [err,setErr]=useState("");
  const nav=useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser({ email, password });
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      nav("/dashboard");
    } catch (err) {
      setErr(err?.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      {err && <p style={{color:"red"}}>{err}</p>}
      <form onSubmit={submit}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button>Login</button>
      </form>
    </div>
  );
}
