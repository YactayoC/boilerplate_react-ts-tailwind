import axios from "axios";

// El nombre del archivo puede cambiar
export const NameAPI = axios.create({
  baseURL: "https://api.nationalize.io",
  timeout: 1000,
});

// interceptors send headers bearer token
NameAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
