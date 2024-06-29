import { TOKEN } from "@/stores/Token";
import axios from "axios";
const token = TOKEN();

export async function addArticle(article) {
  return  axios.post("/api/article/addArticle", article, {
    headers: {
      Authorization: `Bearer ${token.getToken}`,
    },
  })
}

export function getArticleById(id:string){
  return axios.post('/api/article/getArticleById',{id:id},{
    headers: {
      Authorization: `Bearer ${token.getToken}`,
    },
  })
}
