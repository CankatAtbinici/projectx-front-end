

import axios from "axios";
import { getAccessToken } from "../auth/auth.service";


const api =  axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    token : getAccessToken()
})


export default api

