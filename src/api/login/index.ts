import axios from "axios";
import { userData } from "./types";

export function userLogin(formData?: userData){
    return axios.post('/api/user/userRegister', formData)
        .then(res => {
            return res.data
        })
}
