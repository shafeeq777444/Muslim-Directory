import axios from "axios";

const axiosInstance=axios.create({
    baseURL:process.env.NEXT_PUBLIC_BACKENDBASEURL,
    withCredentials:true
})

export default axiosInstance