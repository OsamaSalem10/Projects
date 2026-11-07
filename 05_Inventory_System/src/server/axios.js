
import axios from "axios";

const api = axios.create({
    baseURL: "https://projects-s9p7.onrender.com/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
