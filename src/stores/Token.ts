import {defineStore} from "pinia";
import router from "@/router";

export const TOKEN = defineStore(
    'token',
    {
        state: () => ({
            token: localStorage.getItem('apiToken') || ''
        }),
        actions: {
            setToken(token: string) {
                localStorage.setItem('apiToken', token)
            },
            clearToken() {
               localStorage.removeItem('apiToken')
            }
        },
        getters: {
            getToken: () => {
                const token = localStorage.getItem('apiToken');
                if (!token) {
                    router.push({ name: 'login' });
                    return null;
                }
                // 解码 token 并检查过期时间
                const payload = JSON.parse(atob(token.split('.')[1]));
                const isExpired = payload.exp * 1000 < Date.now();

                if (isExpired) {
                    alert('Your session has expired. Please log in again.');
                    router.push({ name: 'login' }); // 跳转到登录页面，假设您的路由名是 'Login'
                    return null;
                }

                return token;
            }
        }
    }
)
