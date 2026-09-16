// Solusi Referensi - Pertemuan 23-24-25: Instance Axios + interceptor token JWT

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("Token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
