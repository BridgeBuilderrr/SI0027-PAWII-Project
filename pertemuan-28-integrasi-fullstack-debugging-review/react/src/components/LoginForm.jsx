// Solusi Referensi - Pertemuan 23-24-25: Login dari SPA & menyimpan token JWT

import { useState } from "react";
import api from "../api/axiosInstance";

function LoginForm({ onLoginBerhasil }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      const res = await api.post("/auth/login", { username, password });
      localStorage.setItem("token", res.data.token);
      onLoginBerhasil();
    } catch (err) {
      setError("Username/password salah");
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      {error && <span className="error">{error}</span>}
    </form>
  );
}

export default LoginForm;
