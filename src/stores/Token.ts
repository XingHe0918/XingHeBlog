import {defineStore} from "pinia";

export const TOKEN = defineStore(
    'token',
    {
        state: () => ({
            token: '' // 存储token
        }),
        actions: {
            setToken(token: string) {
                this.token = token;
            },
            clearToken() {
                this.token = '';
            }
        },
        getters: {
            getToken: (state) => state.token
        }
    }
)
