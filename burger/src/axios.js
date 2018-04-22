
import axios from "axios";

const axiosInstance = axios.create({
    baseURL : "https://deepaks-burger.firebaseio.com"
})

export   default axiosInstance;