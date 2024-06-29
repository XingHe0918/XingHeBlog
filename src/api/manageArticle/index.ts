import axios from "axios";
import {TOKEN} from "@/stores/Token";
const token = TOKEN()

export function getArticleAll(){
    return axios.post('/api/article/getArticleAll',null,{
        headers: {
            Authorization: `Bearer ${token.getToken}`,
        },
    })
}


