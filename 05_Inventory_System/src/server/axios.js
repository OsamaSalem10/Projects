
import axios from "axios";

const api = axios.create({
    baseURL: "https://zero5-inventory-system.onrender.com/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
